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

  get length(): number {
      return this.sounds.length;
  }

  static createFromURL(name: string, type: string, url: URL, sounds: Sounds) {
      return new DataSource(name, type, url, sounds);
  }

  static createFromString(name: string, type: string, url: string, sounds: Sounds) {
      return new DataSource(name, type, new URL(url), sounds);
  }
}

