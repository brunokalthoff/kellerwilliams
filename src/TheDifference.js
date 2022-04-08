import React from "react";

function TheDifference() {




    return (
        <div className="differenceFlexWrap">
            <div className="differenceText">
                <h1>The Keller Williams Difference</h1>
                <p>As the largest real estate franchise in the world, our exponential growth is a result of our commitment to delivering value to our associates. We understand that our associates are the key to our company’s success, not the other way around. As a result, more real estate professionals than ever are turning to Keller Williams Realty. And, we’re powering their businesses with the education, coaching, technology, culture, and wealth-building opportunities that are redefining their potential and taking their careers toward new heights.</p>
            </div>
            <div className="differenceProgessBars">
                <h2>KELLER WILLIAMS OUTPACES INDUSTRY IN TRANSACTION GROWTH BY MORE THAN 9X</h2>
          
                <div>
                    <p>KELLER WILLIAMS</p>
                    <div className="progressBar" ><span>9.7%</span><div style={{ width: '41%' }} className="growthKeller"></div></div></div>
                <div> <p>INDUSTRY</p>
                    <div className="progressBar" ><span>1.1%</span><div style={{ width: '6%' }} className="growthIndustry"></div></div></div>
                <div> <p>KELLER WILLIAMS</p>
                    <div className="progressBar" ><span>15%</span><div style={{ width: '70%' }} className="growthKeller"></div></div></div>
                <div> <p>INDUSTRY</p>
                    <div className="progressBar" ><span>7.2%</span><div style={{ width: '36%' }} className="growthIndustry"></div></div></div>

            </div>
        </div>
    );
}

export default TheDifference;