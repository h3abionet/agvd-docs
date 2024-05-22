// Function to load map data and add markers to Leaflet map
function loadMapData() {

    var map = L.map('map').setView([10, 20], 3);
    L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
        minZoom: 2,
        maxZoom: 6,
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: 'png'
    }).addTo(map);


    // var map = L.map('map').setView([10, 20], 3);
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.{ext}', {
    //     minZoom: 2,
    //     maxZoom: 6,
    //     attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     ext: 'png'
    // }).addTo(map);

    // Load TSV data
    d3.tsv("assets/mapdata.tsv").then(function(data) {
        data.forEach(function(d) {
            // Extract data
            var country = d.Country;
            var project = d.Project;
            var latitude = parseFloat(d.Latitude);
            var longitude = parseFloat(d.Longitude);
            var sampleCount = parseInt(d.SampleCount);

            // var radius = sampleCount/10;
            var radius = Math.log10(sampleCount)*5;

            // Create circle marker
            var marker = L.circleMarker([latitude, longitude], {
                radius: radius, // You can adjust the radius of the circle marker
                color: 'blue', // Color of the marker border
                fillColor: '#33f', // Fill color of the marker
                fillOpacity: 0.5 // Opacity of the marker fill
            }).addTo(map);

            // Add popup to marker with project and sample count information
            var details = `<b>Project: ${project}</b><br>
            Country: ${country}
            <br>Sample count: ${sampleCount}`;
            marker.bindPopup(details);
        });
    }).catch(function(error) {
        // Handle error if any
        console.log("Error loading TSV data:", error);
    });
}

// Call the function to load map data when the page is loaded
window.onload = loadMapData;