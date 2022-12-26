import { rollDice6 } from "../random";

describe('rollDice6', () => { 
    it('result between 1-6', () => {
        expect.hasAssertions()
        for(let i=0;i<100;i++){
            const number = rollDice6()
            expect(number).toBeLessThanOrEqual(6)
            expect(number).toBeGreaterThanOrEqual(1)
        }
     })
 })