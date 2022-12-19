import React from "react";
import axios from "axios";
import Error from "./Error";
import { useEffect, useState } from "react";

const Result = ({ launchId, setError, error }) => {
  const [launchResult, setLaunchResult] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(null);

  //fetch space x launch by id
  useEffect(() => {
    let intervalId;
    const fetchLaunchResult = async () => {
      try {
        const response = await axios.get(
          `https://api.spacexdata.com/v4/launches/${launchId}`
        );
        setLaunchResult(response.data);
        setError(false);

        //calculate elapsedtime from launch till current date
        const launchDate = new Date(response.data.date_utc);
        intervalId = setInterval(() => {
          const currentTime = new Date();
          setElapsedTime(currentTime - launchDate);
        }, 1000);
      } catch (error) {
        setError(true);
        setLaunchResult(null);
        console.log(error);
      }
    };
    fetchLaunchResult();
    //cleanup effect
    return () => {
      clearInterval(intervalId);
    };
  }, [launchId, setError]);

  //calculating the elapsedtime in hh:mm:ss
  const elapsedTimeInSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(elapsedTimeInSeconds / 3600);
  const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
  const seconds = elapsedTimeInSeconds % 60;

  //error handling
  if (error) {
    return <Error />;
  }

  //indicator to check launch status
  const launchStatus = launchResult.success
    ? "result__success"
    : "result__fail";

  return (
    <div className="result__container">
      <h3>Search Result</h3>
      <div className="result__background">
        <div className="result__items">
          <div className="result__title">{launchResult.name}</div>
          <div className={launchStatus}></div>
        </div>

        <p>Elapsed time since launch: </p>
        <div className="countdown">
          <span className="result__countdown">
            {hours} : {minutes} : {seconds}
          </span>
          <div className="result__id">#{launchResult.id}</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
