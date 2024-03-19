import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { createContext, useState } from 'react';
import Data from './Components/Data';

export const NewContext = createContext();

function App() {

  const [data, setdata] = useState(Data); 
console.log(data);


  return (
    <div className="App">
      <NewContext.Provider value={[data,setdata]}>
           <Router/>
      </NewContext.Provider>
     
    </div>
  );
}

export default App;
