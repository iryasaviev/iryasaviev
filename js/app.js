'use strict'

let app = document.getElementById('app');



var menu = {
    OpenOrClose: function(){
        app.classList.toggle('mn-active');
    }
};

document.addEventListener('DOMContentLoaded', function(){
    app.getElementsByClassName('MenuBtn')[0].onclick = menu.OpenOrClose;
});