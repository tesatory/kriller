function onPageLoad(event) {
	var div = document.body;
	var data = div.innerHTML;
	var new_data = [];
	for(var i = 0; i < data.length; i++){
		while(data[i] == '<'){
			while(data[i] != '>'){
				new_data.push(data[i]);
				i++;
			}
			new_data.push(data[i]);
			i++;
		}
		switch(data[i]){
			case 'a':
				new_data.push('а');
				break;
			case 'b':
				new_data.push('б');
				break;
			case 'c':
				new_data.push('с');
				break;
			case 'd':
				new_data.push('д');
				break;
			case 'e':
				new_data.push('э');
				break;
			case 'f':
				new_data.push('ф');
				break;
			case 'g':
				new_data.push('г');
				break;
			default:
				new_data.push(data[i]);
		}
	}
	div.innerHTML = new_data.join('');
}

window.addEventListener('load', onPageLoad, false);