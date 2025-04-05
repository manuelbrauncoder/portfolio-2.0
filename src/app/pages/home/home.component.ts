import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { TechnologiesComponent } from "../../components/technologies/technologies.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
    selector: 'app-home',
    imports: [HeroComponent, AboutMeComponent, TechnologiesComponent, ContactComponent, ProjectsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
