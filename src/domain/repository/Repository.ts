import { Sound } from '../model/Sound';

export interface Repository {
    load(sound: Sound) : SoundPlayInfo|undefined;
    save(sound: Sound, playedTime: number) : void;

    loadAll() : SoundPlayInfos;
    saveAll(soundPlayInfos: SoundPlayInfos) : void;
}

