$(document).ready(function () {
  $(".slider-1").owlCarousel({
    margin: 50,
    nav: true,
    dots: false,
    items: 3,
    loop: true,
    stagePadding: 50,
  });
  $(".slider-2").owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    items: 2,
    loop: true,
  });
  $(".scrolltop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $(document).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
    var y = $(this).scrollTop();
    if (y > 500) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
});

var flag = 0;
$(window).scroll(function () {
  if ($(window).scrollTop() >= $(".section-title").offset().top - 100) {
    if (flag == 0) {
      flag = 1;
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
          } else counter.innerText = target;
        };
        updateCounter();
      });
    }
  }
});
