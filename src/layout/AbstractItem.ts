import { IItem } from "./IItem";

export abstract class AbstractItem implements IItem {
    type: TFaustUIInputType | TFaustUIOutputType;
    label: string;
    address: string;
    index: number;
    init: number;
    min: number;
    max: number;
    meta?: TFaustUIMeta[];
    layout: TLayoutProp;
    constructor(item: TFaustUIItem) {
        Object.assign(this, item);
        this.min = isFinite(+this.min) ? +this.min : 0;
        this.max = isFinite(+this.max) ? +this.max : 1;
    }
}
