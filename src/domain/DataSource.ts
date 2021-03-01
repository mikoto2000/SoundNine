import { Sounds } from './Sounds';

export class DataSource {
  readonly name: string;
  readonly type: string;
  readonly url: URL;
  readonly sounds: Sounds;

  constructor(name: string, type: string, url: URL, sounds: Sounds) {
      this.name = name;
      this.type = type;
      this.url = new URL(url.toString());
      this.sounds = sounds;
  }
}

