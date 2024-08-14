import { isValidUrl } from "../client/js/isValidURL";

describe('isValidUrl', () => {
  test('should return true for valid URLs including localhost', () => {
    expect(isValidUrl('http://example.com')).toBe(true);
    expect(isValidUrl('https://www.example.com/path?query=123')).toBe(true);
    expect(isValidUrl('http://localhost')).toBe(true); // Localhost case
    expect(isValidUrl('http://192.168.0.1')).toBe(true); // IP address case
  });

  test('should return false for invalid URLs', () => {
    expect(isValidUrl('http://')).toBe(false); // Incomplete URL
    expect(isValidUrl('example.com')).toBe(false); // Missing protocol
    expect(isValidUrl('http://example .com')).toBe(false); // Invalid character
    expect(isValidUrl('http://256.256.256.256')).toBe(false); // Invalid IP address
  });

  test('should return false for non-string inputs', () => {
    expect(isValidUrl(123)).toBe(false); // Number
    expect(isValidUrl([])).toBe(false); // Array
    expect(isValidUrl({})).toBe(false); // Object
    expect(isValidUrl(null)).toBe(false); // Null
    expect(isValidUrl(undefined)).toBe(false); // Undefined
  });
});
