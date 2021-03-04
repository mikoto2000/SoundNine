import { Sounds } from './Sounds';

export class DataSource {
  readonly name: string;
  readonly type: string;
  readonly url: string;
  readonly sounds: Sounds;

  constructor(name: string, type: string, url: string, sounds: Sounds) {
      this.name = name;
      this.type = type;
      this.url = url;
      this.sounds = sounds;
  }

  get length(): number {
      return this.sounds.length;
  }
}

