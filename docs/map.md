<html>
<!-- leaflet map of Africa -->
<head>
    ### MArkdowqn
    <title>Source locations of samples within AGVD</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map {
            height: 600px;
            width: 800px;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        var map = L.map('map').setView([0, 0], 2);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.{ext}', {
	        minZoom: 0, 
	        maxZoom: 18,
	        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	        ext: 'png'
        }).addTo(map);
    </script>
    The AGVD frequencies reported are calculated from a joint called high coverage set of ~4000 samples. The countries of origin of these samples and the projects that made them available are illustrated above. A more detailed summary of the samples and their source projects can be found [here](summaries.md).


</body>



</html>