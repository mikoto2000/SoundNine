import fs from 'fs'
import path from 'path'

import { SoundPlayInfo } from '../model/SoundPlayInfo';
import { SoundPlayInfos } from '../model/SoundPlayInfos';

import { Repository } from '../repository/Repository';

export class DirectoryRepository implements Repository {
    readonly url: string;
    readonly type: string = 'directory';
    readonly soundPlayInfos: SoundPlayInfos;

    constructor(directory: string) {
        this.url = 'file://' + path.resolve(directory);

        const children = fs.readdirSync(directory, {withFileTypes: true});

        const files = children.filter(child => child.isFile()).map(file => file.name);

        this.soundPlayInfos = new SoundPlayInfos(files.map(file => {
            return new SoundPlayInfo(file, 'file://' + path.resolve(directory) + '/' + file, 0);
        }));
    }

    load(sound: SoundPlayInfo) : SoundPlayInfo|undefined {
        return undefined;
    }

    save(sound: SoundPlayInfo, playedTime: number) : void {
    }

    loadAll() : SoundPlayInfos {
        return this.soundPlayInfos;
    }

    saveAll(soundPlayInfos: SoundPlayInfos) : void {
    }
}


