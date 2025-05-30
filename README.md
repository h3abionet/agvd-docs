# agvd-docs
This site holds documentation for the AGVD (African Genomic Variation Database) frontend.
It uses github pages, following this tutorial: [Setting up github pages](https://github.com/tomcam/least-github-pages)

## Jekyll stuff 
### setup on a new machine (Ubuntu in this case) WIP

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

bundle install 

# if `bundle install` fails
# run `gem install <packagename>` on each gem with an error


# serve locally
cd ./docs
bundle exec jekyll serve

```

### Overriding theme defaults

#### Note: 
 - GitHub Pages use a specific version of minima (currently v2.5.1) listed [here](https://pages.github.com/versions/)
 - [here](https://github.com/jekyll/minima/tree/v2.5.1?tab=readme-ov-file#minima) are instructions for customising it


```bash 
# find the installed theme's path eg 'minima'
bundle info --path minima

# copy the files you want to change
mkdir _includes
mkdir _layouts

# eg
cp $GEM_HOME/gems/minima-2.5.1/_layouts/* _layouts/
cp $GEM_HOME/gems/gems/minima-2.5.1/_includes/footer.html _includes/
cp $GEM_HOME/gems/gems/minima-2.5.1/_includes/head.html _includes/
cp $GEM_HOME/gems/gems/minima-2.5.1/_includes/header.html _includes/
```

### References:

 - [Leaflet map styles](https://leaflet-extras.github.io/leaflet-providers/preview/)
 - Using the [Stadia](https://client.stadiamaps.com/dashboard/#/property/28053/) API for map tiles
 - [Customizing leaflet](https://leafletjs.com/reference.html)

## Note on AGVD Tutorials
Because the tutorials will be updated frequently, we're going edit in Google docs. 

Current tutorials are:
 - [Registering](https://docs.google.com/document/d/1ny2-b-bBUfDJVUTYhIz8yodpiFJMa_g0/edit)
 - [Searching](https://docs.google.com/document/d/11VhAVEPbm2XW04ooc2Hk881-85AVSnVw/edit)

The steps are:
1. edit the google doc
2. download as pdf
3. copy this pdf to ./docs/tutorials (and rename to short name)

Full documentation [here](https://docs.google.com/document/d/197wa3ipdHA8Q_ZU4y2jEHBzFctg8GrXO/edit)





