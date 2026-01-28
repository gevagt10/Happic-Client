import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthActionsService } from '@happic/auth/data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private authActionsService = inject(AuthActionsService);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onLoginClick(): void {
    // this.authActionsService.login(this.loginForm.value);
    this.authActionsService.login({
      email: 'gevagt@gmail.com',
      password: '123456',
    });
  }
}
