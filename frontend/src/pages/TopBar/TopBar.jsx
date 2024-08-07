// import "./TopBar.css";
import Logo from "../../assets/acebook.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchResults } from "../../services/users";

export const TopBar = ()=> {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    useEffect(()=> {
        setToken(localStorage.getItem("token"));
    },[token]);

    const LogOut = ()=> {
        localStorage.clear("token");
        localStorage.clear("full_name");
        localStorage.clear("userId");
        setToken(null);
        navigate ("/login");
    }

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };
    
    const handleSearch = (event) => {
        if (query.length>=2) {
            event.preventDefault();
            navigate(`/search-results?q=${encodeURIComponent(query)}`);
        }
    }

    return (
        <div className="topbar">
            <div className="logo">
                <img width="50" height="50" src={Logo} />
                <h3>AceBook</h3>
            </div>
            <div name="search">
                <input 
                type="search" 
                name="name"
                id="name" 
                placeholder="Find a friend"
                value={query}
                onChange={handleInputChange}
                />
            <button onClick={handleSearch}>Search</button> 
            </div>
            <div className="navigation">
                <p><a href="/main">Home</a></p>
                <p><a href="/about">About us</a></p>
                {token ? 
                    (
                        <>
                        <a href="/profile"><button className="button">Profile</button></a>
                        <button className="button" onClick={LogOut}>Logout</button>
                        </>
                    ) : (
                        <> 
                        <a href="/login"><button className="login">Login</button></a>
                        <a href="/signup"><button className="signup">Signup</button></a>
                        </>
                    )
                }
            </div>
        </div>
    )
};

export default TopBar;
