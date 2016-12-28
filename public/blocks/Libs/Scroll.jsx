module.exports = function (to, duration) {
    let requestAnimFrame = (function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};})();

    let easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    function animatedScrollTo(element, to, duration, callback) {
        var start = element.scrollTop,
            change = to - start,
            animationStart = +new Date();
        var animating = true;
        var lastpos = null;

        var animateScroll = function() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            var now = +new Date();
            var val = Math.floor(easeInOutQuad(now - animationStart, start, change, duration));
            if (lastpos) {
                if (lastpos === element.scrollTop) {
                    lastpos = val;
                    element.scrollTop = document.documentElement.scrollTop = val;
                } else {
                    animating = false;
                }
            } else {
                lastpos = val;
                element.scrollTop = document.documentElement.scrollTop = val;
            }
            if (now > animationStart + duration) {
                element.scrollTop = document.documentElement.scrollTop = to;
                animating = false;
                if (callback) { callback(); }
            }
        };
        requestAnimFrame(animateScroll);
    }


    animatedScrollTo(document.body, to, duration)
}