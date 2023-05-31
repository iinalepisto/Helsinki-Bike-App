# Helsinki-Bike-App

## Running project locally
1. Install [node](https://nodejs.org/en) and [git](https://git-scm.com/).
2. Clone the repository. Run `git clone git@github.com:iinalepisto/Helsinki-Bike-App.git`
3. Run `cd Helsinki-Bike-App/server`
4. Create a .env file to the server folder. Copy the variables from .envExample.txt file to the .env file and fill in your server side port number and URLs for your local mongoDB. You can use notepad to create .env file and name it .env and select file type as "All files". 
5. Download three datasets of journey data. Save each file to the csvFiles folder with the default name. The data is owned by City Bike Finland.
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv> 
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>
6. Download station data. Save it to csvFiles folder with the default name. 
* <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>
7. Rename testJourneys.txt and testStations.txt to .csv.
8. Run `npm install` on the server folder.
9. Cd to client folder and run `npm install`.
10.  
