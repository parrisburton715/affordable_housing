// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from affordable_housing.json
    fetch('affordable_housing.json')
        .then(response => response.json())
        .then(data => {
            // Populate dropdown with districts
            populateDropdown(data);

            // Generate bar chart for top 10 districts
            generateBarChart(data);

            // Generate histogram for ZIP codes
            generateHistogram(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function populateDropdown(data) {
    const districtSelect = document.getElementById('districtSelect');
    const districts = Object.keys(data);

    districts.forEach(district => {
        const option = document.createElement('option');
        option.textContent = `${district} (${data[district].properties.length} affordable houses)`;
        option.value = district;
        districtSelect.appendChild(option);
    });

    // Add event listener for dropdown change
    districtSelect.addEventListener('change', function() {
        const selectedDistrict = districtSelect.value;
        console.log('Selected district:', selectedDistrict);
        // You can update visualizations based on selected district here
    });
}

function generateBarChart(data) {
    const ctx = document.getElementById('barChart').getContext('2d');
    const districts = Object.keys(data);

    // Sort districts by the number of affordable houses (descending)
    districts.sort((a, b) => data[b].properties.length - data[a].properties.length);

    // Take top 10 districts
    const top10Districts = districts.slice(0, 10);
    const affordableHousesCount = top10Districts.map(district => data[district].properties.length);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top10Districts,
            datasets: [{
                label: 'Number of Affordable Houses',
                data: affordableHousesCount,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function generateHistogram(data) {
    const zipCodeCounts = {};

    // Iterate through each district
    Object.keys(data).forEach(district => {
        // Iterate through each property in the district
        data[district].properties.forEach(property => {
            const zip = property.zip;
            // Count occurrences of each ZIP code
            if (zipCodeCounts[zip]) {
                zipCodeCounts[zip]++;
            } else {
                zipCodeCounts[zip] = 1;
            }
        });
    });

    const ctx = document.getElementById('histogram').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(zipCodeCounts),
            datasets: [{
                label: 'Number of Affordable Houses per ZIP Code',
                data: Object.values(zipCodeCounts),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}