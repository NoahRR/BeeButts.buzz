// ON DOM LOAD
window.addEventListener('DOMContentLoaded',function(){
    
    // hide blob if on ipad
    p = navigator.platform;

    // p = MacIntel is what safari on ipad uses... can't use that
    if( p == 'iPad' ) {
        document.querySelector('#desktop-blob-main').style.display = 'none';
    }

    var ipad_or_not = navigator.userAgent.match(/iPad/i) != null;

    alert(ipad_or_not);

},false);