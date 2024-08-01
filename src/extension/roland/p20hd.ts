import { SerialPort } from "serialport";
import { RolandDevice } from "./roland-device";

export class P20hd extends RolandDevice {
  static override deviceName = 'P-20HD'

  static async connect(portList: SerialPort[]): Promise<P20hd> {
    return new P20hd(await this.connectRoland(portList))
  }

  async playPlaylist(playlist: number) {
    await super.execute('APL', [playlist.toString()])
  }
}