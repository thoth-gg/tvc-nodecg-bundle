import { SerialPort } from "serialport";
import { PortInfo } from "@serialport/bindings-interface";

export const STX = String.fromCharCode(0x02)
export const ACK = String.fromCharCode(0x06)
export const EXIT_CODE = String.fromCharCode(0x3B)

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export class RolandDevice {
  port: SerialPort
  private line: string = ''
  private receivedCommandList: Command[] = []
  static deviceName = 'RolandDevice'
  
  constructor(port: SerialPort) {
    this.port = port

  //   this.port.on('data', (data) => {
  //     data.toString().split("").forEach((char: string) => {
  //       if (char == ACK) {
  //         this.receivedCommandList.push(new Command(ACK))
  //         return
  //       }
  //       if (char == EXIT_CODE) {
  //         this.receivedCommandList.push(new Command(this.line.slice(1, 4),  this.line.slice(5).split(',')))
  //         console.log(this.line)
  //         this.line = ''
  //       } else {
  //         this.line += char
  //       }
  //     })
  //   })
  }

  static async connectRoland(portList: SerialPort[]): Promise<SerialPort> {
    const res = await Promise.all(portList.map(async (port) => {
      const device = new RolandDevice(port)
      const verName = await device.getDeviceNameAndVersion().catch(() => ({deviceName: ''}))
      if (verName.deviceName == this.deviceName) {
        return port
      }
    })).then(res => res.find(p => p))
    if (!res) {
      throw new Error('device not found')
    }
    return res
  }

  async getDeviceNameAndVersion(): Promise<{deviceName: string, version: string}> {
    const res = await this.execute('VER')
    return {
      deviceName: res.params[0],
      version: res.params[1]
    }
  }

  protected execute(command: string, params: string[] = []): Promise<Command> {
    return new Promise(async (resolve, reject) => {
      let cmd = STX + command
      if (params.length > 0) {
        cmd += ':' + params.join(',')
      }
      cmd += EXIT_CODE

      const isAck = command != 'VER' && !command.startsWith("Q")

      const timeout = setTimeout(() => {
        reject('timeout')
      }, 1000)

      let response = ''
      this.port.on('data', (data) => {
        response += data.toString()
        if(isAck) {
          if (response == ACK) {
            this.port.removeAllListeners('data')
            clearTimeout(timeout)
            resolve(new Command(ACK))
          }
        } else {
          if (response.endsWith(EXIT_CODE)) {
            console.log(response)
            this.port.removeAllListeners('data')
            clearTimeout(timeout)
            resolve(new Command(response.slice(1, 4), response.slice(5, -1).split(',')))
          }
        }
      })
      this.port.write(Buffer.from(cmd))

     

      // for (let i = 0; i < 100; i++) {
      //   const receivedCommand = this.receivedCommandList.find(c => c.code == expectCode)
      //   if (!receivedCommand) {
      //     await sleep(10)
      //     continue
      //   }
      //   this.receivedCommandList = this.receivedCommandList.filter(c => c != receivedCommand)
      //   resolve(receivedCommand)
      // }

      // reject('timeout')
    })
  }
}

export class Command {
  code: string
  params: string[]

  constructor(code: string, params: string[] = []) {
    this.code = code
    this.params = params
  }
}