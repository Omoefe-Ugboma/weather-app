import React from 'react';
const api = {
  key: "a678cc5d0d8a53b9cdf08242b83b4847",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
       <main>
         <div className="search-box">
           <input
            type="text"
            className="search-bar"
            placeholder="Seach..."
           />
         </div>
       </main>
    </div>
  );
}

export default App;


