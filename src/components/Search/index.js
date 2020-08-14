// Search
import React from "react";
import "./style.css"

function Search() {
    return (
        <div className="container">
            <div className="row">
                <div className="searchStyle">
                    <input type="text" placeholder="Search by any field" />
                    <span><button>Search</button></span>
                </div>
            </div>
        </div>
    )
};

export default Search;