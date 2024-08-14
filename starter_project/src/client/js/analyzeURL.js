//This function will make a POST request to the express server. The response will be the analyzed content of the Provided URL.

export async function analyzeURL(url){

    try{
        const response = await fetch('http://localhost:8000/analyze-url',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url })
        });
    
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}