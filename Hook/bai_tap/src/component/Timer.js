import { useState, useEffect } from "react";
function Timer(){
    const [timer,setTimer] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer -1);
        },1000);
        return () => clearInterval(interval);
    },[]);
    return (
        <div>
            <h1>Countdown Timer: {timer}</h1>
        </div>
    );
};

export default Timer;