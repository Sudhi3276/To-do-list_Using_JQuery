$(document).ready(function () {
  // Alert message
  alert("Welcome to the website");

  // Add new todo item on Enter key press
  $(".todoinput").keypress(function (event) {
    if (event.which === 13) {
      var inputValue = $(this).val().trim();
      if (inputValue === "") return;
      $("ul").prepend(
        "<li><span class='left'><i class='fa fa-trash'></i></span>  " +
          inputValue +
          "<span class='right'><i class='fa fa-pencil'></i></span></li>"
      );
      $(this).val("");
    }
  });

  // Toggle input field on plus icon click
  $(".fa-plus").on("click", function () {
    $("input").slideToggle();
  });

  // Toggle completion of todo item on click
  $("ul").on("click", "span.text", function () {
    $(this).toggleClass("completed");
  });

  // Remove todo item on trash icon click
  $("ul").on("click", "span.left", function (event) {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
    event.stopPropagation();
  });

  // Edit todo item on pencil icon click
  $("ul").on("click", "span.right", function (event) {
    var parent = $(this).parent();
    var oldVal = parent.find("span.text").text();
    parent.html("<input type='text' class='editinput' value='" + oldVal + "'>");
    $(".editinput").keypress(function (e) {
      if (e.which === 13) {
        var newVal = $(this).val().trim();
        if (newVal === "") {
          parent.html(
            "<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  " +
              oldVal +
              "</span><span class='right'><i class='fa fa-pencil'></i></span>"
          );
        } else {
          parent.html(
            "<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  " +
              newVal +
              "</span><span class='right'><i class='fa fa-pencil'></i></span>"
          );
        }
      }
      e.stopPropagation();
    });
    event.stopPropagation();
  });
});
