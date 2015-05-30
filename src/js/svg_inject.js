const animation = Modernizr.prefixed('animation')
    .replace(/([A-Z])/g, function(str, cap) { return '-' + cap.toLowerCase(); })
    .replace(/^ms-/,'-ms-');

SVGInjector(document.querySelectorAll('#ms'), {
    evalScripts: false,
    each: function (svg) {
       svg.removeAttribute("width");
       svg.removeAttribute("height");
       if (mobile) {
         let anone = {};
         anone[animation] = "none";
         $(".ms-message").css(anone).attr("mobile", "mobile");
       }
    }
});
