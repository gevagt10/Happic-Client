import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButton {
  variant = input<'primary' | 'google' | 'secondary'>('primary');
  disabled = input<boolean>(false);
}
