for (let i = 1; i<=10; i++){
  console.log(i);
}
console.log(`-------------------`);

for (let i = 1; i<=10; i++){
  console.log(`5 * ${i} = ${5*i}`);
}

console.log(`-------------------`);

let i = 1, sum = 0;

while (i<=10) {
  sum +=i;
  i++;
}
console.log(sum);
console.log(`-------------------`);

let j =10;

while(j>=1) {
  console.log(j);
  j--;
}

console.log(`-------------------`);

let k =1;

do {
  console.log(k);
  k++;
}while(k<5)

console.log(`-------------------`);
let l=5, fact = 1;

do {
  fact *= l;
  l--;
}while(l>=1)

console.log(fact);

console.log(`-------------------`);
for (let i=1; i<=5; i++) {
  console.log('*'.repeat(i));
}
console.log(`-------------------`);

for(let i=1; i<=10; i++) {
  if(i==5) continue;
  console.log(i);
}

console.log(`-------------------`);
for(let i=1; i<=10; i++) {
  if(i==7) break;
  console.log(i);
}
