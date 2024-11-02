/**
 * service file for Angular cdk Breakpoint Observer
 */

import { DestroyRef, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  mobile = `(max-width: 899px)`;
  handsetLandscape = Breakpoints.HandsetLandscape;

  isMobile = false;
  isHandsetLandscape = false;

  breakpoints = [this.mobile, this.handsetLandscape];

  constructor(
    private responsive: BreakpointObserver,
    private destroyRef: DestroyRef
  ) {}

  initObserver() {
    this.responsive
      .observe(this.breakpoints)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.observeMobile(state);
        this.observeHandsetLandscape(state);
      });
  }

  observeMobile(state: BreakpointState){
    if (state.breakpoints[this.mobile]) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  observeHandsetLandscape(state: BreakpointState) {
    if (state.breakpoints[Breakpoints.HandsetLandscape]) {
      this.isHandsetLandscape = true;
    } else {
      this.isHandsetLandscape = false;
    }
  }
}
