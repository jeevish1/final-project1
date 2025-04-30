const carPrices = {
    sedan: 50,  // Price per day in USD
    suv: 80,
    sports: 150
};

function calculateTotal() {
    const carType = document.getElementById('carType').value;
    const rentalDays = document.getElementById('rentalDays').value;
    
    if (!rentalDays || rentalDays <= 0) {
        alert('Please enter a valid number of rental days.');
        return;
    }
    
    const pricePerDay = carPrices[carType];
    const totalPrice = pricePerDay * rentalDays;
    
    displayCarDetails(carType, rentalDays, totalPrice);
}

function displayCarDetails(carType, rentalDays, totalPrice) {
    const carDetailsDiv = document.getElementById('carDetails');
    const totalPriceDiv = document.getElementById('totalPrice');
    
    let carDescription = '';
    switch (carType) {
        case 'sedan':
            carDescription = 'A comfortable sedan for city driving.';
            break;
        case 'suv':
            carDescription = 'A spacious SUV for family trips and off-road adventures.';
            break;
        case 'sports':
            carDescription = 'A high-performance sports car for thrill-seekers.';
            break;
        default:
            carDescription = 'Select a car type.';
            break;
    }
    
    carDetailsDiv.innerHTML = `<p>Car Type: ${capitalizeFirstLetter(carType)}</p><p>Description: ${carDescription}</p><p>Rental Days: ${rentalDays}</p>`;
    totalPriceDiv.innerHTML = `<p>Total Price: $${totalPrice}</p>`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
