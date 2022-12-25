export default interface Entity {
    hp: number,

    addHp(hp:number): void
    removeHp(hp:number): void
}