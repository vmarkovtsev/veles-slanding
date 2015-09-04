if (navigator.userAgent.search("Ubuntu") >= 0) {
    var download = $(".download");
    download.hide();
    var apt_get = $("<pre class=\"ubuntu-download\">" +
        "wget -O - https://velesnet.ml/ubuntu-install.sh | bash -</pre>");
    download.after(apt_get);
}
