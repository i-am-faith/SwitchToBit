document.getElementById('predictBtn').addEventListener('click', function() {
    // Create an array of months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Generate random prices (you can also use predefined values)
    const prices = [
        2.29, 2.07, 2.73, 5.78, 4.88,
        6.45, 7.42, 5.98, 5.23, 9.76,
        6.02, 5.94
    ];
    
    // Generate the HTML table with the data
    let predictionHTML = `
        <table class="table-auto w-full text-left text-sm text-gray-500">
            <thead>
                <tr class="bg-gray-100">
                    <th class="px-6 py-3 text-gray-700 font-bold">Month</th>
                    <th class="px-6 py-3 text-gray-700 font-bold">Predicted Price (USD)</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    prices.forEach((price, index) => {
        predictionHTML += `
            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
                <td class="px-6 py-4">${months[index]}</td>
                <td class="px-6 py-4">$${price.toFixed(2)}</td>
            </tr>
        `;
    });
    
    predictionHTML += `
            </tbody>
        </table>
    `;
    
    // Insert the HTML into the prediction result div
    document.getElementById('predictionResult').innerHTML = predictionHTML;
});
