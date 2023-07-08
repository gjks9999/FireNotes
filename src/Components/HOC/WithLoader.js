import React, { useState } from "react"

const WithLoader = (WrappedComponent) => {
  
    const EnhancedComponent = (props) => {
        // Add extra functionality or props here
        const [isLoading, setLoading] = useState(true);

        setTimeout(() => {
            
            setLoading(false);

        }, 2000);

    
        // Render the wrapped component with the extra prop
        return <WrappedComponent {...props} isLoading={isLoading} />;
      };
    
      return EnhancedComponent;




}
export default WithLoader;

