$("#mc-embedded-subscribe-form").submit(function (e) {
    e.preventDefault()


    // HERE I"M JUST TRYNA GET THE LOADER TO BE THERE WHILE API IS LOADING. THEN BACK TO NORMAL. at the moment, if uncomment, firs will work (words still there tho) but then the button will remain disabled
    document.querySelector('#loading').style.display = 'unset'
    // document.querySelector('#mc-embedded-subscribe').disabled = 'true'
    document.querySelector('#mc-embedded-subscribe').classList.remove('my-btn-style')
    document.querySelector('#mc-embedded-subscribe').classList.add('my-btn-style-load')

    var red_er = document.querySelector('.custom-error-msg-red');
    var orange_er = document.querySelector('.custom-error-msg-orange');
    var green_er = document.querySelector('.custom-error-msg-green');

    $.ajax({
        type: $('#mc-embedded-subscribe-form').attr('method'),
        url: $('#mc-embedded-subscribe-form').attr('action'),
        data: $('#mc-embedded-subscribe-form').serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(data) {

            document.querySelector('#loading').style.display = 'none'
            document.querySelector('#mc-embedded-subscribe').classList.remove('my-btn-style-load')
            document.querySelector('#mc-embedded-subscribe').classList.add('my-btn-style')

            red_er.style.display = 'none'
            orange_er.style.display = 'none'
            green_er.style.display = 'none'

            red_er.innerHTML = data.msg;
            red_er.style.display = 'block';

        },
        success     : function(data) {
            if (data.result != "success") {

              document.querySelector('#loading').style.display = 'none'
              document.querySelector('#mc-embedded-subscribe').classList.remove('my-btn-style-load')
              document.querySelector('#mc-embedded-subscribe').classList.add('my-btn-style')

              red_er.style.display = 'none'
              orange_er.style.display = 'none'
              green_er.style.display = 'none'

              orange_er.innerHTML = data.msg;
              orange_er.style.display = 'block';

            } else {

              document.querySelector('#loading').style.display = 'none'
              document.querySelector('#mc-embedded-subscribe').classList.remove('my-btn-style-load')
              document.querySelector('#mc-embedded-subscribe').classList.add('my-btn-style')

              red_er.style.display = 'none'
              orange_er.style.display = 'none'
              green_er.style.display = 'none'

              green_er.style.display = 'block';

            }
        }
    });

  });