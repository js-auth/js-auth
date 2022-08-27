import { proofOfPossession } from './proof-of-possession';

describe('proofOfPossession', () => {
  it('should work', () => {
    expect(proofOfPossession()).toEqual('proof-of-possession-minor-change');
  });
});
