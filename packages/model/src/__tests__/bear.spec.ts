import Bear from "../bear"

describe('Bear Class', () => { 
    test('Bear Init', () => { 
        const bear = new Bear()
        expect(bear).not.toBe(undefined)
     })
 })