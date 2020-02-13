/**
 * Checks if a string is palindrome or not, ignoring case, punctuation and spacing.
 *
 * @param {string} str The string to check.
 * @returns {boolean} Whether the given string is palindrome or not.
 */

function isPalindrome(str) {
  if (!str || str === '') return null;
  const sanitized = str.toLowerCase().replace(/[\W_]/g, '');
  return sanitized === sanitized.split('').reverse().join('');
}

module.exports = isPalindrome;
