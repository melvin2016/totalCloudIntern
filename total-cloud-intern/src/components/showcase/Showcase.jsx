import React from 'react';
// Custom CSS
import './Showcase.css'

function Showcase(){
    return(
        <section id="showcase" className="container d-flex flex-column justify-content-center align-content-center">
            <div className="row">
                <div className="col col-md-5 col-sm-12">
                    <div className="showcase-content">
                        <h2 className="showcase-heading">Have no time to prepare <span className="primary-color">food</span>?</h2>
                        <p className="showcase-lead">Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!</p>
                        <button className="primary-btn">Order Food</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Showcase;