import { Component, Input } from '@angular/core';
import { IProjectImage } from 'src/app/shared/types';

@Component({
  selector: 'dn-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() images!: IProjectImage[];
}
