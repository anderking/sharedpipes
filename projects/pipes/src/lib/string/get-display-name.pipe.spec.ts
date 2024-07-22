import { GetDisplayNamePipe } from './get-display-name.pipe';

describe('GetDisplayNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetDisplayNamePipe();
    expect(pipe).toBeTruthy();
  });
});
