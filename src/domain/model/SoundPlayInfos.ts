import { SoundPlayInfo } from '../model/SoundPlayInfo';

export class SoundPlayInfos {
  readonly soundPlayInfos: SoundPlayInfo[];

  constructor(soundPlayInfos: SoundPlayInfo[]) {
      this.soundPlayInfos = soundPlayInfos;
  }

  get(index : number) : SoundPlayInfo {
      return this.soundPlayInfos[index];
  }

  getFromUrl(url : string) : SoundPlayInfo|undefined {
      return this.soundPlayInfos.find(soundPlayInfo => {
          return soundPlayInfo.url === url;
      });
  }

  get length() : number {
      return this.soundPlayInfos.length;
  }

  map<T>(func: (soundPlayInfo:SoundPlayInfo)=>T): T[] {
      return this.soundPlayInfos.map(func);
  }
}

