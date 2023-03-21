const items2 = document.querySelectorAll('.accordionf button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items2.length; i++) {
    items2[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items2.forEach((item) => item.addEventListener('click', toggleAccordion));
