export class SoundPlayInfo {
  readonly name: string;
  readonly url: string;
  playedTime: number;

  constructor(name: string, url: string, playedTime: number) {
      this.name = name;
      this.url = url;
      this.playedTime = playedTime;
  }
}

