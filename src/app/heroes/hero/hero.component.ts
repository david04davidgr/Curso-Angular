import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age:number = 45;
  public nameMayus:string = '';

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }
  
  changeName(){
    this.name = 'spiderman';
  }

  changeAge(){
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach( element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }
}
