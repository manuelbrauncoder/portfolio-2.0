import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";
import { TechnologiesComponent } from "../../components/technologies/technologies.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ReferencesComponent } from "../../components/references/references.component";
import { ContactComponent } from "../../components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, TechnologiesComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
