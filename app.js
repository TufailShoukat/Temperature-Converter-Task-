

document.getElementById('convert_btn').addEventListener('click', function () {
    const degree = parseFloat(document.getElementById('degree').value);
    const tempType = document.getElementById('temp-type').value;
    let result;

    if (isNaN(degree)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid number!',
        });
        return;
    }

    if (tempType === 'celsius') {
        result = degree; 
        
    } else if (tempType === 'fahrenheit') {
        
        
        result = (degree * 9/5) + 32;
    } else if (tempType === 'kelvin') {
   
        
        result = degree + 273.15;
    }

    document.getElementById('Celsius').textContent = result.toFixed(2);

    Swal.fire({
        icon: 'success',
        title: 'Conversion Successful!',
        text: `The converted temperature is ${result.toFixed(2)} ${tempType.charAt(0).toUpperCase() + tempType.slice(1)}.`,
    });
});
