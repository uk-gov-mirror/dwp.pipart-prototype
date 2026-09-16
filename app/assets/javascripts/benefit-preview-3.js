const radios = document.forms["second-benefit"].elements["benefit-answer"];
const benefitp0 = document.getElementById("benefit-preview-0");
const benefitp8 = document.getElementById("benefit-preview-8");
const benefitp9 = document.getElementById("benefit-preview-9");
const benefitp10 = document.getElementById("benefit-preview-10");
const benefitp11 = document.getElementById("benefit-preview-11");
const benefitHint = document.getElementById("benefit-hint");

for(radio in radios) {
  radios[radio].onclick = function() {
  if (this.value == "UC") {
      benefitp0.style.display = 'none';
      benefitp8.style.display = 'block';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "UC old evidence") {
      benefitp0.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'block';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "UC report used - 3") {
      benefitp0.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'block';
      benefitp11.style.display = 'none';
      benefitHint.style.display = 'block';
    } else {
      benefitp0.style.display = 'none';
      benefitp8.style.display = 'none';
      benefitp9.style.display = 'none';
      benefitp10.style.display = 'none';
      benefitp11.style.display = 'block';
      benefitHint.style.display = 'block';
    }
  }
}