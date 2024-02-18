
document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggle');

  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      // If toggle is ON, open a new HTML page (replace 'new_page.html' with your actual page)
      window.location.href = 'Crypto.html';
    }
  });
});


function initializeWidget() {
  // This function is empty, it just ensures that the TradingView script is loaded
}
function updateChart() {


  var symbol = document.getElementById('userInput').value;

  // TradingView widget configuration
  var widgetOptions = {
    container_id: "analytics-platform-chart-demo",
    width: "100%",
    height: "100%",
    autosize: true,
    symbol: symbol,
    interval: "1MIN",
    timezone: "exchange",
    theme: "dark",
    style: "0",
    withdateranges: true,
    allow_symbol_change: true,
    save_image: false,
    details: true,
    hotlist: true,
    calendar: true
  };

  // Create the TradingView widget
  new TradingView.widget(widgetOptions);
}

// Load the TradingView widget on page load
document.addEventListener('DOMContentLoaded', function () {
  updateChart();
});