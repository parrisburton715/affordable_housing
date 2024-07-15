// Council district data
var councilDistricts = [
  { district: '1', lat: 30.288871, long: -97.683747, medianIncome: 72508 },
  { district: '2', lat: 30.172978, long: -97.733335, medianIncome: 68471 },
  { district: '3', lat: 30.248550, long: -97.711570, medianIncome: 62415 },
  { district: '4', lat: 30.308550, long: -97.741570, medianIncome: 52797 },
  { district: '5', lat: 30.268550, long: -97.731570, medianIncome: 86223 },
  { district: '6', lat: 30.228550, long: -97.721570, medianIncome: 93649 },
  { district: '7', lat: 30.198550, long: -97.711570, medianIncome: 81132 },
  { district: '8', lat: 30.168550, long: -97.701570, medianIncome: 118336 },
  { district: '9', lat: 30.138550, long: -97.691570, medianIncome: 81220 },
  { district: '10', lat: 30.108550, long: -97.681570, medianIncome: 102303 }
];

// Define the color palette
var colors = {
  "50-59k": "#FFA500", // orange
  "60-69k": "#800080", // purple
  "70-79k": "#008000", // green
  "80-89k": "#0000FF", // blue
  "90-99k": "#FFFF00", // yellow
  "100k+": "#006400"   // dark green
};

// Create the map
var map = L.map('map').setView([30.2672, -97.7431], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);

// Loop through the council districts and create a marker for each
councilDistricts.forEach(function(district) {
  let color;
  if (district.medianIncome >= 100000) {
      color = colors["100k+"];
  } else if (district.medianIncome >= 90000) {
      color = colors["90-99k"];
  } else if (district.medianIncome >= 80000) {
      color = colors["80-89k"];
  } else if (district.medianIncome >= 70000) {
      color = colors["70-79k"];
  } else if (district.medianIncome >= 60000) {
      color = colors["60-69k"];
  } else if (district.medianIncome >= 50000) {
      color = colors["50-59k"];
  } else {
      color = "#CCCCCC"; // default color
  }

  let marker = L.marker([district.lat, district.long], {
      title: `Council District ${district.district}`,
      icon: L.divIcon({
          className: 'custom-marker',
          html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%;"></div>`,
          iconSize: [20, 20]
      })
  }).addTo(map);

  // Create a popup content string using the district data
  let popupContent = `
      <b>Council District ${district.district}</b><br>
      Median Household Income: $${district.medianIncome.toLocaleString()}
  `;

  // Bind the popup to the marker
  marker.bindPopup(popupContent);
});

// Create a legend control
var legend = L.control({ position: 'bottomright' });

// Define the legend content
legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML +=
      '<h4>Salary Range</h4>' +
      '<ul>' +
      '<li><span style="background-color: #FFA500;"></span> $50,000 - $59,999</li>' +
      '<li><span style="background-color: #800080;"></span> $60,000 - $69,999</li>' +
      '<li><span style="background-color: #008000;"></span> $70,000 - $79,999</li>' +
      '<li><span style="background-color: #0000FF;"></span> $80,000 - $89,999</li>' +
      '<li><span style="background-color: #FFFF00;"></span> $90,000 - $99,999</li>' +
      '<li><span style="background-color: #006400;"></span> $100,000+</li>' +
      '</ul>';
  return div;
};

// Add the legend to the map
legend.addTo(map);