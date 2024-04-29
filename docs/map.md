<html>
<!-- leaflet map of Africa -->
<head>
    <title>Source locations of samples within AGVD</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map {
            height: 600px;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        var map = L.map('map').setView([0, 20], 3);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 10
        }).addTo(map);

        L.marker([0, 20]).addTo(map)
            .bindPopup('Africa')
            .openPopup();
    </script>

    The AGVD frequencies reported are calculated from a joint called high coverage set of ~4000 samples. The countries of origin of these samples and the projects that made them available are illustrated above. A more detailed summary of the samples and their source projects can be found [here](summaries.md).

</body>



</html>