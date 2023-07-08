import DefaultPage from "./DefaultPage";
import AddCard from "../CreateOrModifyNoteComp/AddCard"
import "./HomePage.css"
import ProxyConfig from "./ProxyConfig";

import {BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
import TopNavigation from "../TopNavigationComp/TopNavigation";
import React from "react";
import FullDetails from "../FireCardComp/FullDetails";

const  HomePage = (props) => {

   // const navigate = useNavigate();
   const configChanged = (config) => {
     
      props.configChanged(config);


   }



         return( 
      
         
               <Router >
                  <div style={{display : "flex"}}>
                  <TopNavigation /> 
                  <ProxyConfig configChanged={configChanged} config={props.config} />  
                  </div>
                 
       
               <div className="appBody">
                  <Routes>                                
                        <Route exact path="/home" element={<DefaultPage />} />                  
                        {/* <Route path="*" element={<DefaultPage />} />*/}
                        <Route path="notes/add" element={<AddCard />} />                                    
                        <Route path="notesview" element={<FullDetails />} />                                    
                  </Routes>
               </div>

               </Router> 
           
                        
   
         );
  
   }
    
export default HomePage;