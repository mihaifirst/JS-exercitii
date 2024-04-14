/*
	Sunt 5 jucatori la o masa de poker, le stim varstele (nu conteaza ordinea) [16, 15, 19, 14, 18].
	Vreau sa descopar cine e cel mai tanar. Afiseaza-i varsta in consola.

	INPUT [16, 15, 19, 14, 18]
	OUTPUT Cel mai tanar are 14 ani

	INPUT [16, 14, 17, 19, 11]
	OUTPUT Cel mai tanar are 14 ani

    BONUS.
        Afiseaza si cel mai batran jucator. 
*/

// let x = 5;

// x = 4;
// console.log(x)

let arr = [16, 15, 20, 19, 14];

let varstaMinima = Math.min(...arr);
console.log(varstaMinima);

//sau

function celMaiTanarJucator(varsta) {
  let varstaMinima = arr[0]; // 16
  for (let i = 0; i < varsta.length; i++) {
    // 		console.log(varsta[i] + " pozitia " + i)
    if (varstaMinima > varsta[i]) {
      varstaMinima = varsta[i];
    }
  }
  return varstaMinima;
}

console.log(celMaiTanarJucator(arr));
