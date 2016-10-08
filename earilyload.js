function earilyload(src, fn) {
	var hv = document.createElement('script');
    hv.src = src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hv, s);
    elementReady(hv, fn);
}
function elementReady(ele, fn) {
	if (document.addEventListener) {
        ele.addEventListener('load', function () {
            ele.removeEventListener('load', arguments.callee, false);
            fn();
        }, false);
    } else if (document.attachEvent) {
        ele.attachEvent('onreadystatechange', function () {
            if (ele.readyState === 'complete' || ele.readyState === 'loaded') {
                ele.detachEvent('onreadystatechange', arguments.callee);
                fn();
            }
        });
    }
}