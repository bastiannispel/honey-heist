import { rollDice6 } from "utility/random";
import IClothes, { Accessoire, ClothesData } from "types/clothes";


export default class Clothes implements IClothes{
    private _topColor: number;
    private _top: number;
    private _pantsColor: number;
    private _pants: number;
    private _accessoire: Accessoire;

    constructor(clothesData?: ClothesData) {
       this._topColor = clothesData?.topColor ?? rollDice6()
       this._top = clothesData?.top ?? rollDice6()
       this._pantsColor = clothesData?.pantsColor ?? rollDice6()
       this._pants = clothesData?.pants ?? rollDice6()
       this._accessoire = clothesData?.accessoire ?? NaN
    }

    get topColor(): number {
        return this._topColor
    }
    get top(): number {
        return this._top
    }
    get pantsColor(): number {
        return this._pantsColor
    }
    get pants(): number {
        return this._pants
    }
    get accessoire(): Accessoire {
        return this._accessoire
    }

 
}