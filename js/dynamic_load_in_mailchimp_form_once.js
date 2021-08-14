function get_screen_width() {
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    return x;
}

function set_correct_mail_chimp_form() {

    var desktop_wrapper = document.querySelector('#desktop-mailchimp-signup-wrapper');
    var mobile_wrapper = document.querySelector('#mobile-mailchimp-signup-wrapper');
    var init_signup_form = document.querySelector('#mc_embed_signup');

    // unset display none
    init_signup_form.style.display = 'unset';

    // determine which form & fill in
    var screen_width = get_screen_width();
    if (screen_width > 480) {
        desktop_wrapper.appendChild(init_signup_form);
    } else {
        mobile_wrapper.appendChild(init_signup_form);
    }

}

// ON DOM LOAD
window.addEventListener('DOMContentLoaded',function(){
    set_correct_mail_chimp_form();
},false);

// ON BROWSER RESIZE
window.onresize = set_correct_mail_chimp_form;