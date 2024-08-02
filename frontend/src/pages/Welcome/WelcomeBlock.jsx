import "./WelcomeBlock.css";

export const WelcomeBlock = ()=> {
    return (
        <div className="welcome-block">
            <h2>Welcome to AceBook!</h2>
            <p>Say hi to your friends with help of AI.</p>
            <p>Forgot about your friend's birthday? Let AI deal with it.</p>
            <button className="button">Create post</button>
        </div>
    )
};

export default WelcomeBlock;