(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            switch($(this).data('style')){
                case "cba":
                    $(this).addClass('vtimeline-content cba').wrap('<div data-icon="cba" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                    break;
                case "dod":
                    $(this).addClass('vtimeline-content dod').wrap('<div data-icon="dod" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                    break;
                case "anu":
                    $(this).addClass('vtimeline-content anu').wrap('<div data-icon="anu" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                    break;            
            }
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function() {
            switch($(this).data('icon')){
                case "cba":
                    $(this).prepend('<div class="vtimeline-icon cba-icon"></div>');
                    break;
                case "dod":
                    $(this).prepend('<div class="vtimeline-icon dod-icon"></div>');
                    break;
                case "anu":
                    $(this).prepend('<div class="vtimeline-icon anu-icon"></div>');
                    break;            
            }
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function() {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
            }
        });

    });

    var iconList = ['html.png', 'css3.ico', 'sass.png', 'js.png', 'ts.png',
                    'react.ico', 'angular.png', 'nodejs.png', 'csharp.png',
                    'java.png', 'mongodb.png', 'sql.png', 'git.svg', 'jenkins.png', 'webpack.png'];
    iconList.forEach(function(icon){
        $("#skillList").append('<li> \
                                    <div class="skill"> \
                                        <img class="img" src="images/' + icon + '"/> \
                                    </div> \
                                </li>')
    });

    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

})(jQuery);
