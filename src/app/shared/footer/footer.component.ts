import {Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  uiService = inject(UiService);

}
