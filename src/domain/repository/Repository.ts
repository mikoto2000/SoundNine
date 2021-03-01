import { Sound } from '../model/Sound';

export interface Repository {
    load(sound: Sound) : number;
    save(sound: Sound, playedTime: number) : void;
}

