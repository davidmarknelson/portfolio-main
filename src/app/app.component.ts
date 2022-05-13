import { Component } from '@angular/core';
import {
  AirKoalatyData,
  PokeSurveyData,
  Portfolio1Data,
  Sfr1Data,
  Sfr2Data,
} from './shared/data/project-data';
import {
  ProjectImageAirKoality,
  ProjectImagePokeSurvey,
  ProjectImagePortfolio1,
  ProjectImageSfr1,
  ProjectImageSfr2,
} from './shared/data/project-image';
import { Skills } from './shared/data/skills';
import { WorkAlpine } from './shared/data/work';
import { IProjectImage, IProjectInfo, ISkill, IWork } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  workAlpine: IWork = WorkAlpine;
  projectImagesSfr2: IProjectImage[] = ProjectImageSfr2;
  projectInfoSfr2: IProjectInfo = Sfr2Data;
  projectImagesSfr1: IProjectImage[] = ProjectImageSfr1;
  projectInfoSfr1: IProjectInfo = Sfr1Data;
  projectImagesPortfolio1: IProjectImage[] = ProjectImagePortfolio1;
  projectInfoPortfolio1: IProjectInfo = Portfolio1Data;
  projectImagesAirKoality: IProjectImage[] = ProjectImageAirKoality;
  projectInfoAirKoality: IProjectInfo = AirKoalatyData;
  projectImagesPokeSurvey: IProjectImage[] = ProjectImagePokeSurvey;
  projectInfoPokeSurvey: IProjectInfo = PokeSurveyData;
  skills: ISkill[] = Skills;
}
