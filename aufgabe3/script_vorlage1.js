"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 20;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Sören`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * 1. Ich heiße Sören
   2. Ich esse gerne Pizza
   3. Ich gehöre zur Generation Z
 */
// -- [Aufgabe 2]
let events = [
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
for (let i = 0; i < events.length; i++) {
    console.log(events[i]);
}
// Lösung c) 
let max = 0;
for (var i = 1; i < events.length; i++) {
    if (events[0][1][i] > events[0][1][i + 1])
        max = events[0][1][i];
    console.log("Das teuerste Ticket kostet:", max);
}
// Lösung d) ...
function name(s) {
    for (var i = 1; i < events.length; i++) {
        if (events[1][0][i] == s)
            return true;
        else
            return false;
    }
}
// Lösung e) 
function factorial(n) {
    let f = 1;
    let i = 1;
    while (i < n)
        f = f * ++i;
    return f;
}
// Lösung f) 
function teilbar() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0)
            console.log(i);
    }
}
// Lösung g)
class ConcertEvent {
    interpret;
    price;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    show() {
        console.log(this.interpret + this.price);
    }
}
// Lösung h)
var concerts;
concerts.push(new ConcertEvent("Mark Knopfler", 10.1));
concerts.push(new ConcertEvent("Pink Floyd", 15.9));
concerts.push(new ConcertEvent("Metallica", 20.1));
concerts.push(new ConcertEvent("Michael Bublé", 11.1));
concerts.push(new ConcertEvent("Dire Straits", 12.2));
concerts.push(new ConcertEvent("Mariah Carey", 1.1));
concerts.push(new ConcertEvent("Cat Stevens", 12.99));
concerts.push(new ConcertEvent("Mark Forster", 2.1));
concerts.push(new ConcertEvent("Helene Fischer", 3.1));
concerts.push(new ConcertEvent("Bee Gees", 25.2));
for (let l = 0; l < concerts.length; l++) {
    concerts[l].show;
}
//# sourceMappingURL=script_vorlage1.js.map