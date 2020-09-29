// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let searchInput = document.querySelector('.input__control.input__input.mini-suggest__input');
let nextPageButton = document.getElementsByTagName('a');
let submitButton = document.querySelector('button.mini-suggest__button.button_theme_websearch.button_size_ws-head.i-bem.button_js_inited');
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"],
    "crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков в Москве","Заказать барабанщиков в Москве"]
};
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let searchPhrases = sites[site];
let searchPhrase = searchPhrases[getRandom(0,searchPhrases.length)];
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if (submitButton!=undefined){ // Если мы на главной странице яндекса
    document.cookie = "site="+site;
}else{ // Если уже не на главной странице яндекса
    site = getCookie("site");
}


if(submitButton!=undefined){
  let timerId = setInterval(function(){
    searchInput.value +=searchPhrase[i++];
      if(i==searchPhrase.length) {
          clearInterval(timerId);
          submitButton.click();
      }
  },500);
}else if (location.hostname == "yandex.ru"){
    let links = document.links;
    let flag = true;
    let numPage = document.querySelector("span.pager__item").innerText
    let nextPageButton = document.querySelector(".pager__item_kind_next");
    for(let i = 0;i<links.length;i++){
        let link = links[i];
        if(link.href.indexOf(site)!=-1){
            link.removeAttribute('target');
            setTimeout(()=>link.click(),2000);
            flag=false;
            break;
        }
    }
   if(numPage=="10") location.href = "https://yandex.ru/";
    if(flag) setTimeout(()=>nextPageButton.click(),2000);
}else{
    if (getRandom(0,100)>=80){
        location.href = "https://yandex.ru/";
    }else{
        let links = document.links;
        setInterval(()=>{
            let index = getRandom(0,links.length);
            console.log("Я не умер, я ещё живой! Проверяю ссылку: "+links[index]);
            if(links[index].href.indexOf(location.hostname) != -1){
                links[index].click();
            }
        },5000);
    }
}
