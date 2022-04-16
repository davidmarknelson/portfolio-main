import { Component } from '@angular/core';
import { ProjectImageSfr2 } from './shared/data/project-image';
import { WorkAlpine } from './shared/data/work';
import { IProjectImage, IWork } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  workAlpine: IWork = WorkAlpine;
  projectImageSfr2: IProjectImage[] = ProjectImageSfr2;
}
