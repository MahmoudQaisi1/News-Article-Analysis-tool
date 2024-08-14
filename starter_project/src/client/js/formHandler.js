import { analyzeURL } from "./analyzeURL";
import { displayError } from "./displayError";
import { updateUI } from "./updateUI";
import { isValidUrl } from "./isValidURL";

function initializeForm() {
  const form = document.getElementById('urlForm');
  if (form) {
    form.addEventListener('submit', handleSubmit);
  }
}

async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (!isValidUrl(formText)) {
      return displayError("Invalid Link Provided");
    }
  
    try {
      const data = await analyzeURL(formText);
  
      if (data.status.code === '0') {
        updateUI(data);
      } else {
        displayError(data.status.msg);
      }
    } catch (error) {
      displayError("An unexpected error occurred");
    }
}

export { handleSubmit, initializeForm };

