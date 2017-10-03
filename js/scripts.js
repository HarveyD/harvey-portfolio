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

    /**
     * Work Experience
     */
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

    /**
     * PROJECTS
     */
    var projectList = [
        { 
            title: 'Repeat After Me', 
            img: 'ram.png', 
            url: 'https://www.harveydelaney.com/repeatafterme',
            desc: 'A simple Simon Says clone made using HTML5 Canvas + Typescript',
            tech: ['JavaScript', 'TypeScript', 'Webpack', 'HTML5 Canvas']
        },
        { 
            title: 'SpookEm', 
            img: 'spookem.png', 
            url: 'https://www.harveydelaney.com/repeatafterme',
            desc: 'A tile based horror/survival game made using Processing/Java.',
            tech: ['Java', 'Processing', 'Path Finding Algorithms']
        },
        { 
            title: 'Compounding Savings', 
            img: 'compounding-savings.png', 
            url: 'https://www.harveydelaney.com/compounding-savings',
            desc: 'A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.',
            tech: ['React', 'Redux', 'Sass', 'Webpack']
        },
        { 
            title: 'PooPlot', 
            img: 'pooplot.png', 
            url: 'https://www.harveydelaney.com/compounding-savings',
            desc: 'A hybrid mobile application to help people track, view and share poops.',
            tech: ['Angular 4', 'Ionic 3', 'Android', 'NodeJS', 'MongoDB']
        }
    ];

    projectList.forEach(function(project, index) {
        if (index % 2 === 0 || index === 0) {
            $("#projects .container").append(
                '</div> \
                <div class="row">'
            );
        }

        $("#projects .container").append(
           '<div class="col-md-6"> \
                <div class="project shadow-large"> \
                    <div class="bar"> \
                        <i class="left fa fa-circle" style="color:red"></i> \
                        <i class="left fa fa-circle" style="color:yellow"></i> \
                        <i class="left fa fa-circle" style="color:lawngreen"></i> \
                        <span class="center"> ' + project.title + '</span> \
                    </div> \
                    <a href="' + project.url + '"> \
                        <div class="img-wrap"> \
                            <img class="proj-image" src="images/' + project.img +'"/> \
                            <div class="proj-description"> \
                                <div class="col-md-8 col-md-offset-2"> \
                                    <h3>' + project.desc +'</h3> \
                                    <ul id="proj-tech-' + index +'"> \
                                    <ul> \
                                </div> \
                            </div> \
                        </div> \
                    </a> \
                </div> \
            </div>'
        );

        project.tech.forEach(function(tech) {
            $('#proj-tech-' + index).append(
                '<li>' + tech + '</li>'
            );
        });
    });

    /**
     * SKILLS
     */
    var iconList = [
        {name: 'html', extension: 'png'},
        {name: 'css3', extension: 'ico'},
        {name: 'sass', extension: 'png'},
        {name: 'js', extension: 'png'},
        {name: 'ts', extension: 'png'},
        {name: 'react', extension: 'png'},
        {name: 'angular', extension: 'png'},
        {name: 'nodejs', extension: 'png'},
        {name: 'cs', extension: 'png'},
        {name: 'java', extension: 'png'},
        {name: 'mongodb', extension: 'png'},
        {name: 'sql', extension: 'png'},
        {name: 'git', extension: 'svg'},
        {name: 'jenkins', extension: 'png'},
        {name: 'webpack', extension: 'png'}
    ]

    var timeout = 0;
    iconList.forEach(function(icon) {
        $("#skillList").append(
            '<li> \
                <div id="'+ icon.name + '" class="skill"> \
                    <img class="img" src="images/' + icon.name + '.' + icon.extension + '"/> \
                </div> \
            </li>');
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
