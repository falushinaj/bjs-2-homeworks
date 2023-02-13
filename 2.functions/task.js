// "use strict"

// Задача 1

function getArrayParams(...arr) {
  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;
  if (arr.length === 0) {
    return 0; 
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      } 
      if (arr[i] > max) {
          max = arr[i];
      } 
      sum += arr[i];
  }
  let avg = (sum / arr.length).toFixed(2);  
  return { min: min, max: max, avg: avg };
};
// console.log(getArrayParams(-99, 99, 10)); 
// console.log(getArrayParams(1, 2, 3, -100, 10));  
// console.log(getArrayParams(5));  

// Задача 2

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];  
  };
  return sum;
};
// console.log(summElementsWorker()); 
// console.log(summElementsWorker(10, 10, 11, 20, 10)); 

function differenceMaxMinWorker(...arr) {
  let min = Infinity, 
  max = -Infinity,
  dif = 0; 
  if (arr.length === 0) {
    return 0; 
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      } 
      if (arr[i] > max) {
          max = arr[i];
      }   
  }
  dif = Math.abs(max - min);
  return dif;
}
// console.log(differenceMaxMinWorker()); 
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0; 
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return (sumEvenElement - sumOddElement);
}
// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0; 
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
  }
  return (sumEvenElement / countEvenElement);
}
// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


// Задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }; 
  };
  return maxWorkerResult;
};

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72

// function makeWork (arrOfArr, func) {
//   let maxWorkerResult = -Infinity;
//   for (let i = 0; i < arrOfArr.length; i++) {
//     if (func(...arrOfArr[i]) > maxWorkerResult) {
//       maxWorkerResult = func(...arrOfArr[i]);
//     }; 
//   };
//   return maxWorkerResult;
// };