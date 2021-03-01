export class Sound {
  readonly name: string;
  readonly url: URL;

  constructor(name: string, url: URL) {
      this.name = name;
      this.url = new URL(url.toString());
  }
}

