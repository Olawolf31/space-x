import React from 'react';

const App = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  }}
  >
    <h1 style={{
      fontSize: '2rem',
      fontWeight: 'normal',
      textAlign: 'center',
    }}
    >
      Find your project instructions in <code style={{ padding: '0 .25em', background: '#e4e4e4' }}>README.md</code>
    </h1>
  </div>
);

export default App;
