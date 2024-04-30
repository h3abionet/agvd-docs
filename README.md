# agvd-docs
This site is documentation for the AGVD (African Genomic Variation Database) frontend.



### References:

 - [Setting up github pages](https://github.com/tomcam/least-github-pages)
 - [Leaflet map styles](https://leaflet-extras.github.io/leaflet-providers/preview/)
 - Using the [Stadia](https://client.stadiamaps.com/dashboard/#/property/28053/) API for map tiles

Overriding theme defaults

```bash 
# find the installed theme's path eg 'minima'
bundle info --path minima

# copy the files you want to change
mkdir _includes
mkdir _layouts

# eg
cp /home/ayton/gems/gems/minima-2.5.1/_layouts/* _layouts/
cp /home/ayton/gems/gems/minima-2.5.1/_includes/footer.html _includes/
cp /home/ayton/gems/gems/minima-2.5.1/_includes/head.html _includes/
cp /home/ayton/gems/gems/minima-2.5.1/_includes/header.html _includes/
```