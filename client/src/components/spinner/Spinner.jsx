import React from 'react';
import "./Spinner.css";

const Spinner = () => {
    return (
        <div className='spinnerContainer'>
            <div className='loadingSpinner'>
                <div className="stick stick1"></div>
                <div className="stick stick2"></div>
                <div className="stick stick3"></div>
                <div className="stick stick4"></div>
                <div className="stick stick5"></div>
                <div className="stick stick6"></div>
            </div>
            <p className="loadingText">Ladataan..</p>
        </div>
    )
}

export default Spinner