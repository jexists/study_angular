
import { greet } from './greet';

// tests should not be fragile
describe('greet', () => {
  it('should include the name in the message', () => {
    // expect(greet('joy')).toBe('Welcome joy');
    // 만약에 greet 코드를 수정(예: 느낌표 추가)할 경우 에러가 되기때문에 
    expect(greet('joy')).toContain('joy');
  })

})