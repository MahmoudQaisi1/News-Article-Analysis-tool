import { displayError } from "../client/js/displayError";

describe('displayError',()=>{
    it('Should display an error message in the results container by updating the HTML content', ()=>{
        const mockElement = {innerHTML: ''};
        document.getElementById = jest.fn().mockReturnValue(mockElement);

        const htmlContent = '<p>Error Test Case</p>';

        displayError(htmlContent);

        expect(document.getElementById).toHaveBeenCalledWith('results');
        expect(mockElement.innerHTML).toBe(htmlContent);

    }) 
})