"use strict";
// import { NumbersCollection } from './NumbersCollection' cliar interface para não importar
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection:number[]) {
    //   this.collection = collection;
    // }   
    // OR NEXT DOWN 
    function Sorter(collection /*Or NumbersCollection do import*/) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var count = this.collection.count;
        for (var i = 0; i < count; i++) {
            for (var j = 0; j < count - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
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
