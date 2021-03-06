import { Sound } from '../model/Sound';

export interface Repository {
    readonly url: string;
    readonly type: string;

    load(sound: Sound) : SoundPlayInfo|undefined;
    save(sound: Sound, playedTime: number) : void;

    loadAll() : SoundPlayInfos;
    saveAll(soundPlayInfos: SoundPlayInfos) : void;
}

