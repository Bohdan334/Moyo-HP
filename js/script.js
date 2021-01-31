$(document).ready(function () {
  $(".slider").slick({
    dots: true,
  });
});

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let blockId = $(this).data("scroll");
  let blockOffset = $(blockId).offset().top;

  $("html, body").animate(
    {
      scrollTop: blockOffset,
    },
    500
  );
});
