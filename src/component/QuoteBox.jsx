import React from 'react';

const QuoteBox = ({colors, BgColor, phrases, indexPhrase}) => {
    
    return (
        <div className='card'>
            <i style={{color: `${colors[BgColor]}`}} class="icon-quote fa-solid fa-quote-left"></i>
            <div className="phrases">
                <h2 style={{color: `${colors[BgColor]}`}}>{phrases[indexPhrase].quote}</h2>
                <h3 style={{color: `${colors[BgColor]}`}}>{phrases[indexPhrase].Author}</h3>
            </div>
        </div>
    );
};

export default QuoteBox;