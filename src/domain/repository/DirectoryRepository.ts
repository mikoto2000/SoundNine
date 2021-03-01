import fs from 'fs'
import path from 'path'

import { Sound } from '../model/Sound';
import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { SoundPlayInfos } from '../model/SoundPlayInfos';

import { Repository } from '../repository/Repository';

export class DirectoryRepository implements Repository {
    soundPlayInfos: SoundPlayInfos;

    constructor(directory: string) {
        const children = fs.readdirSync(directory, {withFileTypes: true});

        const files = children.filter(child => child.isFile()).map(file => file.name);

        this.soundPlayInfos = new SoundPlayInfos(files.map(file => {
            return new SoundPlayInfo(Sound.createFromString(file, 'file:///' + path.resolve(directory) + '/' + file), 0);
        }));
    }

    load(sound: Sound) : SoundPlayInfo|undefined {
        return undefined;
    }

    save(sound: Sound, playedTime: number) : void {
    }

    loadAll() : SoundPlayInfos {
        return this.soundPlayInfos;
    }

    saveAll(soundPlayInfos: SoundPlayInfos) : void {
    }
}


