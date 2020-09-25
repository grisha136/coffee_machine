// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let searchInput = document.querySelector('.input__control.input__input.mini-suggest__input');
let submitButton = document.querySelector('button.mini-suggest__button.button_theme_websearch.button_size_ws-head.i-bem.button_js_inited');
let searchPhrases = ["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"];
let searchPhrase = searchPhrases[getRandom(0,searchPhrases.length)];
let i = 0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

if(submitButton!=undefined){
  let timerId = setInterval(function(){
    searchInput.value +=searchPhrase[i++];
      if(i==searchPhrase.length) {
          clearInterval(timerId);
          submitButton.click();
      }
  },500);
}else{
    let links = document.links;
    let flag = true;
    let numPage = document.querySelector("span.pager__item").innerText;
    for(let i = 0;i<links.length;i++){
        if(links[i].href.indexOf("https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/")!=-1){
            setTimeout(()=>links[i].click(),2000);
            flag=false;
            break;
        }
    }
   if(numPage=="10") location.href = "https://yandex.ru/";
    if(flag) setTimeout(()=>pnnext.click(),2000);
}
