$(document).ready(function(){

    // Logic for the navbar
    $('.blog-nav-item.active').removeClass('active');
    $('.blog-nav-item[href="'+window.location.pathname+'"]').addClass('active')
    $('.blog-nav-item').on('click', function() {
        $('.blog-nav-item.active').removeClass('active');
        $(this).addClass('active');
    });

    // For the trailer lightbox
    $('[data-fancybox]').fancybox({
    	youtube : {
    		controls : 0,
    		showinfo : 0
    	}
    });

    // For the trailer hover-over
    $("img[data-hover]").mouseover(function () {
      $(this).attr('src', $(this).data("hover"));
    }).mouseout(function () {
      $(this).attr('src', $(this).data("src"));
    });

    // Logic for the blueimp lightbox gallery
    var gallery_elms = document.getElementsByClassName('gallery');
    for (var i=0, max=gallery_elms.length; i < max; i++) {
        var elm = gallery_elms[i];
        if (elm !== null) {
            elm.onclick = function (event) {
                event = event || window.event;
                var target = event.target || event.srcElement,
                    link = target.src ? target.parentNode : target,
                    options = {index: link, event: event},
                    links = this.getElementsByTagName('a');
                blueimp.Gallery(links, options);
            };
        }
    };
});