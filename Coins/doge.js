document.getElementById('predictBtn').addEventListener('click', function() {
    // Create an array of months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Generate random prices (you can also use predefined values)
    const prices = [
        0.09, 0.06, 0.13, 0.20, 0.12,
        0.15, 0.12, 0.10, 0.08, 0.21,
        0.16, 0.11
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
