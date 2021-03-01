import { Sound } from '../model/Sound';

export class SoundPlayInfo {
  readonly sound: Sound;
  playedTime: number;

  constructor(sound: Sound, playedTime: number) {
      this.sound = sound;
      this.playedTime = playedTime;
  }

  get soundName(): string {
      return this.sound.name;
  }

  get soundUrl(): URL {
      return this.sound.url;
  }

}

