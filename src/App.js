import React,{Fragment, useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Grid} from "@material-ui/core"
import Nav from './components/navbar';
import Ca from './components/mycard';
import { getmathes } from './api/api';

function App() {

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    getmathes()
      .then((data)=>{
        console.log(data.matches)
        setMatches(data.matches);

      })
      .catch((error)=>alert("Not Found "));
    
  },[]);
  return (
    <div className="App">
      <Nav/>
      
      <Grid container>
      <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match)=>(

          <Fragment>
            {match.type==="Twenty20"?(
              <Ca key={match.unique_id} match={match}/>):(" ")}
          </Fragment>

          ))}
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
