import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/shared/types';

@Component({
  selector: 'dn-skills',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skills!: ISkill[];
}
