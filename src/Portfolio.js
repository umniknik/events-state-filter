import React from "react";
import ProjectList from './ProjectList';
import Toolbar from "./Toolbar";
import { useState } from "react";

function Portfolio() {

    const [filter, setFilter] = useState('All');  // Устанавливаем начальное состояние фильтра ALL, т.е. отображаются все карточки
    //Функция, которая сортирует массив карточек, перед отправкой их в компонент отображания карточек ProjectList
    const sortedCards = filter === 'All' ? cardsImgs : cardsImgs.filter(card => card.category === filter);

    return (
        <>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={filter}

                // ↓ Здесь мы из компонента toolbar получаем занчение кликнутого фильтра через колбек и устанавливаем его в хук начальное состояние filter, 
                // что заставляет перериросовать компонент Portfolio. 1) Перерисовывается компонент Toolbar с новым значением filter и 2) перериовывается 
                // компанент ProjectList с новыми карточками, т.е. перед этим была выпонена функция sortedCards, кот. отсортировала карточки по новому значению filter
                onSelectFilter={(filter) => setFilter(filter)} />
            <ProjectList cardsImgs={sortedCards} />
        </>
    );
}

export default Portfolio;

const cardsImgs = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
}, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
}]