import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UsersActionsService } from '@happic/users/data-access';

@Component({
  selector: 'lib-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users implements OnInit {
  private usersActionsService = inject(UsersActionsService);
  ngOnInit(): void {
    this.usersActionsService.getUsers();
  }
}
