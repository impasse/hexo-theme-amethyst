(function() {
    if(site_config.logo) {
        var i = new Image;
        i.src = site_config.logo;
        $(i).on('load', function () {
            $('#logo > img').replaceWith($(this));
        })
    }
    //直接根据屏幕宽度判断设备了
    if(window.innerWidth < 900) {
        $('.article__title > a').removeAttr('target');
    }

    (function() {
        var toggleBtnIcon = $('.toggle-btn > i');
        var sideBar = $('#sidebar');
        var current = 0;
        $('.toggle-btn').click(function() {
            const next = ++current % 2;
            toggleBtnIcon.removeClass()
            if(next) {
                $(this).css('left', '0');
                sideBar.removeClass('show').addClass('hide');
                toggleBtnIcon.addClass('fa fa-chevron-right');
            } else {
                $(this).css('left', '38%');
                sideBar.removeClass('hide').addClass('show');
                toggleBtnIcon.addClass('fa fa-chevron-left');
            }
        });
    })();
})();