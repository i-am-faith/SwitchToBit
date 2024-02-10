function sendBTC() {
    // Get the name
    var name = "BTC-USD";

    // Redirect to the receiver page with the name as a parameter
    var url = 'http://localhost:8501/?name=' + encodeURIComponent(name);

    // Open the target webpage in a new tab
    var newTab = window.open(url, '_blank');

    // Check if the new tab is opened successfully
    if (newTab) {
        // Wait for a short time to ensure the new page is loaded (adjust as needed)
        setTimeout(function () {
            // Access the input field on the target webpage and set its value
            newTab.document.querySelector('.st-c5.st-ct.st-cu.st-cv.st-cw.st-cx.st-cy.st-cz.st-d0.st-d1.st-ba.st-c7.st-d2.st-d3.st-d4.st-d5.st-d6.st-d7.st-d8.st-d9.st-bt.st-bu.st-bv.st-da.st-bx.st-by.st-bs.st-db.st-dc.st-dd').value = name;
        }, 10000); // Adjust the timeout value as needed
    }
}


function sendDOGE() {
    // Get the name
    var name = "DOGE-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendSHB() {
    // Get the name
    var name = "SHIB-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendBNC() {
    // Get the name
    var name = "BNB-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendSOL() {
    // Get the name
    var name = "SOL-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendNEO() {
    // Get the name
    var name = "NEO-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendLITE() {
    // Get the name
    var name = "LTC-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendPOL() {
    // Get the name
    var name = "MATIC-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendETH() {
    // Get the name
    var name = "ETH-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
function sendMON() {
    // Get the name
    var name = "XMR-USD";

    // Redirect to the receiver page with the name as a parameter
    window.open('https://switch-to-bit.streamlit.app/?name=' + encodeURIComponent(name), '_blank');
}
