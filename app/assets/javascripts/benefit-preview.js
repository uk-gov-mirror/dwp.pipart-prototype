const radios = document.forms["second-benefit"].elements["benefit-answer"];
const benefitp0 = document.getElementById("benefit-preview-0");
const benefitp1 = document.getElementById("benefit-preview-1");
const benefitp2 = document.getElementById("benefit-preview-2");
const benefitp3 = document.getElementById("benefit-preview-3");
const benefitHint = document.getElementById("benefit-hint");

for(radio in radios) {
  radios[radio].onclick = function() {
    if (this.value == "Carers") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'block';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "Carers - no print out") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'block';
      benefitp3.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "Carers - benefit and rate details") {
      benefitp0.style.display = 'none';
      benefitp1.style.display = 'none';
      benefitp2.style.display = 'none';
      benefitp3.style.display = 'block';
      benefitHint.style.display = 'block';
    }
  }
}