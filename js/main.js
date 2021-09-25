$(document).ready(() => {
    $('.type-of-food').click((e) => {
        $('.products-container').hide();
        let currentElement = $(e.target);
        let id = currentElement.data('id');
        $('#' + id).show();

        $('.type-of-food').removeClass('active');
        currentElement.addClass('active')

        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    })


    $('#burgers-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#burgers-container .products-nav'
    });
    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '#burgers-container',
        dots: false,
        centerMode: false,
        infinite: false,
        focusOnSelect: true
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#fries-container .products-nav'
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#fries-container',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });

    $('#sauce-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#sauce-container .products-nav'
    });
    $('#sauce-container .products-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '#sauce-container',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '#drinks-container .products-nav'
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '#drinks-container',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });

    $('#reviews').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    let name = $('#name');
    let persons = $('#persons');
    let phone = $('#phone');
    let time = $('#time');

    $('.open-order').click(() => {
        $('#order').show();
        $('#name').val('');
        $('#persons').val('');
        $('#phone').val('');
        $('#time').val('');
        $('#reserve-error').hide();
        $('#order-end').hide();
        $('#reservation-container').css('display', 'flex');

    })

    $('#reservation-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-close' || e.target.id === 'reservation-container' || e.target.id === 'reservation-close-img') {
            $('#reservation-container').css('display', 'none');

        }
    });

    $('#reserve-button').click(() => {
        if (name.val() && persons.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&persons=' + persons.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#order').hide()
                    $('#order-end').show()
                },
                error: ()=>{
                    $('#reservation-container').css('display', 'none');
                    alert('Ошибка бронирования. Пожалуйста, свяжитесь по номеру телефона.')
                }
            });
        } else {
            $('#reserve-error').show();
        }
    })


})
