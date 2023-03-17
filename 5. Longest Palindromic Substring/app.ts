export function longestPalindrome(s: string): string {
  const length: number = s.length;

  let isPalindrome: boolean[][] = [];

  for (let i = 0; i < length; ++i) {
    isPalindrome[i] = [];
    for (let j = 0; j < length; ++j) {
      isPalindrome[i][j] = true;
    }
  }

  let ans = s.substring(length - 1, length);

  let startIndex: number, endIndex: number;
  let startChar: string, endChar: string;

  for (let l = 2; l <= length; ++l) {
    for (let i = 0; i + l <= length; ++i) {
      startIndex = i;
      endIndex = i + l - 1;
      startChar = s.substring(startIndex, startIndex + 1);
      endChar = s.substring(endIndex, endIndex + 1);

      if (startChar != endChar || !isPalindrome[startIndex + 1][endIndex - 1]) {
        isPalindrome[startIndex][endIndex] = false;
      } else {
        ans = s.substring(startIndex, endIndex + 1);
      }
    }
  }

  return ans;
}
