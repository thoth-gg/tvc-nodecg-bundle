import { SerialPort } from "serialport";
import { RolandDevice } from "./roland-device";

export class Vr4hd extends RolandDevice {
  static override deviceName = 'VR-4HD'

  static async connect(portList: SerialPort[]): Promise<Vr4hd> {
    return new Vr4hd(await this.connectRoland(portList))
  }

  async setProgram(input: number) {
    await super.execute('PGM', [input.toString()])
  }

  async setKeying(isEnable: boolean) {
    await super.execute('DSK', [isEnable ? '1' : '0'])
  }
}