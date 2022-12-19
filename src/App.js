import React from "react";
import PastLaunches from "./components/PastLaunches";
import SearchForm from "./components/SearchForm";
import Result from "./components/Result";
import { useState } from "react";

const App = () => {
  const [launchId, setLaunchId] = useState(null);
  const [error, setError] = useState(false);
  return (
    <>
      <div className="project__title">Bitgrip Space X Project</div>
      <SearchForm setLaunchId={setLaunchId} />
      {launchId && (
        <Result
          launchId={launchId}
          setError={setError}
          setLaunchId={setLaunchId}
          error={error}
        />
      )}
      <PastLaunches setLaunchId={setLaunchId} />
    </>
  );
};

export default App;
