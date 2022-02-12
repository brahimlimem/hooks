import './App.css';

import {BrowserRouter as Router, Switch, Route }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import Filter from './components/Filter'
import Add from './components/Add';
function App() {
  return (
   <div>



<MoviesList/>


</div>
  
   
    
  );
}

export default App;
