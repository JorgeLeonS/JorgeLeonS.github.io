! function(e) {
    "use strict";
    e(".page-scroll").on("click", function(a) {
        var s = e(this).find("a");
        e("html, body").stop().animate({
            scrollTop: e(s.attr("href")).offset().top
        }, 1250, "easeInOutExpo"), a.preventDefault()
    }), e(".background-image-wrapper").each(function() {
        var a = e(this).children("img").attr("src");
        e(this).css("background", 'url("' + a + '")').css("background-position", "initial").css("opacity", "1")
    }), e("#skills .skill-bar").each(function() {
        var a = e(this).attr("data-width");
        e(this).addClass("skill-bar-" + a), e(this).find(".skill-tip").text(a + "%")
    }), e("#skill-dots .skill").each(function() {
        for (var a = e(this).find(".skill-progress").attr("data-score"), s = "", t = 0; t < a; t++) s += "<i class='fa active wow'></i>";
        for (t = a; t < 10; t++) s += "<i class='fa wow'></i>";
        e(this).find(".skill-progress").html(s)
    }), e("body").scrollspy({
        target: ".nav-container",
        offset: 50
    }), (new WOW).init(), e("#TopMenu").affix({
        offset: {
            top: 80
        }
    }), e(window).on("load", function(t) {
        e(".loader-wrapper").fadeOut("slow"), e("#youtubeVideo").YTPlayer(), e("a[data-gal^='prettyPhoto']").prettyPhoto({
            hook: "data-gal",
            social_tools: !1,
            deeplinking: !1,
            animation_speed: "normal",
            theme: "dark_square",
            slideshow: 3e3,
            autoplay_slideshow: !1
        }), a.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            },
            masonry: {
                gutter: 10,
                itemSelector: ".item",
                columnWidth: 4
            }
        }), s.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            },
            masonry: {
                itemSelector: ".item",
                columnWidth: 0
            }
        }), e("form[name='emailSubmission']").validate({
            rules: {
                name: {
                    required: !0,
                    minlength: 3
                },
                email: {
                    required: !0,
                    email: !0
                },
                message: "required"
            },
            messages: {
                name: "Please enter your Name",
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address"
                },
                message: "Please enter your comments"
            },
            submitHandler: function(a) {
                var s = e(a),
                    t = e("#successMessage"),
                    i = e("#errorMessage"),
                    r = e(this.submitButton);
                r.button("loading"), e.ajax({
                    type: "POST",
                    url: s.attr("action"),
                    data: {
                        name: s.find("#name").val(),
                        email: s.find("#email").val(),
                        message: s.find("#message").val()
                    }
                }).always(function(e, a, n) {
                    if ("success" == e.response) return t.removeClass("hidden"), i.addClass("hidden"), s.find(".minimal").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(), void r.button("reset");
                    i.removeClass("hidden"), t.addClass("hidden"), s.find(".has-success").removeClass("has-success"), r.button("reset")
                })
            }
        }), e("form[name='emailSubmission01']").validate({
            rules: {
                name: {
                    required: !0,
                    minlength: 3
                },
                email: {
                    required: !0,
                    email: !0
                },
                subject: "required",
                message: "required"
            },
            messages: {
                name: "Please enter your Name",
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address"
                },
                subject: "Please enter your subject",
                message: "Please enter your comments"
            },
            submitHandler: function(a) {
                var s = e(a),
                    t = e("#successMessage"),
                    i = e("#errorMessage"),
                    r = e(this.submitButton);
                r.button("loading"), e.ajax({
                    type: "POST",
                    url: s.attr("action"),
                    data: {
                        name: s.find("#name").val(),
                        email: s.find("#email").val(),
                        subject: s.find("#subject").val(),
                        message: s.find("#message").val()
                    }
                }).always(function(e, a, n) {
                    if ("success" == e.response) return t.removeClass("hidden"), i.addClass("hidden"), s.find(".minimal").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove(), void r.button("reset");
                    i.removeClass("hidden"), t.addClass("hidden"), s.find(".has-success").removeClass("has-success"), r.button("reset")
                })
            }
        }), e("#ri-grid").gridrotator({
            rows: 3,
            columns: 3,
            animType: "fadeInOut",
            animSpeed: 1e3,
            interval: 600,
            step: 1,
            w1024: {
                rows: 3,
                columns: 3
            },
            w768: {
                rows: 3,
                columns: 3
            },
            w600: {
                rows: 3,
                columns: 3
            },
            w480: {
                rows: 3,
                columns: 3
            },
            w320: {
                rows: 3,
                columns: 3
            },
            w240: {
                rows: 3,
                columns: 3
            }
        })
    });
    var a = e(".portfolioContainer");
    e(".portfolioFilter a").on("click", function() {
        e(".portfolioFilter .current").removeClass("current"), e(this).addClass("current");
        var s = e(this).attr("data-filter");
        return a.isotope({
            filter: s,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
    var s = e(".isotope").isotope({
            itemSelector: ".element-item",
            layoutMode: "masonry",
            getSortData: {
                name: ".name",
                symbol: ".symbol",
                number: ".number parseInt",
                category: "[data-category]",
                weight: function(a) {
                    var s = e(a).find(".weight").text();
                    return parseFloat(s.replace(/[\(\)]/g, ""))
                }
            }
        }),
        t = {
            numberGreaterThan50: function() {
                var a = e(this).find(".number").text();
                return parseInt(a, 10) > 50
            },
            ium: function() {
                return e(this).find(".name").text().match(/ium$/)
            }
        };
    e("#filters").on("click", "button", function() {
        var a = e(this).attr("data-filter");
        a = t[a] || a, s.isotope({
            filter: a
        })
    }), e("#sorts").on("click", "button", function() {
        var a = e(this).attr("data-sort-by");
        s.isotope({
            sortBy: a
        })
    }), e(".button-group").each(function(a, s) {
        var t = e(s);
        t.on("click", "button", function() {
            t.find(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked")
        })
    });
    var i = 9,
        r = s.data("isotope");

    function n(a) {
        s.find(".hidden").removeClass("hidden");
        var t = r.filteredItems.slice(a, r.filteredItems.length).map(function(e) {
            return e.element
        });
        e(t).addClass("hidden"), s.isotope("layout"), 0 == t.length ? jQuery("#load-more").hide() : jQuery("#load-more").show()
    }
    n(9), s.after('<div class="load-more"><button class="btn btn-transparent" id="load-more"> Load more</button></div>'), e("#load-more").on("click", function() {
        e("#filters").data("clicked") ? (i = 9, e("#filters").data("clicked", !1)) : i = i, n(i += 9)
    }), e("#filters").on("click", function() {
        e(this).data("clicked", !0), n(9)
    }), e(document).ready(function(a) {
        var s = 0;
        e(document).scroll(function() {
            e(".technical").height() - e(window).scrollTop() < -300 && (0 == s && e(".chart").easyPieChart({
                easing: "easeOutBounce",
                onStep: function(a, s, t) {
                    e(this.el).find(".percent").text(Math.round(t))
                }
            }), s++)
        })
    }), e(".owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !1,
        dots: !0,
        smartSpeed: 1e3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    })
}(jQuery);