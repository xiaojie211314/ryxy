$(function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        // autoplay: {
        //     delay: 2000,
        //     stopOnLastSlide: false,
        //     disableOnInteraction: true,
        // },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 980) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 980) + 'px';
                }
            };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
});