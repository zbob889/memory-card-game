import React, { useState, useEffect } from 'react';

export default function Card(props) {

    const [cardInfo, changeCardInfo] = useState('');

    useEffect(() => {
        changeCardInfo(props.cardInfo);
    }, [props.cardInfo]);

return(
  <div id={cardInfo.name} className='card' onClick={props.clickCard}>
    <img src={cardInfo.img} alt='' className='cardImage' />
    {cardInfo.name}
  </div>
);

};