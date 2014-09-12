var theText = document.body.innerHTML;
// Replace words
theText = theText.replace("мэдээ", "Х");
theText = theText.replace("After", "Daraa");
theText = theText.replace("Mendbayar", "Menduushka");

document.body.innerHTML = theText;
