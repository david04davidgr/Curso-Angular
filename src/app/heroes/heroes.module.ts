import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListHeroComponent } from "./list/list.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListHeroComponent
    ],
    exports: [
        HeroComponent,
        ListHeroComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule{}