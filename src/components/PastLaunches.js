import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PastLaunches = ({ setLaunchId }) => {
  const [launches, setLaunches] = useState([]);

  //API endpoint url
  const url = "https://api.spacexdata.com/v4/launches/past";

  //fetch past space x launches
  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const response = await axios.get(url);
        setLaunches(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLaunches();
  }, []);

  return (
    <div className="container">
      <h1>Past Launches</h1>

      <div className="past__launches">
        {launches.map((launch) => {
          return (
            <div
              className="past__launches__list"
              key={launch.id}
              onClick={() => setLaunchId(launch.id)}
            >
              <h4>{launch.name}</h4>
              <p> #{launch.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastLaunches;
