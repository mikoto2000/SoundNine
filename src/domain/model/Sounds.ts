import { Sound } from './Sound';

export class Sounds {
  readonly sounds: Sound[];

  constructor(sounds: Sound[]) {
      this.sounds = sounds.concat();
  }

  getSound(index : number) : Sound {
      return this.sounds[index];
  }

  get length(): number {
      return this.sounds.length;
  }

  map<T>(func: (sound:Sound)=>T): T[] {
      return this.sounds.map(func);
  }
}

