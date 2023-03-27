fetchMessage();

document.querySelector('#btn').addEventListener('click', async(e) =>{
    e.preventDefault();
   
    const input = document.querySelector('input');
    const message = {
        message: input.value
    }
    const sent = await fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    try {
        const response = await sent.json()
        input.textContent = `${response.message}`
        console.log(response)
    } catch (error) {
        console.log(error)
    }
});

async function fetchMessage() {
    const response = await fetch('/api/messages');
    const message = await response.json();
    console.log(message);

    document.querySelector('#message').innerHTML = `
    <div class="container parent">
        <div class="message">         
            <p>
            ${message.map(item => `
            ${item.message}`).join('')}
            </p>
       </div> 
    </div>
`
};

setInterval(fetchMessage, 3000)