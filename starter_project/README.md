# News Article Analysis using NLP

This project is a web-based tool to analyze news articles and blogs using NLP. The tool can determine the general sentiment (Positive, Negative, or Neutral) and the objectivity of the text. The tool leverages NLP API Meaning Cloud to perform the analysis.

## Technologies:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Build Tool: Webpack
- NLP API: MeaningCloud API (or any other NLP API you choose)
- Testing: Jest

## Getting started:

Follow these steps to run and test the project on your own:

1. Clone this repository:

```bach
git clone https://github.com/MahmoudQaisi1/News-Article-Analysis-tool.git
cd news-article-analysis-webtool
```

2. Install the Dependencies:

```bach
npm install
```

3. Create a `.env` file and add your Meaning Cloud API key to it.

```bach
API_KEY=your_meaningcloud_api_key
```

4. Build the project using Webpack:

```bach
npm run build-prod
```

5. Start the development server:

```bach
npm run start
```
6. Open your browser and navigate to http://localhost:8000 to access the tool.

## Usage
1. Enter the URL of the news article you wish to analyze.
2. Click on "Submit" to fetch and analyze the content.
3. Review the results displayed on the screen, including sentiment, entities, topics, and summary.


## Running Tests
The project includes unit tests to ensure the functionality of key components.

To run tests:

```bash
npm run test
```

