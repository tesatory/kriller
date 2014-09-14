function onPageLoad(event) {
	var div = document.getElementById('logodesc');
	var data = div.innerHTML;
	var new_data = [];
	for(var i = 0; i < data.length; i++){
		if(data[i] == '<'){
			while(data[i] != '>'){
				new_data.push(data[i]);
				i++;
			}
			new_data.push(data[i]);
			i++;
		}
		if(data[i] == 'o'){
			new_data.push('a');
		}
	}
	div.innerHTML = new_data.join('');
}

window.addEventListener('load', onPageLoad, false);