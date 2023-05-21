import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItems from "./NewsItems";

const News = ({ country, category, apikey }) => {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [total, setTotal] = useState(0);

    async function getNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page} &pageSize=12`;
        let response = await axios.get(url);
        let fetchedData = await response.data;
        setTotal(fetchedData.totalResults);
        console.log(fetchedData);
        setArticles(fetchedData.articles);
    }

    useEffect(() => {
        getNews();
    }, [page]);

    useEffect(() => {
        getNews();
        setPage(1);
    }, [category]);

    const prevFun = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const nextFun = () => {
        if (12 * page < total) {
            setPage(page + 1);
        }
    };
    return (
        <div>
            <h1 id="heading">Top {category} Headlines</h1>
            <div className="container">
                {articles.map((element, index) => {
                    return (
                        <NewsItems
                            key={index}
                            title={element.title}
                            description={element.description}
                            imageUrl={element.urlToImage}
                            url={element.url}
                        ></NewsItems>
                    );
                })}
            </div>

            <div className="btn">
                <button className="btn1" onClick={prevFun}>
                    &larr; Prev
                </button>
                <button className="btn1" onClick={nextFun}>
                    Next &rarr;
                </button>
            </div>
        </div>
    );
};

export default News;
