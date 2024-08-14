import { updateUI } from "../client/js/updateUI";

describe('updateUI', () => {
  let mockElement;

  beforeEach(() => {
    mockElement = document.createElement('div');
    mockElement.id = 'results';
    document.body.appendChild(mockElement);

    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);
  });

  afterEach(() => {
    document.body.removeChild(mockElement);
    jest.restoreAllMocks();
  });

  test('should update the UI with very positive polarity', () => {
    const data = {
      score_tag: 'P+',
      subjectivity: 'Subjective',
      sentence_list: [
        { text: 'This is a sample positive text.' }
      ]
    };

    updateUI(data);

    expect(mockElement.innerHTML).toContain('<h3>The Polarity:</h3><p>The text is Very Positive</p>');
    expect(mockElement.innerHTML).toContain('<h3>The Subjectivity:</h3><p>Subjective</p>');
    expect(mockElement.innerHTML).toContain('<h3>Sample Text:</h3><p>This is a sample positive text.</p>');
  });

  test('should update the UI with no emotions', () => {
    const data = {
      score_tag: 'NEU',
      subjectivity: 'Objective',
      sentence_list: [
        { text: 'This is a neutral text.' }
      ]
    };

    updateUI(data);

    expect(mockElement.innerHTML).toContain('<h3>The Polarity:</h3><p>The text is No Emotions</p>');
    expect(mockElement.innerHTML).toContain('<h3>The Subjectivity:</h3><p>Objective</p>');
    expect(mockElement.innerHTML).toContain('<h3>Sample Text:</h3><p>This is a neutral text.</p>');
  });

  test('should update the UI with negative polarity', () => {
    const data = {
      score_tag: 'N',
      subjectivity: 'Objective',
      sentence_list: [
        { text: 'This is a sample negative text.' }
      ]
    };

    updateUI(data);

    expect(mockElement.innerHTML).toContain('<h3>The Polarity:</h3><p>The text is Negative</p>');
    expect(mockElement.innerHTML).toContain('<h3>The Subjectivity:</h3><p>Objective</p>');
    expect(mockElement.innerHTML).toContain('<h3>Sample Text:</h3><p>This is a sample negative text.</p>');
  });

  test('should update the UI with very negative polarity', () => {
    const data = {
      score_tag: 'N+',
      subjectivity: 'Subjective',
      sentence_list: [
        { text: 'This is a sample very negative text.' }
      ]
    };

    updateUI(data);

    expect(mockElement.innerHTML).toContain('<h3>The Polarity:</h3><p>The text is Very Negative</p>');
    expect(mockElement.innerHTML).toContain('<h3>The Subjectivity:</h3><p>Subjective</p>');
    expect(mockElement.innerHTML).toContain('<h3>Sample Text:</h3><p>This is a sample very negative text.</p>');
  });
});
  