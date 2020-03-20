import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Mostra NumbersCollection
const numbersCollection = new NumbersCollection([10, 3, -5, 0, 12, -7]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Mostra charactersCollection
const charactersCollection = new CharactersCollection("Edson");
charactersCollection.sort();
console.log(charactersCollection.data);

// Mostra LinkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

// Mostra mensagem aleatória hahahahas
const test = (): string => {
  return "Hello. This is a compilation typescript using tsc watch and nodemon !";
};

console.log(test());
