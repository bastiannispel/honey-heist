import Entity from "./entity"
import Clothes from "./clothes"
import Stats from "./stats"

export default interface Bear extends Entity {
    descriptor: Descriptor
    bearType: BearType
    role: Role
    clothes: Clothes,
    stats: Stats
}

export enum Descriptor {
    Rookie,
    WashedUp,
    Retired,
    Unhinged,
    Slick,
    Incompetent
}

export enum BearType {
    Grizzly,
    Polar,
    Panda, 
    Black,
    Sun,
    HoneyBadger
}

export enum Role {
    Muscle,
    Brains,
    Driver,
    Hacker,
    Thief,
    Face
}