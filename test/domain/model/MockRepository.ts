import { SoundPlayInfo } from '../../../src/domain/model/SoundPlayInfo';
import { SoundPlayInfos } from '../../../src/domain/model/SoundPlayInfos';

import { Repository } from '../../../src/domain/repository/Repository';

export class MockRepository implements Repository {
    soundPlayInfos: SoundPlayInfos;

    constructor(soundPlayInfos: SoundPlayInfos) {
        this.soundPlayInfos = soundPlayInfos;
    }

    get url(): string {
        return "mock";
    }

    get type(): string {
        return 'mock';
    }

    load(sound: SoundPlayInfo) : SoundPlayInfo|undefined {
        return this.soundPlayInfos.getFromUrl(sound.url);
    }

    save(sound: SoundPlayInfo, playedTime: number) : void {
        const soundPlayInfo = this.soundPlayInfos.getFromUrl(sound.url);
        if (soundPlayInfo) {
            soundPlayInfo.playedTime = playedTime;
        } else {
            throw new Error(`${sound.toString()} が見つかりませんでした。`);
        }
    }

    loadAll(): SoundPlayInfos {
        return this.soundPlayInfos;
    }

    saveAll(soundPlayInfos: SoundPlayInfos): void {
        // do nothing
    }
}


