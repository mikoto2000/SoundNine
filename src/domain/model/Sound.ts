export class Sound {
  readonly name: string;
  readonly url: URL;

  constructor(name: string, url: URL) {
      this.name = name;
      this.url = new URL(url.toString());
  }

  static createFromURL(name: string, url: URL) {
      return new Sound(name, url);
  }

  static createFromString(name: string, url: string) {
      return new Sound(name, new URL(url));
  }
}

