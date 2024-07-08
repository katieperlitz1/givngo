import React from "react";
import "../App.css";
import HomeCard from "../components/HomeCard";
import data from "../data";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer"

function Home() {


    return (
      <div>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5 home">
            <h1 className="display-5 fw-bold">
              All your sports graphics essentials, in one place.
            </h1>
            <p className="col-md-8 fs-4">
            From overlays and textures to editing techniques and Photoshop files, 
            GivNGo has everything you need to elevate your graphics game.
            </p>

            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <HomeCard />
              </div>
            </div>
            <h1 className="display-7 fw-bold">Favorites this week</h1>
              <div className="product-grid">
                {data.products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default Home;