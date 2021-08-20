// ON DOM LOAD
window.addEventListener('DOMContentLoaded',function(){
    
    // hide blob if on ipad
    p = navigator.platform;
    if( p === 'iPad' ) {
        alert('hi');
    } else {
        alert('no');
    }

},false);