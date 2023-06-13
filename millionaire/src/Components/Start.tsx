import React, { useRef } from 'react'
import "./Start.css"
type StartProps = {
    setUsername: any;
}
export default function Start({setUsername}:StartProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = ()=>{
        if (inputRef.current && inputRef.current.value) {
            setUsername(inputRef.current.value);
          }
    }

      return (
    <div className='start'>
        <input placeholder='enter your username' className='startInput' ref={inputRef}/>
        <button className='playButton' onClick={handleClick}>Play Game</button>
    </div>
  )
}
