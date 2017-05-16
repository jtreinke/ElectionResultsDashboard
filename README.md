# ElectionResultsDashboard
Technical Challenge

This is the thought process and ideas I tried to execute for the technical challenge. 

Attempt #1 - The Word Map


As I have never used JSON before I spent a lot of time researching how it functions and how it is used. It seems very lightweight and easy to pull the data. I was disappointed to discover that it was strictly JSON and not GeoJSON, missing spatial attributes. Thus, I thought I would try to stick to a non-spatial visualization. I decided that it would be interesting to do a word-map illustrated by visualizing the state names. My goal was to pull and  display the state name and then designate blue or red depending on which party won the majority of the votes. In addition, I was hoping I could increase or decrease font sizes of state names depending on which class/range of votes they fell into. This code is still present, but not displaying on the browser. Most of it is commented out, but I left it all there for curiosity sake and I hope to finally figure it out.


Attempt #2 - GeoJSON with D3
Following the example from Mike Bostock to use topojsonlib.js, I was hoping to use the spatial geojson data to portray the state lines and shade them in according to which party had the most votes. Then, I wanted to pull the NYT JSON data on top of it to show more information. 


Attempt #3 - Leaflet 
I then thought I should return to my GIS route and use leaflet to portray the data. I wanted to do some spatial joins using the CSV with state boundary shapefile, or find a way to convert the JSON file to GeoJSON. But by this time, I already spent too much time on the other non-spatial ideas. I did implement the Leaflet map pane, but the code is commented out.
