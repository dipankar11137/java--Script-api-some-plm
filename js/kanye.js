
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data));
}

const displayQuote = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
    console.log(quote)
}