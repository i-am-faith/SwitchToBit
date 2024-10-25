document.getElementById('predictBtn').addEventListener('click', function() {
    // Create an array of months
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Generate random prices (you can also use predefined values)
    const prices = [
        43821.07, 40010.92, 57652.67, 70120.09, 58398.20,
        68742.89, 62876.76, 56321.20, 56611.20, 58879.57,
        61128.02, 62020.57
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
