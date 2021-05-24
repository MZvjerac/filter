import React, {useEffect, useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import FileDownloader from './containers/Downloads/FileDownloader';

import {AuthContext} from './context/auth-context';

import Capabilities from './containers/Capabilities/Capabilities';

function App() {

  const authContext = useContext(AuthContext);
  const authCheckState = authContext.authenticationCheckState;
  

  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  let routes = (
    <Switch>
      <Route path="/home" component={Home} /> 
      <Redirect from="/" exact to="/home" />          
      <Route path="/capabilities" component={Capabilities} />
      <Route path="/downloads" component={FileDownloader} />
    </Switch>
  ); 

  
  
  return (    
    <div className="App">    
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;

