import { useState } from "react";

function Post(props){

    const [num,setNum]=useState(0);


    const buttonClick=()=>{
        setNum(n=>n+1);
    }

    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <h3 onClick={buttonClick}>Vote</h3>
            <p>{num}</p>
        </div>
    );
}

export default Post