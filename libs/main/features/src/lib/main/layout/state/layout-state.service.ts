import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutStateService {
  private isSideBarOpen$ = new BehaviorSubject<boolean>(true);

  getSideBarState(): Observable<boolean> {
    return this.isSideBarOpen$.asObservable();
  }

  updateSideBarState(value: boolean): void {
    this.isSideBarOpen$.next(value);
  }

  getSideBarStateValue(): boolean {
    return this.isSideBarOpen$.getValue();
  }

  reset(): void {
    this.isSideBarOpen$.next(true);
  }

}
