import { useState } from "react"

const MouseTracker = (props ) => {

    const [position, setMousePosition] = useState({x:0,y:0})

    const handleMouseMove = (event) => {
      
        setMousePosition({
            x: event.clientX,
            y: event.clientY
        })

    }
    
    return(

        <div style={{width:"100vh", height :"50vh", border:"5px solid #000"}}  onMouseMove={handleMouseMove} > 
        

        <p> position : x = {position.x} and y = {position.y} </p>
        {props.render(position)}

        </div>

    )

    
}


export default MouseTracker;