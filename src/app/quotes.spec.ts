import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(1,'','',new Date())).toBeTruthy();
  });
});
