import './App.css';
import HomePage from './Components/HomePageComp/HomePage';
import { FloatButton } from 'antd';
import { useEffect, useState } from 'react';
import MyAppContext from './Components/ProxyConfigContext/ProxyConfigContext';
// import HandleAppErrors from './Components/ErrorBoundries/HandleAppErrors';

const  App = () => {

  const defaultConfig = {
    theme : true,
    isLoggedin : true
  }

  const [applicationConfig, setAppConfig]   = useState(defaultConfig)

  const configChanged = (updatedConfig) => {
    
    setAppConfig(updatedConfig);
    
  }
  useEffect( () => {
      
    // alert("app mount called")
     
},[]);




  return (
    <div className="App">
  
    {/* not able to implement error boundries */}


      {/* <HandleAppErrors>  */}

        <MyAppContext.Provider value={applicationConfig} >



          <HomePage configChanged={configChanged} config={applicationConfig} />
        </MyAppContext.Provider>

        <FloatButton tooltip={<div>Documents</div>} />

        {/* </HandleAppErrors> */}


        {/* <MouseTracker render={renderContent}/> */}
      

   

    </div>
  );
  
}

export default App;
