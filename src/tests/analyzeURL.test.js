// Import the function you want to test
import { analyzeURL } from '../client/js/analyzeURL'; // Replace with your actual module path

describe('analyzeURL', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test('should call fetch with the correct URL and options', async () => {
    const mockUrl = 'http://example.com';
    const mockResponseData = { success: true, result: 'some data' };

    // Mock fetch to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponseData),
    });

    const data = await analyzeURL(mockUrl);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/analyze-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: mockUrl }),
    });

    expect(data).toEqual(mockResponseData);
  });

  test('should handle fetch errors gracefully', async () => {
    const mockUrl = 'http://example.com';

    // Mock fetch to throw an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

    console.log = jest.fn(); // Mock console.log to suppress error output during the test

    const data = await analyzeURL(mockUrl);

    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/analyze-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: mockUrl }),
    });

    expect(data).toBeUndefined(); // Function returns undefined on error
    expect(console.log).toHaveBeenCalledWith(new Error('Fetch error')); // Ensure error is logged
  });
});