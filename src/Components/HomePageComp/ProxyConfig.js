import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import {  Switch } from 'antd';
import { useState } from 'react';
import { Button } from 'antd';
import {  NavLink } from "react-router-dom";

const ProxyConfig = (props) => {
  
    
    const [proxy , changeProxy] = useState(props.config);

    const themeChanged =() =>{

        const changedProxy = {...proxy};
        changedProxy.theme = !proxy.theme;
        changeProxy(changedProxy)
        changeProxy(changedProxy);
        props.configChanged(changedProxy);
        
    }
    const userLoggedIn =() =>{

        const changedProxy = {...proxy};
        changedProxy.isLoggedin = !proxy.isLoggedin;
        changeProxy(changedProxy);
        props.configChanged(changedProxy);
        
    }

    return (

        <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
            
            <Switch 
            checkedChildren="Light theme" 
            unCheckedChildren="Dark theme" 
            checked={proxy.theme}
            onChange={themeChanged }
            />
            
            <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={proxy.isLoggedin}
            onChange={userLoggedIn }
            />

            <NavLink to="/notes/add" relative="path"  >
            {({ isActive, isPending }) => (
                    <Button type={isActive ? "primary" : "dashed"}> Add new note </Button>
            )}
            </NavLink>
            <NavLink to="/home" relative="path">
            {({ isActive, isPending }) => (
                    <Button type={isActive ? "primary" : "dashed"}> Home </Button>
            )}   
            </NavLink>

   

        </div>

    )

};

export default ProxyConfig;

// <span style={{ display :"flex", alignItems : "center"}}>