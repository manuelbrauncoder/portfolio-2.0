import { Component, OnInit } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxTypedWriterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {

  words: string[] = ['Manuel Braun'];
  showcursor = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showcursor = false;
    }, 5000);
  }

}
