import {useState} from "react";
import { TopBar } from "../TopBar/TopBar";
import { FeedPage } from "../Feed/FeedPage";
import { WelcomeBlock } from "../Welcome/WelcomeBlock";
import { Footer } from "../Footer/Footer";


export const MainPage =()=> {
    return (
        <>
        <TopBar />
        <WelcomeBlock />
        <FeedPage />
        <Footer />
        </>
    )
};
