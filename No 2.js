function generate(jumlah){
		var karakter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

		var hasil = '';

		for(var i = 0; i < jumlah; i++){
			for(var j = 1; j <= 16; j++){
		        var random = Math.floor(Math.random() * 35);
		        if(j%4==0 && j != 16){
		           hasil += karakter[random] + '-';
		        } else {
		           hasil += karakter[random];
		        }
		        random = 0;
		    }

		    hasil += '\n';
	    }

        return hasil;
	}

	console.log(generate(3));