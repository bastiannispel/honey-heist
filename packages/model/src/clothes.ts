export default interface Clothes {
    HBS(): number
    topColor: TopColor
    top: Top
    pantsColor: PantsColor
    pants: Pants
    accessoire?: Accessoire
}

export enum TopColor {
    FluorescentYellow,
    Very90sTieDyed,
    PowderBlueFrilly,
    BlackAndWhiteStriped,
    Beige,
    Black
}

export enum Top {
    Mittens,
    CropTop,
    TuxedoJacketOrShirtAndBowTie,
    TShirt,
    Jumper,
    TrenchCoat
}

export enum PantsColor {
    PeachVelour, 
    LeopardPrint,
    Tartan,
    BlackLeather, 
    BlueDenim,
    Grey
}

export enum Pants {
    YFronts,
    KneeLengthSkirt,
    Knickerbockers,
    BellBottomedFlares,
    CargoPants,
    SmartTrousers
}

export enum Accessoire {
    PinkCowboyHat = -1,
    BejewelledCrown = -2,
    BadgeThatSaysBEARNPROUD = -3,
    TophatAndMonocle = 1,
    BeautifulBlondeWig = 2,
    CoolShades = 3
}