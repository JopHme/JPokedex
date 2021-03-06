import { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

function Entry(){
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);
    return (
    <div>
        {isMobile?
           <Mobile/>
 
        :<Desktop/>}

      </div>
    )
}



export default Entry