function onHasChange(event) {
	alert('Page uurchlugdjee');
}

function onPageLoad(event) {
	alert('Page achaalagdjee');
}

window.addEventListener('haschange', onHasChange, false);
window.addEventListener('load', onPageLoad, false);