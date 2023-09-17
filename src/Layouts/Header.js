import React from 'react'
import $ from 'jquery';
import jQuery from 'jquery'
function Header() {


    (function ($) {
        "use strict";

    $.fn.meanmenu = function (options) {
        alert('g')
        var defaults = {
                meanMenuTarget: $(this), // Target the current HTML markup you wish to replace
                meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
                meanMenuClose: "X", // single character you want to represent the close menu button
                meanMenuCloseSize: "18px", // set font size of close button
                meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
                meanRevealPosition: "right", // left right or center positions
                meanRevealPositionDistance: "0", // Tweak the position of the menu
                meanRevealColour: "", // override CSS colours for the reveal background
                meanScreenWidth: "480", // set the screen width you want meanmenu to kick in at
                meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
                meanShowChildren: true, // true to show children in the menu, false to hide them
                meanExpandableChildren: true, // true to allow expand/collapse children
                meanExpand: "+", // single character you want to represent the expand for ULs
                meanContract: "-", // single character you want to represent the contract for ULs
                meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
                onePage: false, // set to true for one page sites
                meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
                removeElements: "" // set to hide page elements
        };
        options = $.extend(defaults, options);

        // get browser width
        var currentWidth = window.innerWidth || document.documentElement.clientWidth;

        return this.each(function () {
                var meanMenu = options.meanMenuTarget;
                var meanContainer = options.meanMenuContainer;
                var meanMenuClose = options.meanMenuClose;
                var meanMenuCloseSize = options.meanMenuCloseSize;
                var meanMenuOpen = options.meanMenuOpen;
                var meanRevealPosition = options.meanRevealPosition;
                var meanRevealPositionDistance = options.meanRevealPositionDistance;
                var meanRevealColour = options.meanRevealColour;
                var meanScreenWidth = options.meanScreenWidth;
                var meanNavPush = options.meanNavPush;
                var meanRevealClass = ".meanmenu-reveal";
                var meanShowChildren = options.meanShowChildren;
                var meanExpandableChildren = options.meanExpandableChildren;
                var meanExpand = options.meanExpand;
                var meanContract = options.meanContract;
                var meanRemoveAttrs = options.meanRemoveAttrs;
                var onePage = options.onePage;
                var meanDisplay = options.meanDisplay;
                var removeElements = options.removeElements;

                //detect known mobile/tablet usage
                var isMobile = false;
                if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ) {
                        isMobile = true;
                }

                if ( (navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i)) ) {
                    // add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
                        $('html').css("overflow-y" , "scroll");
                }

                var meanRevealPos = "";
                var meanCentered = function() {
                    if (meanRevealPosition === "center") {
                        var newWidth = window.innerWidth || document.documentElement.clientWidth;
                        var meanCenter = ( (newWidth/2)-22 )+"px";
                        meanRevealPos = "left:" + meanCenter + ";right:auto;";

                        if (!isMobile) {
                            $('.meanmenu-reveal').css("left",meanCenter);
                        } else {
                            $('.meanmenu-reveal').animate({
                                    left: meanCenter
                            });
                        }
                    }
                };

                var menuOn = false;
                var meanMenuExist = false;


                if (meanRevealPosition === "right") {
                        meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
                }
                if (meanRevealPosition === "left") {
                        meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
                }
                // run center function
                meanCentered();

                // set all styles for mean-reveal
                var $navreveal = "";

                var meanInner = function() {
                        // get last class name
                        if ($($navreveal).is(".meanmenu-reveal.meanclose")) {
                                $navreveal.html(meanMenuClose);
                        } else {
                                $navreveal.html(meanMenuOpen);
                        }
                };

                // re-instate original nav (and call this on window.width functions)
                var meanOriginal = function() {
                    alert('jj')
                    $('.mean-bar,.mean-push').remove();
                    $(meanContainer).removeClass("mean-container");
                    $(meanMenu).css('display', meanDisplay);
                    menuOn = false;
                    meanMenuExist = false;
                    $(removeElements).removeClass('mean-remove');
                };

                // navigation reveal
                var showMeanMenu = function() {
                        var meanStyles = "background:"+meanRevealColour+";color:"+meanRevealColour+";"+meanRevealPos;
                        if (currentWidth <= meanScreenWidth) {
                        $(removeElements).addClass('mean-remove');
                            meanMenuExist = true;
                            // add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
                            $(meanContainer).addClass("mean-container");
                            $('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');

                            //push meanMenu navigation into .mean-nav
                            var meanMenuContents = $(meanMenu).html();
                            $('.mean-nav').html(meanMenuContents);

                            // remove all classes from EVERYTHING inside meanmenu nav
                            if(meanRemoveAttrs) {
                                $('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
                                    // First check if this has mean-remove class
                                    if ($(this).is('.mean-remove')) {
                                        $(this).attr('class', 'mean-remove');
                                    } else {
                                        $(this).removeAttr("class");
                                    }
                                    $(this).removeAttr("id");
                                });
                            }

                            // push in a holder div (this can be used if removal of nav is causing layout issues)
                            $(meanMenu).before('<div class="mean-push" />');
                            $('.mean-push').css("margin-top",meanNavPush);

                            // hide current navigation and reveal mean nav link
                            $(meanMenu).hide();
                            $(".meanmenu-reveal").show();

                            // turn 'X' on or off
                            $(meanRevealClass).html(meanMenuOpen);
                            $navreveal = $(meanRevealClass);

                            //hide mean-nav ul
                            $('.mean-nav ul').hide();

                            // hide sub nav
                            if(meanShowChildren) {
                                    // allow expandable sub nav(s)
                                    if(meanExpandableChildren){
                                        $('.mean-nav ul ul').each(function() {
                                                if($(this).children().length){
                                                        $(this,'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: '+ meanMenuCloseSize +'">'+ meanExpand +'</a>');
                                                }
                                        });
                                        $('.mean-expand').on("click",function(e){
                                                e.preventDefault();
                                                    if ($(this).hasClass("mean-clicked")) {
                                                            $(this).text(meanExpand);
                                                        $(this).prev('ul').slideUp(300, function(){});
                                                } else {
                                                        $(this).text(meanContract);
                                                        $(this).prev('ul').slideDown(300, function(){});
                                                }
                                                $(this).toggleClass("mean-clicked");
                                        });
                                    } else {
                                            $('.mean-nav ul ul').show();
                                    }
                            } else {
                                    $('.mean-nav ul ul').hide();
                            }

                            // add last class to tidy up borders
                            $('.mean-nav ul li').last().addClass('mean-last');
                            $navreveal.removeClass("meanclose");
                            $($navreveal).click(function(e){
                                e.preventDefault();
                        if( menuOn === false ) {
                                        $navreveal.css("text-align", "center");
                                        $navreveal.css("text-indent", "0");
                                        $navreveal.css("font-size", meanMenuCloseSize);
                                        $('.mean-nav ul:first').slideDown();
                                        menuOn = true;
                                } else {
                                    $('.mean-nav ul:first').slideUp();
                                    menuOn = false;
                                }
                                    $navreveal.toggleClass("meanclose");
                                    meanInner();
                                    $(removeElements).addClass('mean-remove');
                            });

                            // for one page websites, reset all variables...
                            if ( onePage ) {
                                $('.mean-nav ul > li > a:first-child').on( "click" , function () {
                                    $('.mean-nav ul:first').slideUp();
                                    menuOn = false;
                                    $($navreveal).toggleClass("meanclose").html(meanMenuOpen);
                                });
                            }
                    } else {
                        meanOriginal();
                    }
                };

                if (!isMobile) {
                        // reset menu on resize above meanScreenWidth
                        $(window).resize(function () {
                                currentWidth = window.innerWidth || document.documentElement.clientWidth;
                                if (currentWidth > meanScreenWidth) {
                                        meanOriginal();
                                } else {
                                    meanOriginal();
                                }
                                if (currentWidth <= meanScreenWidth) {
                                        showMeanMenu();
                                        meanCentered();
                                } else {
                                    meanOriginal();
                                }
                        });
                }

            $(window).resize(function () {
                        // get browser width
                        currentWidth = window.innerWidth || document.documentElement.clientWidth;

                        if (!isMobile) {
                                meanOriginal();
                                if (currentWidth <= meanScreenWidth) {
                                        showMeanMenu();
                                        meanCentered();
                                }
                        } else {
                                meanCentered();
                                if (currentWidth <= meanScreenWidth) {
                                        if (meanMenuExist === false) {
                                                showMeanMenu();
                                        }
                                } else {
                                        meanOriginal();
                                }
                        }
                });

            // run main menuMenu function on load
            showMeanMenu();
        });
};
})(jQuery);
  return (
    <div className="header position-relative">
    <div className="header__shape header__shape--h2 d-lg-none d-xl-block">
        <img className="shape--img" src="assets/images/shape/dot-line-shape.png" alt=""/>
    </div>
    <div className="container-fluid">
        <div className="header--box header--box--h2">
            <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12 col-md-8">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-8">
                            <div className="header--logo">
                                <a href="index.html"><img src="assets/images/service/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-4">
                            <div className="header--menu header--menu--h2 d-flex align-items-center">
                                <div className="header--menu__main">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="drop"><a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">Home One</a></li>
                                                    <li><a href="index-2.html">Home Two</a></li>
                                                    <li><a href="index-3.html">Home Three</a></li>
                                                    <li><a href="index-4.html">Home Four</a></li>
                                                    <li><a href="index-5.html">Home Five</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="about-details.html">About</a>
                                                <ul className="submenu">
                                                    <li><a href="about-details.html">About Details</a></li>
                                                    <li><a href="company-history.html">Company History</a></li>
                                                    <li><a href="why-choose-us.html">Why Choose Us</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="#">Services</a>
                                                <ul className="submenu">
                                                    <li><a href="business-solutions.html">Business Solutions</a>
                                                    </li>
                                                    <li><a href="cyber-security.html">Cyber Security</a></li>
                                                    <li><a href="it-solutions.html">IT Solutions</a></li>
                                                    <li><a href="software-dev.html">Software Dev</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="#">Case Study</a>
                                                <ul className="submenu">
                                                    <li><a href="case-study-01.html">Case Study One</a></li>
                                                    <li><a href="case-study-02.html">Case Study Two</a></li>
                                                    <li><a href="case-study-03.html">Case Study Three</a></li>
                                                    <li><a href="case-details.html">Case Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="drop"><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="blog-standard.html">Blog Standard</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="price.html">Pricing</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                    <li><a href="careers.html">Careers</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contacts.html">Contacts</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-lang header-lang--h2">
                                    <ul>
                                        <li><a href="#"><img src="assets/images/icon/flag.png" alt="" className="lang-flag"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 d-none d-xl-block">
                    <div className="header__right header__right--h2 d-flex align-items-center justify-content-end">
                        <div className="header--social d-none d-xl-block">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-google"></i></a></li>
                            </ul>
                        </div>
                        <div className="header--contacts header--contacts--h2 d-flex align-items-center ml-10">
                            <div className="header--contacts-icon">
                                <i className="fal fa-phone"></i>
                            </div>
                            <div className="header--contacts-number pl-10">
                                <h6>Phone Number</h6>
                                <span className="fw-500 white-color">+812 (345) 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mobile-menu"></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header