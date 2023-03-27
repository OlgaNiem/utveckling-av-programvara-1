getPosts()

async function getPosts() {
    const posts = await get('/api/messages');
    const data = await posts.json();
    const parent = document.querySelector('#post-container');
    parent.innerHTML = '';

    data.forEach(message => {
        const date = new Date(message.createdAt);
        parent.innerHTML += `
        <div>
          <span>${date.toLocaleDateString()} ${date.toLocaleTimeString()}</span>
          </div>
          <div>${message.message}</div>
        </div>
        `
    })
    
}