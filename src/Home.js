import React from "react";
import { } from "@mui/icons-material"


function Home() {
    return (
        <div className="NavbarContainer">
        <div className="NavbarLeft">
        <span className="logo">Faithful Connections</span>
        <img src="https://th.bing.com/th?q=Romantic+Relationship+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="" className="NavbarImg" />
        </div>
        <div className="NavbarCenter">
        <div className="searchbar">
        <Search className="searchIcon" />
        <input placeholder="Search for people" className="seachInput" />
        </div>
        </div>
        <div className="NavbarRight">
            <div className="NavbarLinks">
                <span className="NabvarLinks">Homepage</span>
            </div>
            <div className="NavbarIcons"></div>
        </div>

        </div>
    )
}

export default Home;