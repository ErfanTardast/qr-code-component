document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleInfo");
    const additionalInfo = document.getElementById("additionalInfo");
  
    toggleButton.addEventListener("click", function () {
      additionalInfo.style.display = additionalInfo.style.display === "none" ? "block" : "none";
    });
  });
  