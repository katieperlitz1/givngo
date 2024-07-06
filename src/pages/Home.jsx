import React from "react";
import "../App.css";
import HomeCard from "../components/HomeCard";

function Home() {


    return (
        <div>
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5 home">
                    <h1 className="display-5 fw-bold">All your sports graphics essentials, in one spot</h1>
                    <p className="col-md-8 fs-4">Whether it's overlays, textures, editing techniques, or full PSDs,
                    GivNGo has all you need to make professional graphics.</p>
                </div>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        
                            <HomeCard />
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;