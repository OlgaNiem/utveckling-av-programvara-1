fetchCars();

async function fetchCars() {
    const response = await fetch('/api/cars');
    const cars = await response.json();
    console.log(cars);
    displayData(cars)
}
function displayData(cars) {
    document.querySelector('#cars').innerHTML = `
    <div class="container">
        <table id="cars">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th></th>
                </tr>
            </thead>
            <tbody>${cars.map(item => `
                <tr>
                    <td>${item.brand}</td>
                    <td>${item.model}</td>
                    <td>${item.year}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
    `
}