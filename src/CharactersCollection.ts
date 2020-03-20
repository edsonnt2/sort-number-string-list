import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data:string) {
    super();
  }

  get count():number{
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex].toLowerCase()>this.data[rightIndex].toLowerCase(); //String pode ser separada como array
    //OR return this.data.toLowerCase().charCodeAt(leftIndex)>this.data.toLowerCase().charCodeAt(rightIndex);
  }

  public swap(leftIndex: number, rightIndex:number): void {
    const characters = this.data.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex]= leftHand;
    this.data = characters.join('');
  }

}