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
        }, (Math.abs(window.pageYOffset - $(heading).offset().top) / 1) / 6);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 250);
    });
    
    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 250);
    });

    /**
     * WORK EXPERIENCE
     */
    $('#experience-timeline').each(function() {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function() {
            switch($(this).data('style')){
                case "cba":
                    $(this).addClass('vtimeline-content').wrap('<div data-icon="cba" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                    break;
                case "dod":
                    $(this).addClass('vtimeline-content').wrap('<div data-icon="dod" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
                    break;
                case "anu":
                    $(this).addClass('vtimeline-content').wrap('<div data-icon="anu" class="vtimeline-point"><div class="vtimeline-block"></div></div>');
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
            title: 'Crypto Coaster', 
            img: 'crypto-coaster.jpg', 
            url: 'https://www.harveydelaney.com/crypto-coaster',
            desc: 'A simple web app that provides real time updates to cryptocurrency prices using their respective mascots.',
            tech: ['JavaScript', 'Web Sockets', 'JQuery']
        },
        { 
            title: 'Reddit Sentiment Analyser', 
            img: 'reddit-sa.jpg', 
            url: 'https://www.harveydelaney.com/reddit-sa',
            desc: 'Allows users to easily and quickly get a summary of the overall positive and negative sentiment of a comment thread.',
            tech: ['JavaScript', 'Sass', 'Browserify', 'JQuery', 'NodeJS']
        },
        { 
            title: 'Compounding Savings', 
            img: 'compounding-savings.jpg', 
            url: 'https://www.harveydelaney.com/compounding-savings',
            desc: 'A web application aimed at informing the potential compounding interest benefits from not buying non-essential items.',
            tech: ['React', 'Redux', 'Sass', 'Webpack']
        },
        { 
            title: 'PooPlot', 
            img: 'pooplot.jpg', 
            url: 'https://www.harveydelaney.com/pooplot',
            desc: 'A hybrid mobile application to help people track, view and share poops.',
            tech: ['Angular 4', 'Ionic 3', 'Android', 'NodeJS', 'MongoDB']
        },
        { 
            title: 'Bruce Hall VR', 
            img: 'bruce-hall-vr.jpg', 
            url: 'https://www.harveydelaney.com/bruce-hall-vr',
            desc: 'A simple tour of the old Bruce Hall before being knocked down - (project in progress)',
            tech: ['JavaScript', 'JQuery', 'Pannellum']
        },
        { 
            title: 'Repeat After Me', 
            img: 'repeat-after-me.jpg', 
            url: 'https://www.harveydelaney.com/repeatafterme',
            desc: 'A simple Simon Says clone made using HTML5 Canvas + Typescript',
            tech: ['JavaScript', 'TypeScript', 'Webpack', 'HTML5 Canvas']
        },
        { 
            title: 'SpookEm', 
            img: 'spookem.png', 
            url: 'https://www.harveydelaney.com/',
            desc: 'A tile based horror/survival game made using Processing/Java. (Demo not available)',
            tech: ['Java', 'Processing', 'Path Finding Algorithms']
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
                            <img class="proj-image" src="images/' + project.img +'" alt="Harvey Delaney\'s ' + project.title + ' Project"/> \
                            <div class="proj-description"> \
                                <div class="text-container"> \
                                    <h1>' + project.title + '\
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
        { name: 'html5', description: 'HTML 5'},
        { name: 'css3', description: 'CSS 3' },
        { name: 'sass', description: 'Sass'},
        { name: 'javascript', description: 'JavaScript' },
        { name: 'typescript', description: 'TypeScript'},
        { name: 'jquery', description: 'JQuery'},
        { name: 'react', description: 'React' },
        { name: 'angularjs', description: 'Angular 2+'},
        { name: 'jasmine', description: 'Jasmine'},
        { name: 'webpack', description: 'Webpack'},
        { name: 'grunt', description: 'Grunt'},
        { name: 'gulp', description: 'Gulp'},
        { name: 'nodejs', description: 'Node'},
        { name: 'csharp', description: 'C#' },
        { name: 'java', description: 'Java' },
        { name: 'mongodb', description: 'MongoDB'},
        { name: 'postgresql', description: 'PostgreSQL'},
        { name: 'git', description: 'Git'},
        { name: 'nginx', description: 'Nginx'},
        { name: 'visualstudio', description: 'Visual Studio'}
        // { name: 'jenkins', extension: 'png'},
    ]

    var timeout = 0;
    iconList.forEach(function(icon) {
        $("#skillList").append(
        '<li> \
            <i class="devicon-' + icon.name + '-plain"></i> \
            <span>' + icon.description + '</span> \
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