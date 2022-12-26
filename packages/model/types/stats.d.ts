export default interface IStats {
    get bear(): BearSkill
    get criminal(): CriminalSkill
    
    addBearSkill(): void
    addCriminalSkill(): void
}

export type StatsData = {
    bear: BearSkill
    criminal: CriminalSkill
} 

type BearSkill = number
type CriminalSkill = number