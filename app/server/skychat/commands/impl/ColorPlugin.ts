import {Connection} from "../../Connection";
import {Plugin} from "../Plugin";


export class ColorPlugin extends Plugin {

    static readonly DEFAULT_COLOR: string = '#aaa';

    readonly defaultDataStorageValue = ColorPlugin.DEFAULT_COLOR;

    readonly name = 'color';

    readonly minRight = 0;

    readonly rules = {minCount: -1};

    async run(alias: string, param: string, connection: Connection): Promise<void> {
        throw new Error('This command can not be run');
    }
}
