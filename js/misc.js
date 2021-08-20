// ON DOM LOAD
window.addEventListener('DOMContentLoaded',function(){
    
    // hide blob if on ipad
    p = navigator.platform;
    if( p === 'iPad' ) {
        alert('hi');
    } else {
        console.log('hasdfasdf');
    }

},false);