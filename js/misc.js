// ON DOM LOAD
window.addEventListener('DOMContentLoaded',function(){
    
    // hide blob if on ipad
    p = navigator.platform;
    if( p === 'iPad' ) {
        document.querySelector('#desktop-blob-main').style.display = 'none';
    }

},false);