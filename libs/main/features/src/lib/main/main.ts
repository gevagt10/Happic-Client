import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'lib-main',
  imports: [RouterOutlet, AsideComponent, HeaderComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
//https://geeksui.codescandy.com/geeks/pages/dashboard/dashboard-analytics.html
