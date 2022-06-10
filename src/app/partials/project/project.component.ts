import { Component, Input } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { IProjectImage, IProjectInfo } from 'src/app/shared/types';

@Component({
  selector: 'dn-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() images!: IProjectImage[];
  @Input() data!: IProjectInfo;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
