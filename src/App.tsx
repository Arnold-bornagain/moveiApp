import React from 'react';
import { AuthProvider } from 'oidc-react';

//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


//styles

import {GlobalStyle} from './GlobalStyle';










const  App= ()=>{

return(
      
      
    <Router>
    <Header />
   <Routes>
  
     <Route path='/home' element={<Home />} />
     <Route path='/:movieId' element={<Movie/>} />
     <Route path='/*' element={<NotFound/>} />
    </Routes>
    <GlobalStyle />
    </Router>

  
    
    
  

    )
  
    
};

export default App;
