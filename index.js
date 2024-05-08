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

// let arr = [16, 15, 20, 19, 14];

// let varstaMinima = Math.min(...arr);
// console.log(varstaMinima);

// //sau

// function celMaiTanarJucator(varsta) {
//   let varstaMinima = arr[0]; // 16
//   for (let i = 0; i < varsta.length; i++) {
//     // 		console.log(varsta[i] + " pozitia " + i)
//     if (varstaMinima > varsta[i]) {
//       varstaMinima = varsta[i];
//     }
//   }
//   return varstaMinima;
// }

// console.log(celMaiTanarJucator(arr));

// Write a Js program to extract the first halh of a string of even length

// const firstHalf = str => str.slice(0, str.length/2) {
//     console.
// }'

// Write a JS program to concatenate two strings except their first character

// const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1)

// console.log(concatenate("hello", "world"))

// Write a JS program to find out which one is nearest to 100

// const value = (a,b) => (100-a) < (100-b) ?  a: b

// console.log(value(10, 20))

// 2. Calculate the number of visiting birds in a specific week
// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

// birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
// birdsInWeek(birdsPerDay, 2);
// // => 12

// function birdsInWeek(birdsPerDay, week) {
//   const startIndex = (week - 1) * 7;
//   const endIndex = startIndex + 7;
//   return birdsPerDay.slice(startIndex, endIndex).reduce((a, b) => a + b, 0);
// }

// 3. Fix a counting mistake
// You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

// Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.

// birdsPerDay = [2, 5, 0, 7, 4, 1];
// fixBirdCountLog(birdsPerDay);

// function fixBirdCountLog(birdsPerDay) {
//   for (let i = 0; i < birdsPerDay.length; i++) {
//     if (i % 2 === 0) {
//       birdsPerDay[i]++;
//     }
//   }
//   return birdsPerDay;
// }

// check if a word is a palindrom using 2 pointers

// function palindr(target) {
//   let left = 0;
//   let right = target.length - 1;

//   while (left < right) {
//     if (target[left] === target[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindr("aha"));
// console.log(palindr("aerisirea"));
// console.log(palindr("masina"));

// check what index integers from the array are summed using 2 pointers
// var checkForTarget = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let curr = nums[left] + nums[right];
//     if (curr == target) {
//       return [nums.indexOf(nums[left]), nums.indexOf(nums[right])];
//     }

//     if (curr > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return false;
// };

// console.log(checkForTarget([1, 2, 4, 6, 8, 9, 14, 15], 3));

// Concatenate 2 arrays

// function sortare(arr1, arr2) {
//   let arrTotal = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       arrTotal.push(arr1[i]);
//       i++;
//     } else {
//       arrTotal.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     arrTotal.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     arrTotal.push(arr2[j]);
//     j++;
//   }

//   return arrTotal;
// }

// console.log(sortare([1, 2, 3, 5], [2, 3, 7, 9]));
