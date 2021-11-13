// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age: number = 20;

/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName: string = `Sören`;

function func1(age: number): number {
  return 2021 - age;
}

let output: string = func2(firstName);

function func3(meal?: string): string {
  console.log(`Ich esse gerne ${meal || "Pizza"}.`);
  return func1(age) > 1995
    ? `Ich gehöre zur Generation Z`
    : `Ich gehöre zur Generation Y`;
}

console.log(output);

function func2(name: string): string {
  console.log(`Ich heiße ${name}.`);
  return func3();
}

/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * 1. Ich heiße Sören
   2. Ich esse gerne Pizza
   3. Ich gehöre zur Generation Z
 */

// -- [Aufgabe 2]

let events: any[][] = [
  ["Mark Knopfler", 10.1],
  ["Pink Floyd", 15.9],
  ["Metallica", 20.1],
  ["Michael Bublé", 11.1],
  ["Dire Straits", 12.2],
  ["Mariah Carey", 1.1],
  ["Cat Stevens", 12.99],
  ["Mark Forster", 2.1],
  ["Helene Fischer", 3.1],
  ["Bee Gees", 25.2],
];

// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN

// Lösung a) 
console.log("Die länge beträgt:", events.length);

// Lösung b) 
for (let i: number = 0; i < events.length; i++) {
  console.log(events[i] [0], events [i] [1]);
}

// Lösung c) 
function maxPrice(m: any[][]): number{
  let result = 0;
  for (var i = 1; i < m.length; i++){
if (m[i] [1] > result){
  result = m [i] [1]; 
}
  }
  return result;
}
 let max = maxPrice(events);
console.log(max);



// Lösung d) ...
function namesuchen (s: any[] [], interpret:  string): boolean {
  for (var i = 1; i < s.length; i++) {
    if (s[i][0] == interpret){
    return true;
  }
}
return false;
}

console.log(namesuchen(events, "Michael Bublé"));

// Lösung e) 
function factorial(n: number) { 
 let f: number = 1;  
 let i: number = 1;  
 while (i < n)  
          f = f * ++i ; 
 return f; 
} 

// Lösung f) 
function teilbar() {
  let counter: number = 0;
  for (let i: number = 0; i <= 100; i++) {
    if (i % 3 == 0)
    counter++;
    console.log(i);
  }  
  console.log(" Der Count ist:", counter);
}


// Lösung g)
class ConcertEvent {
interpret: string;

price: number;

constructor(interpret: string, price: number){
  this.interpret = interpret;
  this.price = price;
}

show(){
  console.log(this.interpret + this.price);
}
}


// Lösung h)
var concerts: ConcertEvent[] = []; 
concerts.push(new ConcertEvent ("Mark Knopfler", 10.1));
concerts.push(new ConcertEvent ("Pink Floyd", 15.9));
concerts.push(new ConcertEvent ("Metallica", 20.1));
concerts.push(new ConcertEvent ("Michael Bublé", 11.1));
concerts.push(new ConcertEvent ("Dire Straits", 12.2));
concerts.push(new ConcertEvent ("Mariah Carey", 1.1));
concerts.push(new ConcertEvent ("Cat Stevens", 12.99));
concerts.push(new ConcertEvent ("Mark Forster", 2.1));
concerts.push(new ConcertEvent ("Helene Fischer", 3.1));
concerts.push(new ConcertEvent ("Bee Gees", 25.2));

for (let l = 0; l < concerts.length; l++){
 console.log(concerts[l].show());

}




