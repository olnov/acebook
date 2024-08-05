import { useState, useEffect } from "react";
import "./WelcomeBlock.css";

export const WelcomeBlock = ()=> {

    const [FullName,setFullName] = useState(localStorage.getItem("fullName"));

    useEffect(()=> {
        setFullName(localStorage.getItem("fullName"));
    },[FullName]);

    return (
        <div className="welcome-block">
            <h2>Welcome, {FullName}!</h2>
            <p className="welcome-message">
            Sharing your thoughts and experiences with others can be incredibly
            rewarding and inspiring. Whether you want to share a recent adventure, 
            express your opinions, or simply tell a story, creating a post is a great 
            way to connect with your community.It's your chance to spark conversations and make an impact!
            </p>
            <button className="button">Create post</button>
        </div>
    )
};

export default WelcomeBlock;