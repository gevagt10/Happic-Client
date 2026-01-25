import {Injectable} from '@angular/core';
import {LayoutStateService} from './layout-state.service';

@Injectable({providedIn: 'root'})
export class LayoutActionsService {
  constructor(private layoutStateService: LayoutStateService) {
  }

  changeSideBarState(): void {
    const state = this.layoutStateService.getSideBarStateValue();
    this.layoutStateService.updateSideBarState(!state);
  }
}
