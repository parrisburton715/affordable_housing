from flask import Flask, render_template, jsonify, request
import json
import logging

app = Flask(__name__)

# Load JSON data
with open('affordable_housing.json', 'r') as json_file:
    affordable_housing_data = json.load(json_file)

# Set up logging
logging.basicConfig(level=logging.INFO)

# Route to serve the main HTML dashboard page
@app.route('/')
def index():
    return render_template('index.html')

# Route to fetch districts for the dropdown
@app.route('/districts')
def get_districts():
    try:
        districts = set()
        for entry in affordable_housing_data:
            district = entry['Council_District'].strip()
            if district and district != 'ETJ':
                districts.add(district)
        return jsonify(list(districts))
    except Exception as e:
        logging.error(f"Error fetching districts: {e}")
        return jsonify({'error': str(e)}), 500

# Route to fetch data for the selected district
@app.route('/api/charts')
def get_chart_data():
    selected_district = request.args.get('district')
    if not selected_district:
        return jsonify({'error': 'Missing district parameter'}), 400
    try:
        total_units = 0
        affordable_units = 0
        for entry in affordable_housing_data:
            if entry['Council_District'].strip() == selected_district.strip():
                total_units += int(entry['Total_Units'])
                affordable_units += int(entry['Affordable_Units'])
        return jsonify({
            'district': f'Council District {selected_district}',
            'total_units': total_units,
            'affordable_units': affordable_units
        })
    except Exception as e:
        logging.error(f"Error fetching chart data for district {selected_district}: {e}")
        return jsonify({'error': str(e)}), 500

# Route to fetch district totals for affordable units
@app.route('/api/district-totals')
def get_district_totals():
    try:
        district_totals = {}
        for entry in affordable_housing_data:
            district = f"Council District {entry['Council_District'].strip()}"
            if district not in district_totals:
                district_totals[district] = 0
            district_totals[district] += int(entry['Affordable_Units'])
        return jsonify(district_totals)
    except Exception as e:
        logging.error(f"Error fetching district totals: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)