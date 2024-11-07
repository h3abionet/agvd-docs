---

layout: page
title: Releases
heading: Dataset releases and features
# permalink: /releases/
---

Here we document features added and changes to the AGVD dataset and annotations. 

The intention is for this to be a resource to used when citing the state of AGVD when it was queried. As such it includes details such as features, statistics and annotations for each release version. 

External references (such as Cellbase annotations) are also included with appropriate citations.

----
#### 2024-10-06 (AGVD 1.0)

Features:
 - Filter file upload
 - Display frequencies in histogram and table
 - Added dbSNP matches
 - Export of results to text file
 - Variant details page with frequency table

Genotypes: 
 - Joint-called callset 24A 

Annotations:
 - Externally fetched Cellbase<sup>[\[1\]][ref1]</sup> annotations.
 - Two sample clustering approaches
   - Manual assignment of samples to one of 6 African regions based on the sample's country 
   - Computational assignment samples countries to one of 5 clusters using K-means

----
#### 2024-04-29 (AGVD 0.9)

Features:
 - Search by MAF, gene name, region, variant ID
 - Display frequencies in histogram
 - Map of countries where variant was observed

Genotypes: 
 - Joint-called callset 24A 

Annotations:
 - Externally fetched Cellbase<sup>[\[1\]][ref1]</sup> annotations.
 - Two sample clustering approaches
   - Manual assignment of samples to one of 6 African regions based on the sample's country 
   - Computational assignment samples countries to one of 5 clusters using K-means

----

[ref1]: http://nar.oxfordjournals.org/content/40/W1/W609.short