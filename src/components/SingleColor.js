import React, { useEffect, useState } from 'react';
// import rgbToHex from '../utilities/utils';

const SingleColor = ({rgb, weight, index, hexColor}) => {
   const [alert, setAlert] = useState(false);
   const bcg = rgb.join(',');
   const hexValue = `#${hexColor}`
   const whiteColor = `${index > 10 && 'color-light'}`;
   // Other way to convert in hex value:
      // const hex = rgbToHex(...rgb);
      
   useEffect(() => {
      let timeout = setTimeout(() => {
         setAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
   }, [alert]);

   return (
      <article
         className={`color ${whiteColor}`}
         style={{backgroundColor: `rgb(${bcg})`}}
         onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
         }}
      >
         <p className="percent-value">{weight}%</p>
         <p className="color-value">{hexValue}</p>
         {alert && <p className={`alert ${whiteColor}`}>copied to clipboard</p>}
      </article>
   )
}

export default SingleColor;