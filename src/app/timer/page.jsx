"use client"

import { useState,useEffect } from "react"

const Timer=()=>{

    const [count, setCount] = useState(60)
    const [going, setGoing] = useState(false)
    const second = count % 60
    const minute = Math.floor(count/60)


    const formattedTime = (minute, second) =>{
        if(second < 9){
            return `0${second}`;
        }else if(second > 9){
            return second;
        }else if(minute < 9){
            return`0${minute}`
        }else if(minute > 9){
            return minute;
        }
        
    }

    const timer = ()=>{
        setCount((prev) =>(prev > 0? prev - 1: prev - 0))
    }

    const start=()=>{
        setGoing(true)
    }

    const end=()=>{
        setGoing(false)
    }
    
    const add=()=>{
        setCount((prev) => prev + 15)
    }

    const reset=()=>{
        setCount(60)
        setGoing(false)
    }



    useEffect(()=>{
        const myInterval = setInterval(() => timer(),1000)
        if(going){
            myInterval
        }else if(!going){
            clearInterval(myInterval)
        }
        return ()=>clearInterval(myInterval);
    },[going])

    return(
        <div className="clock_Background">
            <div className="background-Image">
                <div>
                    <div className="time"><span className="minute">{formattedTime(minute)}</span>:<span>{formattedTime(second)}</span></div>
                </div>
                <div className="actionBtns">
                    <div>
                        <button className="btns" onClick={() => add()}>Add +15s</button>
                    </div>
                    <div>
                        <button className="btns" onClick={() => start()}>Start</button>
                    </div>
                    <div>
                        <button className="btns" onClick={() => end()}>End</button>
                    </div>
                    <div>
                        <button className="btns" onClick={()=> reset()}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer;