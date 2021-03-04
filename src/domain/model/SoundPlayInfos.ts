import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';

export class SoundPlayInfos {
  readonly soundPlayInfos: SoundPlayInfo[];

  constructor(soundPlayInfos: SoundPlayInfo[]) {
      this.soundPlayInfos = soundPlayInfos;
  }

  getSoundPlayInfo(index : number) : SoundPlayInfo {
      return this.soundPlayInfos[index];
  }

  getSoundPlayInfoFromUrl(url :  string) : SoundPlayInfo|undefined {
      return this.soundPlayInfos.find(soundPlayInfo => {
          return soundPlayInfo.soundUrl === url;
      });
  }

  get length() : number {
      return this.soundPlayInfos.length;
  }

  map<T>(func: (soundPlayInfo:SoundPlayInfo)=>T): T[] {
      return this.soundPlayInfos.map(func);
  }
}


