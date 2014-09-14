function onPageLoad(event) {
	var div = document.getElementById('logodesc');
	var data = div.innerHTML;
	for(var i = 0; i < data.length; i++){
		if(data[i] == '<'){
			while(data[i] != '>'){
				i++;
			}
			i++;
		}
		if(data[i] == 'o'){
			console.log(i);
			data[i] = 'a';
		}
	}
	console.log(data);
	div.innerHTML = data;
}

window.addEventListener('load', onPageLoad, false);