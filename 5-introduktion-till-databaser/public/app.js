fetchGames();

async function fetchGames() {
    const response = await fetch('/api/games');
    const games = await response.json();

    document.querySelector('#games').innerHTML = `
    <div class="container">
        <table id="games">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Publisher</th>
                </tr>
            </thead>
            <tbody>${games.map(game => `
                <tr>
                    <td>${game.name}</td>
                    <td>${game.genre}</td>
                    <td>${new Date (game.release_date).toDateString()}</td>
                    <td>${game.publisher}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    `
}