//This function will update the results dom when there is a valid response

export function updateUI(data) {

    // An empty string to hold the HTML content
    let resultHTML = '';
    
    //The polarity of the text
    resultHTML += "<h3>The Polarity:</h3><p>The text is ";

    let polarity = '';

    switch(data.score_tag){
        case 'P+':
            polarity+="Very";
        case 'P':
            polarity+=" Positive"
            break;
        case 'N+':
            polarity+="Very ";
        case 'N':
            polarity+="Negative"
            break;
        default: 
            polarity = 'No Emotions';
    }

    polarity += "</p>";

    resultHTML+=polarity;

    //The Subjectivity of the text
    resultHTML+=`<h3>The Subjectivity:</h3><p>${data.subjectivity}</p>`

    //Examples From the text
    //A random sample from the sentence list
    const sample = data.sentence_list[Math.floor(Math.random()*data.sentence_list.length)].text;
    resultHTML+=`<h3>Sample Text:</h3><p>${sample}</p>`

    // Update the div with the result HTML
    document.getElementById('results').innerHTML = resultHTML;
}