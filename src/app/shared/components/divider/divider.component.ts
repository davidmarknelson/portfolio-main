import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dn-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {}
