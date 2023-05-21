import React from "react";

const NewsItems = ({ imageUrl, title, description, url }) => {
    return (
        <div className="newsItem">
            <img src={imageUrl} alt="poster" />

            <h3>{title}</h3>
            <p>{description}</p>
            <button>
                <a href={url}>Read More</a>
            </button>
        </div>
    );
};

export default NewsItems;
