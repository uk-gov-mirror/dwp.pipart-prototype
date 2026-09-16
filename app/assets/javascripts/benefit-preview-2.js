const radios = document.forms["second-benefit"].elements["benefit-answer"];
const benefitp0 = document.getElementById("benefit-preview-0");
const benefitp4 = document.getElementById("benefit-preview-4");
const benefitp5 = document.getElementById("benefit-preview-5");
const benefitp6 = document.getElementById("benefit-preview-6");
const benefitp7 = document.getElementById("benefit-preview-7");
const benefitHint = document.getElementById("benefit-hint");


for(radio in radios) {
  radios[radio].onclick = function() {
    if (this.value == "ESA") {
      benefitp0.style.display = 'none';
      benefitp4.style.display = 'block';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitHint.style.display = 'block';
    }
     else if (this.value == "ESA old evidence") {
      benefitp0.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'block';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "ESA report used - 3") {
      benefitp0.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'block';
      benefitp7.style.display = 'none';
      benefitHint.style.display = 'block';
    } else if (this.value == "ESA Work Related Activity") {
      benefitp0.style.display = 'none';
      benefitp4.style.display = 'none';
      benefitp5.style.display = 'none';
      benefitp6.style.display = 'none';
      benefitp7.style.display = 'block';
      benefitHint.style.display = 'block';
    } 
  }
}