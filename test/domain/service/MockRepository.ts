import { Sound } from '../../../src/domain/model/Sound';

import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';

import { Repository } from '../../../src/domain/repository/Repository';

export class MockRepository implements Repository {
    soundPlayInfos: SoundPlayInfos;

    constructor(soundPlayInfos: SoundPlayInfos) {
        this.soundPlayInfos = soundPlayInfos;
    }

    load(sound: Sound) : SoundPlayInfo|undefined {
        return this.soundPlayInfos.getSoundPlayInfoFromUrl(sound.url);
    }

    save(sound: Sound, playedTime: number) : void {
        const soundPlayInfo = this.soundPlayInfos.getSoundPlayInfoFromUrl(sound.url);
        if (soundPlayInfo) {
            soundPlayInfo.playedTime = playedTime;
        } else {
            throw new Error(`${sound.toString()} が見つかりませんでした。`);
        }
    }

    loadAll(): SoundPlayInfos {
        return new SoundPlayInfos([]);
    }

    saveAll(soundPlayInfos: SoundPlayInfos): void {
        // do nothing
    }
}


