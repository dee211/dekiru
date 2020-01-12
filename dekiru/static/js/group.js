/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 70
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    var btn = $('#video-button');
    btn.hide();
    $(div).show(300);
    // div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}

function createTimeCicles() {
    var countDown  =  $('.count-down'),
        countColor = 'rgba(255,255,255,0.9)';

    if (countDown.length){
        countDown.TimeCircles().destroy();

        countDown.each(function (){
            $(this).TimeCircles({
                'animation'       : 'ticks',
                'bg_width'        : 0.4,
                'fg_width'        : 0.02,
                'circle_bg_color' : 'rgba(255,255,255,0.9)',
                'time'            : {
                    'Days' : {
                        'text'  : 'Дней',
                        'color' : countColor,
                        'show'  : true
                    },
                    'Hours' : {
                        'text'  : 'Часов',
                        'color' : countColor,
                        'show'  : true
                    },
                    'Minutes' : {
                        'text'  : 'Минут',
                        'color' : countColor,
                        'show'  : true
                    },
                    'Seconds' : {
                        'text'  : 'Секунд',
                        'color' : countColor,
                        'show'  : true
                    }
                }
            });
        });
    }
}

createTimeCicles();
$(window).resize(function(){
    $(".count-down").TimeCircles().rebuild();
});

// from https://signalvnoise.com/posts/2407-device-scale-user-interface-elements-in-ios-mobile-safari
function getDeviceScale() {
    var deviceWidth, landscape = Math.abs(window.orientation) == 90;
    if (landscape) {
        // iPhone OS < 3.2 reports a screen height of 396px
        deviceWidth = Math.max(480, screen.height);
    } else {
        deviceWidth = screen.width;
    }
    return window.innerWidth / deviceWidth;
}

// mobile only - keep the position:fixed header at constant size when page is zoomed
if (navigator.userAgent.match(/Mobi/)) {
    $(window).on('load scroll', function() {
        var ds = getDeviceScale();
        $('.device-fixed-height').css('transform','scale(1,' + ds + ')')
            .css('transform-origin', '0 0');
        $('.device-fixed-width').css('transform', 'scale(' + ds + ',1)')
            .css('transform-origin', '0 0');
    })
}