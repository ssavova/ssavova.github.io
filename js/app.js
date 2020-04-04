$('#moreAbout').click(function(){
    $('#moreAbout').hide();
    $('.moreInfo').show();
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

$('#lessInfo').click(function(){
    $('.moreInfo').hide();
    $('#moreAbout').show();
})

$('#showSomeSkills').click(function(){
    $('#skills').show();
})

$('#hideSkills').click(function(){
    $('#skills').hide();
})

$('#showContactForm').click(function(){
    $('#contactForm').slideToggle("slow");
});

$(document).ready(function() {
   
    $('#showContactForm').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

});

function showSweetAlert(){
    swal("Thank you! You successfully send me an email!", "Look forward hearing from me :)", "success")
}

$('#logo').on('click',function(){
    swal({
        title: "Hi!",
        text: "I`m glad you are here!",
        icon: 'images/finger.png',
        timer: 2000
      });
})




   

