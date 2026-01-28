import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersStoreService } from '../../../data-access/src/lib/services/users-store.service';
import { UsersActionsService } from '../../../data-access/src/lib/services/users-actions.service';

@Component({
  selector: 'lib-users',
  imports: [RouterOutlet],
  templateUrl: './users.html',
  styleUrls: ['./users.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UsersStoreService, UsersActionsService],
})
export class Users {}
