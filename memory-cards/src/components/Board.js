import React, { useState, useEffect } from 'react';
import Card from './Card';
import cardData from './cardData';
import randomArray from './randomArray';

export default function Board(props) {

    const changeScore = props.changeScore;
    const score = props.score;
    const changeBestScore = props.changeBestScore;

    const cardInfo = cardData;
    const cards = [];

    function randomAssignment(){
        let newArray = randomArray();
        for(let i = 0; i < 9; i++){
            cards[i] = cardInfo.cards[newArray[i]];
        };
    };

    randomAssignment();

    useEffect(() => {
        randomAssignment();
    }, [score]);

    function clickCard(e){

        let elementClass = e.target.className
        let clickedCard;

        if(elementClass === 'card'){
            let name = e.target.id;
            let index = cardInfo.cards.findIndex(e => e.name === name);
            clickedCard = cardInfo.cards[index];
        } else if(elementClass === 'cardImage'){
            let name = e.target.parentNode.id;
            let index = cardInfo.cards.findIndex(e => e.name === name);
            clickedCard = cardInfo.cards[index];
        };

        if(clickedCard.isClicked === false){
            //change isClicked and shuffle
            clickedCard.isClicked = true;
            changeScore(prevScore => prevScore + 1);
        } else if(clickedCard.isClicked === true){
            //restart game
            changeBestScore(score);
            changeScore(0);
            cardInfo.cards.forEach(card => card.isClicked = false);
        };
    };

    return(
    <div className='board'>
        <Card cardInfo={cards[0]} clickCard={clickCard} />
        <Card cardInfo={cards[1]} clickCard={clickCard} />
        <Card cardInfo={cards[2]} clickCard={clickCard} />
        <Card cardInfo={cards[3]} clickCard={clickCard} />
        <Card cardInfo={cards[4]} clickCard={clickCard} />
        <Card cardInfo={cards[5]} clickCard={clickCard} />
        <Card cardInfo={cards[6]} clickCard={clickCard} />
        <Card cardInfo={cards[7]} clickCard={clickCard} />
        <Card cardInfo={cards[8]} clickCard={clickCard} />
    </div>
    );

};