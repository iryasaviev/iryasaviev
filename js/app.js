'use strict'

let app = document.getElementById('app');



var menu = {
    OpenOrClose: function(){
        app.classList.toggle('mn-active');
    }
};

var works = {
    wrapper: app.getElementsByClassName('WorksWrapper')[0],

    list: ['<div class="ws_bd-item"><div class="ws_bd-item_bd"><img class="ws_bd-item--img" src="images/HimproduktGif.gif"><div class="ws_bd-item--txt ws_bd-item--txt1">SITE DEVELOPMENT</div><div class="ws_bd-item--txt ws_bd-item--txt2">SITE PROMOTION</div><div class="ws_bd-item--txt ws_bd-item--txt3">DESIGN</div><div class="ws_bd-item--txt ws_bd-item--txt4">TECHICAL SUPPORT</div></div></div>', '<h1>Glikoterm</h1>', '<h1>Цветущий рай</h1>'],

    menu: {
        Open: function(click){
            let target = click.target,
            activeBtnNum = target.dataset.workNum,
            menu = works.wrapper.getElementsByClassName('WorksMenu')[0];

            var btns = menu.getElementsByClassName('WorksMenuBtn');
            for(var btn of btns){
                if(btn.classList.contains('ws_mn-item-active')){
                    btn.classList.remove('ws_mn-item-active');
                }
            }
            target.classList.add('ws_mn-item-active');

            let body = works.wrapper.getElementsByClassName('WorksBody')[0];
            body.innerHTML = works.list[Number(activeBtnNum)];
        }
    }
};

document.addEventListener('DOMContentLoaded', function(){
    // CLick for main menu
    app.getElementsByClassName('MenuBtn')[0].onclick = menu.OpenOrClose;
    
    // Click for menu buttons on works page
    if(app.getElementsByClassName('WorksWrapper').length > 0){
        for(var btn of app.getElementsByClassName('WorksMenuBtn')){
            btn.onclick = works.menu.Open;
        }
    }
});