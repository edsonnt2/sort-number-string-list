// import { NumbersCollection } from './NumbersCollection' cliar interface para não importar

interface Sortable{
  count: number;
  compare(leftIndex:number, rightIndex:number):boolean;
  swap(leftIndex:number, rightIndex:number):void;
}

export class Sorter {
  // collection: number[];
  // constructor(collection:number[]) {
  //   this.collection = collection;
  // }   
  // OR NEXT DOWN 

  constructor(private collection:Sortable /*Or NumbersCollection do import*/) {}

  public sort():void {
    const { count } = this.collection;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count-i-1; j++) {
        if(this.collection.compare(j,j+1)){
          this.collection.swap(j,j+1);
        }
      }
    }
  }
}


// const { length } = this.collection;
// for (let i = 0; i < length; i++) {
//   for (let j = 0; j < length-i-1; j++) {
//     if(this.collection[j]>this.collection[j+1]){
//       const leftHand = this.collection[j];
//       this.collection[j] = this.collection[j+1];
//       this.collection[j+1] = leftHand;
//     }
//   }
// }