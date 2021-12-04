var open = document.getElementById ('open');
var modal_container = document.getElementById ('modal_container');
var close = document.getElementById ('close');

open.addEventListener('click', ()=> {
    modal_container.classList.add('show'); 
});


close.addEventListener('click', ()=> {
    modal_container.classList.remove('show'); 
});