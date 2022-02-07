
import { compute } from './compute';
// describe() // suite (group of related tests)
// describe('테스트명', function(){})
// describe('테스트명', () => {})

// it() // spec (use it to define spec or test)
// describe('compute', () => {
//   it('test name', () => {})
// })

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
    // expect(result).toBe(1); //FAILED
  })

  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })
})