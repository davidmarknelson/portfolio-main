import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWork } from 'src/app/shared/types';

@Component({
  selector: 'dn-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  @Input() work!: IWork;
}
