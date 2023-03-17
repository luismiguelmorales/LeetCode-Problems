import { describe, expect, it } from 'vitest';

import { longestPalindrome } from './app';

describe('longestPalindrome()', () => {
  const testCases = [
    {
      input: 'a',
      output: 'a',
    },
    {
      input: 'xx',
      output: 'xx',
    },
    {
      input: 'xy',
      output: 'y',
    },
    {
      input: 'xyxy',
      output: 'yxy',
    },
    {
      input: 'babad',
      output: 'aba',
    },
  ];

  for (let i = 1; i <= testCases.length; ++i) {
    it('Test case #' + i, () => {
      const input = testCases[i - 1].input;
      const output = longestPalindrome(input);

      const expectedOutput = testCases[i - 1].output;

      expect(output).toBe(expectedOutput);
    });
  }
});
