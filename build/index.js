"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Mostra NumbersCollection
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 12, -7]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Mostra charactersCollection
var charactersCollection = new CharactersCollection_1.CharactersCollection("Edson");
charactersCollection.sort();
console.log(charactersCollection.data);
// Mostra LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
// Mostra mensagem aleatória hahahahas
var test = function () {
    return "Hello. This is a compilation typescript using tsc watch and nodemon !";
};
console.log(test());