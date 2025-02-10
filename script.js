document.getElementById("hideButton").addEventListener("click", function () {
  var brandButtons = document.querySelectorAll(".brand-button");
  brandButtons.forEach(function (button) {
    button.style.display = button.style.display === "none" ? "flex" : "none";
  });
});
