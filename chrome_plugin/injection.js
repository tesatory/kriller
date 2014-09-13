
function onHasChange(event) {
	alert('Page uurchlugdjee');
}

function onPageLoad(event) {
	alert('Page achaalagdjee');
}

window.addEventListener('onhaschange', onHasChange, false);
window.addEventListener('onload', onPageLoad, false);