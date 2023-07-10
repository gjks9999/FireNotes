import { Breadcrumb  } from 'antd';

const FireBreadcrumb = (props) =>{

        return(
            <div style={{ color :"white"}}>
                <Breadcrumb  items={props.navList} />
            </div>
            
        )


}

export default FireBreadcrumb;