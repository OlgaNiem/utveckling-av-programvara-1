fetchQuote();


async function fetchQuote() {
    const response = await fetch('/api/quote');
    const quote = await response.json();
    console.log(quote);
    document.querySelector('#quote').innerHTML = `
    <div class="container parent">
        <div class="quote">         
            <h1>${quote.quote}</h1>
            <h3>${quote.author}</h3>
        </div> 
    </div>
`};