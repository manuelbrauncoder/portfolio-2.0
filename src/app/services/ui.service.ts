import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private scroller = inject(ViewportScroller);

  showSidebar = false;

  constructor() { }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

   /**
   * scroll to position with offset
   * @param section in DOM
   * @param offset in px
   */
   scrollToAnchor(section: string, offset: number = 0){
    let element = document.getElementById(section);
    if(element){
      let yPosition = element.getBoundingClientRect().top + window.scrollY + offset;
      this.scroller.scrollToPosition([0, yPosition]);
    }
  }
}
