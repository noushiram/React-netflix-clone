import NavBar from "./Components/NavBar";
import './Components/app.css'
import { action,originals,comedy } from "./Url";

import React from "react";
import RawPost from "./Components/rawpost/RawPost";
import Banner from "./Components/Banner";


function App() {
  
 

  
  return (
   <div className="app">
    <NavBar/>
    <Banner/>
     <RawPost url={originals} title='Netflix orginals'/>
     <RawPost url={action} title='Action' isSmall />
     <RawPost url={comedy} title='Comedy' isSmall />
     
    </div>
  );
}

export default App;
