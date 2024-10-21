import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ReferenceComponent } from '../reference/reference.component';
import {
  EmblaCarouselDirective,
  EmblaCarouselType,
  EmblaEventType,
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferenceComponent, EmblaCarouselDirective, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent implements AfterViewInit {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  private emblaApi?: EmblaCarouselType;
  public options = { loop: true };
  public plugins = [Autoplay()];
  public activeSlide: number | undefined = undefined;

  ngAfterViewInit(): void {
    this.emblaApi = this.emblaRef.emblaApi;
    if (this.emblaApi) {
      this.emblaApi.on('settle', () => {
        this.activeSlide = this.emblaApi?.selectedScrollSnap();        
      });
    }
    setTimeout(() => {
      if (this.emblaApi) {
        this.emblaApi.on('settle', () => {
          this.emblaApi?.plugins().autoplay.play();
        });
      }
    }, 4000);
  }

  readonly subscribeToEvents: EmblaEventType[] = [
    'init',
    'pointerDown',
    'pointerUp',
    'slidesChanged',
    'slidesInView',
    'select',
    'settle',
    'destroy',
    'reInit',
    'resize',
    'scroll',
  ];

  onEmblaChanged(event: EmblaEventType): void {
    // console.log(`Embla event triggered: ${event}`)
  }

  next() {
    this.emblaApi?.scrollNext();
  }

  prev() {
    this.emblaApi?.scrollPrev();
  }
}
