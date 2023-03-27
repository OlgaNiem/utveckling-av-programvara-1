fetchTemperature();
fetchYearsTemperature();

async function fetchTemperature() {
    const response = await fetch('/api/temperature');
    const temperatures = await response.json();
    console.log(temperatures);
    displayData(temperatures)
    
}

function displayData(temperatures) {
    document.querySelector('#temperatures').innerHTML = `
    <div class="container">
        <table id="temperatures">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Year</th>
                    <th>Average Temperature</th>
                </tr>
            </thead>
            <tbody>${temperatures.map(item => `
                <tr>
                    <td>${item.country}</td>
                    <td>${item.year}</td>
                    <td>${item.averageTemperature}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    `
}
async function getSelectValue(year) {
    console.log(year)
    const response = await fetch(`/api/temperature/${year}`);
    const temperatures = await response.json();

    var selectedValue = document.querySelector('#select').value;
    console.log(temperatures)
    displayData(temperatures)
}

async function fetchYearsTemperature() {
    const response = await fetch('/api/temperature/:year');
    const temperatures = await response.json();
    console.log(temperatures);

}
