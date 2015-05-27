var mobile = /(android|iphone|ipod|windows phone)/.test(navigator.userAgent.toLowerCase());


SVGInjector(document.querySelectorAll('#ms'), {
    evalScripts: false,
    each: function (svg) {
       svg.removeAttribute("width");
       svg.removeAttribute("height");
       if (mobile) {
         for (let i = 1; i < 7; i++) {
           $("#message" + i).css({"-webkit-animation": "none", animation: "none"});
         }
       }
    }
});
