document.addEventListener('DOMContentLoaded', function() {
    // Data for Affordable Houses by District
    const districtData = [
        { "district": 1, "units": 9237 },
        { "district": 2, "units": 7283 },
        { "district": 3, "units": 7233 },
        { "district": 4, "units": 5945 },
        { "district": 5, "units": 3736 },
        { "district": 6, "units": 730 },
        { "district": 7, "units": 3274 },
        { "district": 8, "units": 273 },
        { "district": 9, "units": 6128 },
        { "district": 10, "units": 602 }
    ];

    // Data for Affordable Houses by Zip
    const zipData = {
        78474.0: 2,
        78610.0: 292,
        78613.0: 0,
        78617.0: 1107,
        78652.0: 174,
        78653.0: 1021,
        78659.0: 310,
        78660.0: 240,
        78667.0: 240,
        78701.0: 1053,
        78702.0: 3391,
        78703.0: 8,
        78704.0: 2044,
        78705.0: 2235,
        78717.0: 269,
        78721.0: 2519,
        78722.0: 356,
        78723.0: 4380,
        78724.0: 1391,
        78725.0: 236,
        78726.0: 110,
        78727.0: 433,
        78728.0: 186,
        78729.0: 545,
        78730.0: 21,
        78731.0: 357,
        78732.0: 106,
        78733.0: 70,
        78734.0: 62,
        78735.0: 159,
        78736.0: 66,
        78737.0: 72,
        78738.0: 48,
        78739.0: 60,
        78741.0: 2776,
        78742.0: 22,
        78744.0: 2094,
        78745.0: 2815,
        78746.0: 143,
        78747.0: 628,
        78748.0: 2096,
        78749.0: 417,
        78750.0: 229,
        78751.0: 1221,
        78752.0: 757,
        78753.0: 1538,
        78754.0: 524,
        78756.0: 147,
        78757.0: 342,
        78758.0: 1638,
        78759.0: 231
    };

    // Create Affordable Houses by District chart
    createDistrictChart(districtData);

    // Create Affordable Houses by Zip histogram
    createZipHistogram(zipData);
});

function createDistrictChart(data) {
    const districtLabels = data.map(item => `District ${item.district}`);
    const districtUnits = data.map(item => item.units);

    const ctx = document.getElementById('districtChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: districtLabels,
            datasets: [{
                label: 'Number of Affordable Houses',
                data: districtUnits,
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
                        stepSize: 1000
                    }
                }
            }
        }
    });
}

function createZipHistogram(data) {
    const zipLabels = Object.keys(data);
    const zipUnits = Object.values(data);

    const ctx = document.getElementById('zipHistogram').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: zipLabels,
            datasets: [{
                label: 'Number of Affordable Houses per ZIP Code',
                data: zipUnits,
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
                        stepSize: 100 // Adjust step size as needed
                    }
                }
            }
        }
    });
}