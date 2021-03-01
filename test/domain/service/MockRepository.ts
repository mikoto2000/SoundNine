import { Sound } from '../../../src/domain/model/Sound';

import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';

import { Repository } from '../../../src/domain/repository/Repository';

export class MockRepository implements Repository {
    playedTime: number;

    constructor(playedTime: number) {
        this.playedTime = playedTime;
    }

    load(sound: Sound) : number {
        return this.playedTime;
    }

    save(sound: Sound, playedTime: number) : void {
        this.playedTime = playedTime;
    }
}


