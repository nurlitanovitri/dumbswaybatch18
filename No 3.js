function urut(array){
		var panjang = [];
		var hasil = [];
		var hasilAkhir = [];

		for(var i = 0; i < array.length; i++){
           panjang[i] = array[i].length;
		}
		var urut = panjang.sort();
		for(var i = 0; i < array.length; i++){
			for(var j = 0; j < array.length; j++){
                if(urut[i] == array[j].length){
                	hasil[i] = array[j];
                }
			}
		}

		for(var i = 0; i < array.length; i++){
			hasilAkhir[i] = hasil[i].sort();
		}

		return hasilAkhir;
	}

	console.log(urut([['g','h','i','j'],['a','c','b','e','d'],['g','e','f']]))