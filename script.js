// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/
// 사용자 객체들

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

// 상품 가격 및 배송비
const prices = [50, 30, 5];
const shippingCost = 50;

// 현재 사용자 (이 경우에는 Marco)
const currentUser = marco;

// 사용자들의 배열
const users = [marco, paul, amy];
const ambassadorArray = [];

// 총 비용을 계산하는 함수
function calculateTotalCost(prices, isAmbassador) {
  const cartCost = prices.reduce((acc, price) => acc + price, 0);

  // 대사관인 경우 30% 할인 적용
  const discountedCost = isAmbassador ? cartCost * 0.7 : cartCost;

  // 카트 비용이 100 유로 미만인 경우 배송비 추가
  return discountedCost + (cartCost <= 100 ? shippingCost : 0);
}

// 각 사용자에 대한 정보를 출력하고 대사관인 경우 배열에 추가
users.forEach((user) => {
  if (user.isAmbassador) {
    ambassadorArray.push(user);
  }

  console.log(`${user.name} ${user.lastName} ${user.isAmbassador ? 'is an ambassador.' : 'is not an ambassador.'}`);
});

// 현재 사용자의 대사관 여부를 기반으로 총 비용 계산
const totalCost = calculateTotalCost(prices, currentUser.isAmbassador);

// 총 비용 및 대사관 정보 출력
console.log(`${currentUser.name} ${currentUser.lastName} - The total price is ${totalCost}`);
console.log("Ambassador:", JSON.stringify(ambassadorArray, null, 0));










//* ARRAY:
//? Ex.1 (Easy) - Realizzare un programma che costruisca un array di 20 elementi. Ogni elemento dev'essere pari al proprio indice nell'array.
// Es. [0, 1, 2, 3, 4, 5 ... 19]
let array = [];
// 숫자 20보다 작을때까지 1씩 더하며 나열해야하니까..
for (let i = 0; i <20; i++) {   
// 그 나열된 숫자들을  i 에 집어넣어주셔요
  array.push(i);
}
console.log(array);





//? Ex.2 (Medium) - Realizzare un programma che, dato un array di numeri interi, stampi in console la media di tutti i valori.
// N.B. Utilizza solo i concetti visti a lezione, niente scorciatoie!
// Given an array of integers
const numbers = [5, 10, 15, 20, 25];
// Initialize sum to zero 일단 0 으로 초기값을줬음
let sum = 0;
// Calculate the sum of all values in the array
for (let i = 0; i < numbers.length; i++) {

  sum += numbers[i];
}
// Calculate the average 
const average = sum / numbers.length;
// Print the average to the console
console.log(average);





//? Ex.3 (Medium) - Realizzare un programma che rimuova i multipli dispari di 3 dall'array riportato sotto.
// N.B. 18 è un multiplo pari di 3, 21 è un multiplo dispari di 3.
// let array = [20, 31, 15, 78, 48, 27, 61, 51]; 
let twoArray = [20, 31, 15, 78, 48, 27, 61, 51];
let filteredArray = twoArray.filter(function(arrayNumbers) {
  return arrayNumbers % 2 !== 1 || arrayNumbers % 3 !== 0;
});
console.log(filteredArray);
