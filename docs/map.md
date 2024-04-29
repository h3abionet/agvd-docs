<html>
<!-- leaflet map of Africa -->
<head>
    <title>Leaflet Map of Africa</title>
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
        var map = L.map('map').setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);
    </script>



    Development of the AGVD was sparked by the increased amount of genomic research being conducted in Africa, and initiated by the Human Heredity and Health in Africa’s (H3Africa) Bioinformatics Network (H3ABioNet). 
Development of the AGVD was driven by H3ABioNet’s Databases and Resources Work Package and led by the members of the African Genome Variation Database project.
</body>



</html>