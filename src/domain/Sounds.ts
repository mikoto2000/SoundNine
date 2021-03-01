import { Sound } from './Sound';

export class Sounds {
  readonly sounds: Sound[];

  constructor(sounds: Sound[]) {
      this.sounds = sounds.concat();
  }

  getSound(index : number) : Sound {
      return this.sounds[index];
  }
}

