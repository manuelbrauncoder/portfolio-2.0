import { animate, style, transition, trigger } from "@angular/animations";


export const fadeIn = trigger('fadeIn', [
    transition(':enter', [style({ opacity: '0' }), animate('300ms ease-in-out', style({ opacity: '1' }))]),
    transition(':leave', [style({ opacity: '1' }), animate('300ms ease-in-out', style({ opacity: '0' }))]),
]);

export const slideIn = trigger('slideIn', [
    transition(':enter', [style({ transform: 'translateX(400px)' }), animate('225ms ease', style({ transform: 'translateX(0)' }))]),
    transition(':leave', [style({ transform: 'translateY(0)', opacity: '1' }), animate('225ms ease', style({ transform: 'translateY(-400px)', opacity: '0' }))]),
]);

export const slideRight = trigger('slideRight', [
    transition(':enter', [style({ transform: 'translate(200%, -50%)' }), animate('300ms ease-in-out', style({ transform: 'translate(0, -50%)' }))]),
    transition(':leave', [style({ transform: 'translate(0, -50%)' }), animate('300ms ease-in-out', style({ transform: 'translate(200%, -50%)' }))]),
]);

