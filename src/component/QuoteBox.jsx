import React from 'react';

const QuoteBox = ({colors, BgColor, phrases, indexPhrase, indexUser }) => {
    
    return (
        <div className='card'>
            <i style={{color: `${colors[BgColor]}`}} class="icon-quote fa-solid fa-quote-left"></i>
            <div className="phrases">
                <h2 style={{color: `${colors[BgColor]}`}}>{phrases.phrase[indexPhrase]}</h2>
                <h3 style={{color: `${colors[BgColor]}`}}>{phrases.Author[indexPhrase]}</h3>
            </div>
            <button onClick={indexUser} className='button-next'>
                <i class="icon-next fa-solid fa-circle-chevron-right" style={{color: `${colors[BgColor]}`}}></i>
            </button>
        </div>
    );
};

export default QuoteBox;