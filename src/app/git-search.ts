import { findLast } from '@angular/compiler/src/directive_resolver';

export class Search {
    public find: string;
    constructor(find) {
        this.find = find;
    }
}
