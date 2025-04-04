/**
 * service file for handling ui actions
 */

import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private scroller = inject(ViewportScroller);
  private router = inject(Router);

  showSidebar = false;

  constructor() { }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

   /**
   * scroll to position with offset
   * @param section in DOM
   * @param offset in px (default = 0)
   */
   scrollToAnchor(section: string, offset: number = 0){
    let element = document.getElementById(section);
    if(element){
      let yPosition = element.getBoundingClientRect().top + window.scrollY + offset;
      this.scroller.scrollToPosition([0, yPosition]);
    }
  }

  /**
   * Scroll to the top of the page
   */
  scrollToTop() {
    this.scroller.scrollToPosition([0, 0])
  }


  /**
   * navigate to component and scroll to top after timeout
   * @param component to navigate
   * @param position offset
   */
  goToComponent(component: string, position: number){
    this.router.navigate([component]).then(() => {
      setTimeout(() => {
        window.scrollTo({top: position});
      }, 50);
    });

  }
}
