document.addEventListener('DOMContentLoaded', function() {
  // Fetch options for the dropdown on page load
  fetch('/districts')
    .then(response => response.json())
    .then(data => {
      const dropdown = document.getElementById('districtSelect');
      data.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = `Council District ${option}`;
        dropdown.appendChild(opt);
      });
      // Trigger event for initial selection
      const initialDistrict = data[0];
      optionChanged(initialDistrict); // Assuming optionChanged is defined in scripts.js
    })
    .catch(error => console.error('Error fetching districts:', error));

  // Function to update dashboard based on selected district
  function optionChanged(selectedDistrict) {
    Promise.all([
      fetch(`/api/charts?district=${selectedDistrict}`),
      fetch(`/api/histogram?district=${selectedDistrict}`)
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const chartData = data[0];
      const histogramData = data[1];
      updateBarChart(chartData);
      updateHistogram(histogramData);
      updateMetadata(selectedDistrict, chartData);
    })
    .catch(error => console.error('Error updating dashboard:', error));
  }

  // Function to update Bar Chart
  function updateBarChart(data) {
    const trace = {
      x: ['Total Units', 'Affordable Units'],
      y: [data.total_units, data.affordable_units],
      type: 'bar'
    };

    const layout = {
      title: `Affordable Units in Council District ${data.district}`,
      xaxis: { title: 'Unit Type' },
      yaxis: { title: 'Number of Units' }
    };

    const config = {
      responsive: true
    };

    Plotly.newPlot('bar', [trace], layout, config);
  }

  // Function to update Histogram
  function updateHistogram(data) {
    const trace = {
      x: data.zip_codes,
      type: 'histogram'
    };

    const layout = {
      title: 'Histogram of Affordable Units by Zip Code',
      xaxis: { title: 'Zip Code' },
      yaxis: { title: 'Frequency' }
    };

    const config = {
      responsive: true
    };

    Plotly.newPlot('histogram', [trace], layout, config);
  }

  // Function to update metadata panel
  function updateMetadata(selectedDistrict, data) {
    const panel = document.getElementById('districtSummary');
    panel.innerHTML = `<p>Details for Council District ${selectedDistrict}:</p>
                       <ul>
                         <li>Total Units: ${data.total_units}</li>
                         <li>Affordable Units: ${data.affordable_units}</li>
                       </ul>`;
  }

  // Event listener for dropdown change
  const districtSelect = document.getElementById('districtSelect');
  districtSelect.addEventListener('change', function() {
    const selectedDistrict = this.value;
    optionChanged(selectedDistrict);
  });
});
