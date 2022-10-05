import { useEffect, useState } from "react";

function Timer({max}){
    const [counter, setCounter] = useState(max);

    useEffect(() =>{
        if(counter > 0){
            setTimeout(()=>setCounter(counter - 1), 1000);
        }
    },[counter]);

    return(
        <span>
            {counter}
        </span>
    )
}

export default Timer;













// import {useEffect, useState} from 'react'

// function Timer() {
//   const [counter, setCounter] = useState(60);

//   useEffect(() => {
//     if(counter > 0) {
//       setTimeout(() => setCounter(counter - 1),1000 * 60 * 60)
//     }
//   }, [counter])
//   return (
//    <span>{counter}</span>
//   )
// }

// export default Timer

