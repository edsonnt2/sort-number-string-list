export abstract class Sorter {
  abstract count: number;
  abstract compare(leftIndex:number, rightIndex:number):boolean;
  abstract swap(leftIndex:number, rightIndex:number):void;
  
  public sort():void {
    const { count } = this;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count-i-1; j++) {
        if(this.compare(j,j+1)){
          this.swap(j,j+1);
        }
      }
    }
  }
}
