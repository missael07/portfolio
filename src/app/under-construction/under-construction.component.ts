import { Component } from '@angular/core';
import { style, transition, trigger, animate } from '@angular/animations';


@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('3000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class UnderConstructionComponent {

}
