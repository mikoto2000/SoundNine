import { Sound } from '../model/Sound';

export class SoundPlayInfo {
  readonly sound: Sound;
  playedTime: number;

  constructor(sound: Sound, playedTime: number) {
      this.sound = sound;
      this.playedTime = playedTime;
  }
}

