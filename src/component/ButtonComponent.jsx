import React from 'react';

const ButtonComponent = ({index, colors, BgColor}) => {
    return (
        <div className="phrase">
            <button onClick={index} className='button-next'>
                <i class="icon-next fa-solid fa-circle-chevron-right" style={{color: `${colors[BgColor]}`}}></i>
            </button>
        </div>
    );
};

export default ButtonComponent;