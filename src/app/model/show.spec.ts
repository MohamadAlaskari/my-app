import { title } from 'process';
import { Show } from './show';

describe('Show', () => {
  it('should create an instance', () => {
    expect(new Show(1, title)).toBeTruthy();
  });
});
