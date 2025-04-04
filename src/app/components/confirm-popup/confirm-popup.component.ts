import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-confirm-popup',
    imports: [],
    templateUrl: './confirm-popup.component.html',
    styleUrl: './confirm-popup.component.scss'
})
export class ConfirmPopupComponent {
    @Input() message: String = ""
}
