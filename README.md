# Dictionary Chrome Extension

This is a dictionary Chrome extension that allows users to define words quickly. It uses the Words API from RapidAPI to fetch definitions, synonyms, and antonyms for the entered word.

## Technologies Used

- JavaScript
- HTML
- CSS

## Installation

1. Clone this repository to your local machine.
2. Get an API key from [RapidAPI Words API](https://rapidapi.com/dpventures/api/wordsapi).
3. Create a `.env` file in the root directory of the project.
4. Copy the contents of `.env.example` into `.env` and replace `API_KEY_VALUE` with your actual API key.
5. Run `npm install` to install dependencies.
6. Start the local server by running `npm start`.
7. Open Google Chrome and navigate to `chrome://extensions/`.
8. Enable "Developer mode" in the top right corner.
9. Click on "Load unpacked" and select the directory where you cloned the repository.
10. The Dictionary Chrome Extension should now be installed and ready to use.

**Note:** The extension requires the local server to be running on localhost:3000 for it to work properly.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Enter a word in the input field and press Enter or click the search button.
3. The extension will display the word's definition, pronunciation, synonyms, and antonyms.

