//a-component te genera una plantilla de componente
import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    standalone: false,
    template: `
    
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
    
    `,
})
export class CounterComponent{
    
    public counter:number = 10;

    increaseBy(value:number):void{
      this.counter+=value;
    }
  
    decreaseBy(value:number):void{
      this.counter-=value;
    }
  
    resetCounter():void{
      this.counter=10;
    }
}
