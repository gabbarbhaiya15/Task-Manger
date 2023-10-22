import React from 'react';

import image2 from './Image/Nightimage.jpg';
import './App.css';
import Taskbar from './Component/Taskbar';

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",height:780}}>
    <Taskbar/>
    </div>
  );
}

export default App;
