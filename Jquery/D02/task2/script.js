$("#move").click(function () {
  $("#car").animate(
    { left: "1250px" },
    {
      duration: 4000,

      step: function (now) {
        $("#info").text(
          '<img src="12.gif" style="left: ' + Math.round(now) + 'px">',
        );
      },
    },
  );
});
