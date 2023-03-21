import { arcosHtml } from "./comida_plantillas/arcosHtml.js";
import { sunsHtml } from "./comida_plantillas/sunsHtml.js";
import { Oscars } from "./comida_plantillas/OscarsHtmls.js";
import { buga } from "./comida_plantillas/BugaHtml.js";
import { showMessage } from "./showMessage.js";


const checkBoxes = document.querySelectorAll(
  "input[type=checkbox][name=ubicacion]"
);

const accordionRef = document.querySelector(".accordion-contentf");

function hideAllExcept(value) {
  checkBoxes.forEach((checkbox) => {
    if (checkbox.value !== value) {
      checkbox.disabled = true;
    }
  });
}

function showAll() {
  checkBoxes.forEach((checkbox) => {
    checkbox.disabled = false;
  });
}

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    if (!e.target.checked) {
      showAll();
      return;
    }
    accordionRef.innerHtml = "";
    if (e.target.value === "arcos") {
      accordionRef.innerHTML = arcosHtml;
      showMessage('Has escogido el Hotel Arcos', 'success')
    } else if (e.target.value === "sunscape") {
      accordionRef.innerHTML = sunsHtml;
      showMessage('Has escogido el Hotel Sunscape', 'success')
    } else if (e.target.value === "oscar") {
      accordionRef.innerHTML = Oscars;
      showMessage('Has escogido Oscars Restaurant', 'success')
    } else if (e.target.value === "buga") {
      accordionRef.innerHTML = buga;
      showMessage('Has escogido el Hotel Buganvilias', 'success')

    }
    hideAllExcept(e.target.value);
    
  });
});
