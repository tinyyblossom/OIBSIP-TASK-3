function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;

    // Validate if temperatureInput is a valid number
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result;

    switch (unitSelect) {
        case 'celsius':
            result = {
                celsius: temperature,
                fahrenheit: (temperature * 9/5) + 32,
                kelvin: temperature + 273.15
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: (temperature - 32) * 5/9,
                fahrenheit: temperature,
                kelvin: (temperature - 32) * 5/9 + 273.15
            };
            break;
        case 'kelvin':
            result = {
                celsius: temperature - 273.15,
                fahrenheit: (temperature - 273.15) * 9/5 + 32,
                kelvin: temperature
            };
            break;
        default:
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>${result.celsius.toFixed(2)} °C</p>
        <p>${result.fahrenheit.toFixed(2)} °F</p>
        <p>${result.kelvin.toFixed(2)} K</p>
    `;
}
