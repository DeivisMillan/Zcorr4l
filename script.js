var slider = document.getElementById("mySlider");

slider.addEventListener("input", function() {
  var sliderValue = parseInt(this.value);
  var sliderElement = document.querySelector(".slider");

  if (sliderValue >= 10) {
    sliderElement.style.backgroundImage = "linear-gradient(to right, #1fd8b6 " + sliderValue + "%, #e9eff6 " + sliderValue + "%)";
  } else {
    sliderElement.style.backgroundImage = "linear-gradient(to right, red 0%, #e9eff6 0%)";
  }

  if (sliderValue === 100) {
    window.location.href = "https://deivismillan.github.io/Carlos.Clt/";
  }
});



const checkbox = document.getElementById("visible");
const confirmaDiv = document.querySelector(".confirma");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    confirmaDiv.classList.add("blue");
  } else {
    confirmaDiv.classList.remove("blue");
  }
});

//Navegación

let isNavHiddenVisible = false;

    function toggleNavHidden() {
      const navHidden = document.querySelector('.navhidden');
      isNavHiddenVisible = !isNavHiddenVisible;

      if (isNavHiddenVisible) {
        navHidden.style.left = "0%";
        navHidden.style.backgroundColor = '#f5f9fb'; // Cambiar el color cuando es visible (puedes ajustar el color según tu preferencia)
      } else {
        navHidden.style.left = "-100%"; // Cambiar la posición para ocultar el menú
        navHidden.style.backgroundColor = "#f5f9fb"; // Volver al color original (puedes ajustar el color según tu preferencia)
      }
    }
