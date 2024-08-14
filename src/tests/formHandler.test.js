// Import the functions and the handleSubmit function itself
import { handleSubmit } from '../client/js/formHandler';
import { analyzeURL } from '../client/js/analyzeURL';
import { displayError } from '../client/js/displayError';
import { updateUI } from '../client/js/updateUI';

jest.mock('../client/js/analyzeURL');
jest.mock('../client/js/displayError');
jest.mock('../client/js/updateUI');

describe('handleSubmit', () => {
  let mockEvent;
  
  // Setup a basic DOM structure before each test
  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };

    // Create and mock DOM elements
    document.body.innerHTML = `
      <form id="urlForm">
        <input id="name" type="text" value="http://example.com" />
      </form>
    `;

    document.getElementById = jest.fn((id) => document.querySelector(`#${id}`));
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  test('should prevent default form submission', async () => {
    await handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  test('should display error for invalid URL', async () => {
    document.getElementById.mockReturnValueOnce({ value: 'invalid-url' });

    await handleSubmit(mockEvent);

    expect(displayError).toHaveBeenCalledWith('Invalid Link Provided');
    expect(analyzeURL).not.toHaveBeenCalled();
    expect(updateUI).not.toHaveBeenCalled();
  });

  test('should call updateUI on successful analysis', async () => {
    document.getElementById.mockReturnValueOnce({ value: 'http://example.com' });
    const mockData = { status: { code: '0' }, result: 'some data' };
    analyzeURL.mockResolvedValue(mockData);

    await handleSubmit(mockEvent);

    expect(analyzeURL).toHaveBeenCalledWith('http://example.com');
    expect(updateUI).toHaveBeenCalledWith(mockData);
  });

  test('should display error if analysis fails', async () => {
    document.getElementById.mockReturnValueOnce({ value: 'http://example.com' });
    const mockData = { status: { code: '1', msg: 'Error occurred' } };
    analyzeURL.mockResolvedValue(mockData);

    await handleSubmit(mockEvent);

    expect(analyzeURL).toHaveBeenCalledWith('http://example.com');
    expect(displayError).toHaveBeenCalledWith('Error occurred');
    expect(updateUI).not.toHaveBeenCalled();
  });

  test('should display generic error if an exception occurs', async () => {
    document.getElementById.mockReturnValueOnce({ value: 'http://example.com' });
    analyzeURL.mockRejectedValue(new Error('Network error'));

    await handleSubmit(mockEvent);

    expect(displayError).toHaveBeenCalledWith('An unexpected error occurred');
    expect(updateUI).not.toHaveBeenCalled();
  });
});