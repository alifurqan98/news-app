import "./App.css";
import "./@mediaquery.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

function App() {
    const apikey = "8a2a28938a1d42028d8801519f2c135e";
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"General"}
                        />
                    }
                />
                <Route
                    path="/business"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Business"}
                        />
                    }
                />
                <Route
                    path="/entertainment"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Entertainment"}
                        />
                    }
                />
                <Route
                    path="/health"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Health"}
                        />
                    }
                />
                <Route
                    path="/science"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Science"}
                        />
                    }
                />
                <Route
                    path="/technology"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Technology"}
                        />
                    }
                />
                <Route
                    path="/sports"
                    element={
                        <News
                            apikey={apikey}
                            country={"in"}
                            category={"Sports"}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
