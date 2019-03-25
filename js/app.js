'use strict'

let app = document.getElementById('app');



var page = {
    list: {
        home:'<h1>In developing</h1>',
        works:'<div class="ws_wr WorksWrapper"><div class="ws_mn WorksMenu"><div class="ws_mn-item ws_mn-item-active WorksMenuBtn" data-work-num="0">Himprodukt</div><div class="ws_mn-item WorksMenuBtn" data-work-num="1">Glikoterm</div><div class="ws_mn-item WorksMenuBtn" data-work-num="2">Цветущий рай</div></div><div class="ws_bd WorksBody"><div class="ws_bd-item"><div class="ws_bd-item_bd"><img class="ws_bd-item--img" src="images/HimproduktGif.gif"><div class="ws_bd-item--txt ws_bd-item--txt1">SITE DEVELOPMENT</div><div class="ws_bd-item--txt ws_bd-item--txt2">SITE PROMOTION</div><div class="ws_bd-item--txt ws_bd-item--txt3">DESIGN</div><div class="ws_bd-item--txt ws_bd-item--txt4">TECHICAL SUPPORT</div><div class="ws_bd-item_bd-bcg"><a class="ws_bd-item_bd-bcg--a" href="http://www.himprodukt.com">himprodukt.com</a></div></div></div></div></div>',
        projects:'3',
        about:'4'
    },

    Open: function(click){
        let target = click.target,
        targetBtnRef = target.dataset.menuLinkRef;

        app.getElementsByClassName('AppBody')[0].innerHTML = window["page"]["list"][targetBtnRef];

        switch(targetBtnRef){
            case 'home':
            break;

            case 'works':
                for(var btn of app.getElementsByClassName('WorksMenuBtn')){
                    btn.onclick = works.menu.Open;
                }
            break;

            case 'projects':
            break;

            case 'about':
            break;
        }

        menu.OpenOrClose();
    }
};



var menu = {
    OpenOrClose: function(){
        app.classList.toggle('mn-active');
    }
};

var works = {
    list: ['<div class="ws_bd-item"><div class="ws_bd-item_bd"><img class="ws_bd-item--img" src="images/HimproduktGif.gif"><div class="ws_bd-item--txt ws_bd-item--txt1">SITE DEVELOPMENT</div><div class="ws_bd-item--txt ws_bd-item--txt2">SITE PROMOTION</div><div class="ws_bd-item--txt ws_bd-item--txt3">DESIGN</div><div class="ws_bd-item--txt ws_bd-item--txt4">TECHICAL SUPPORT</div><div class="ws_bd-item_bd-bcg"><a class="ws_bd-item_bd-bcg--a" href="http://www.himprodukt.com">himprodukt.com</a></div></div></div>', '<h1>Glikoterm</h1>', '<h1>Цветущий рай</h1>'],

    menu: {
        Open: function(click){
            let wrapper = app.getElementsByClassName('WorksWrapper')[0],
            target = click.target,
            activeBtnNum = target.dataset.workNum,
            menu = wrapper.getElementsByClassName('WorksMenu')[0];

            var btns = menu.getElementsByClassName('WorksMenuBtn');
            for(var btn of btns){
                if(btn.classList.contains('ws_mn-item-active')){
                    btn.classList.remove('ws_mn-item-active');
                }
            }
            target.classList.add('ws_mn-item-active');

            let body = wrapper.getElementsByClassName('WorksBody')[0];
            body.innerHTML = works.list[Number(activeBtnNum)];
        }
    }
};

document.addEventListener('DOMContentLoaded', function(){
    // CLick for main menu.
    app.getElementsByClassName('MenuBtn')[0].onclick = menu.OpenOrClose;

    // Click for buttons in the main menu.
    for(var mainMnBtn of app.getElementsByClassName('MenuBodyBtn')){
        mainMnBtn.onclick = page.Open;
    }
    

    
    // Click for menu buttons on works page.
    if(app.getElementsByClassName('WorksWrapper').length > 0){
        for(var btn of app.getElementsByClassName('WorksMenuBtn')){
            btn.onclick = works.menu.Open;
        }
    }
});