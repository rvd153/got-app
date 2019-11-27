import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles.css';

function App() {
  const [houses, setHouses] = useState(null);

  const fetchData1 = async () => {
    const response1 = await axios.get(
      'https://www.anapioficeandfire.com/api/houses?pageSize=1000'
    );

    setHouses(response1.data);

  };

  return (
    <div className="App">
      <h1>Game of Thrones Houses</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData1}>
          Get Info
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="houses">
        {houses && 
          houses.map((house, index) => {

            return (
              <div className="house" key={index}>
                <h3>House {index + 1}</h3>
                <h2>{house.name}</h2>

                <div className="details">
                  <p>Region: {house.region}</p>
                  <p>Coat of Arms: {house.coatOfArms} pages</p>
                  <p>Words: {house.words}</p>
                  <p>Titel: {house.titles}</p>
                  <p>Seats: {house.seats}</p>
                  <p>Lord: {house.currentLord}</p>

                </div>
              </div>
            );
          })}
      </div>


    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
