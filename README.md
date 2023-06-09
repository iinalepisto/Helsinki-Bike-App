# Helsinki-Bike-App
This is the pre-assignment for Solita Dev Academy Finland 2023. This project uses data from City Bike Finland and HSL to show bike stations and journeys made with bikes.

## Running project locally
1. Install [node](https://nodejs.org/en) and [git](https://git-scm.com/).
2. Clone the repository:
* Open terminal on your computer and run `git clone git@github.com:iinalepisto/Helsinki-Bike-App.git`.
* After cloning the repository, you have a folder called Helsinki-Bike-App that has server and client folders in it.
3. Set up the database:
  * Option 1. Install MongoDB locally by following the instructions [here](https://www.mongodb.com/docs/manual/installation/).
  * Option 2. Use MongoDB Atlas. Sign up for an account [here](https://www.mongodb.com/cloud/atlas) and create a new cluster.
4. Set up environment variables: 
* Create a .env file to the server folder. You can use notepad to create .env file and name it .env and select file type as "All files".
* Copy the variables from .envExample.txt file to the .env file.
* Fill in your server side port number and connection string for your mongoDB. 
* Example variables PORT = "8000", MONGO_URL = "mongodb://127.0.0.1:27017/bikedb", MONGO_TEST_URL = "mongodb://127.0.0.1:27017/bikedb-test"
* [Here](https://www.mongodb.com/docs/compass/current/connect/#std-label-connect-run-compass) you can find more information about the connection string.
5. Download the journey data:
* Download three datasets of journey data. Save each file to the `csvFiles` folder that is located in server the folder with the default name. The data is owned by City Bike Finland.
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv> 
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>
6. Download station data:
*  Download the station data from [here](https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv).
* Save the file to the `csvFiles` folder in the project directory.
7. Convert files to CSV format:
* Rename `testJourneys.txt` to `testJourneys.csv`.
* Rename `testStations.txt` to `testStations.csv`.
8.  Install dependencies:
* Open a terminal and navigate to the `server` folder.
* Run the following command to install server dependencies:
  ```
  npm install
  ```
* Open another terminal and navigate to the `client` folder.
* Run the following command to install client dependencies:
  ```
  npm install
  ```
9. Start the server:
* In the terminal, navigate to the `server` folder.
* Run the following command to start importing data from the CSV files:
  ```
  npm run dev
  ```
  It can take several minutes for the import to finish. It will let you know when importing is finished.
10. Start the client:
* After you have finished importing data, open a separate terminal and navigate to the `client` folder.
* Run the following command to start the client application:
  ```
  npm run start
  ```

Now you can view the application on browser http://localhost:3000 .

## Application
### Journeys
Shows a list of all the journeys. It shows 20 journeys per page. Has the ability to sort by departure station, return stations, length and duration. Has also search bar for departure and return stations.

<img width="700" alt="image" src="https://github.com/iinalepisto/Helsinki-Bike-App/assets/108327960/86ad4e8d-f51e-4278-93d3-8e1aef8413fb">

### Journey
Shows information about the journey. Map shows return and departure station location.

<img width="700" alt="image" src="https://github.com/iinalepisto/Helsinki-Bike-App/assets/108327960/782254ed-0578-4ee5-913a-c8f481326561">

### Stations
Shows a list of all the stations. It shows 20 stations per page and has the ability to sort by name, address and city. It has a search bar for all the columns.

<img width="700" alt="image" src="https://github.com/iinalepisto/Helsinki-Bike-App/assets/108327960/1d882d1e-5c42-4fcc-be1e-d57ce74b1c0e">

### Station
Shows information about the station. Shows average distances and durations of the journeys starting and ending at the station. Map shows the location of the station.

<img width="700" alt="image" src="https://github.com/iinalepisto/Helsinki-Bike-App/assets/108327960/4f7f98dd-f0ee-4d52-9ce7-b130a22fe58b">

### Home
Shows interesting number from the data. Map is showing all stations.
<img width="700" alt="image" src="https://github.com/iinalepisto/Helsinki-Bike-App/assets/108327960/f72fb3b3-345d-44a6-8cd8-d7ee34d28281">

## API endpoints

| Method |             URL                |                              Description |
| :----- | :--------------------------:   | ---------------------------------------: |
| `GET`  |`/api/journeys`                 |      get total page count and 20 journeys|
| `GET`  |`/api/journeys/:id`             |             get single journey info by id|
| `GET`  |`/api/journeys/totalcount`       |                get totalcount of journeys|
| `GET`  |`/api/journeys/longestdistance`  |     get journey with the longest distance|
| `GET`  |`/api/journeys/longestduration`  |     get journey with the longest duration|
| `GET`  |`/api/stations`                 |                          get all stations|
| `GET`  |`/api/stations/totalcount`      |                    get station totalcount|
| `GET`  |`/api/stations/:id`             |                     get stationinfo by id|
| `GET`  |`/api/stations/:id/coordinates` |              get station coodinates by id|

## Licence
License and information: https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902
