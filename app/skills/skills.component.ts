import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { tdRotateAnimation } from '@covalent/core/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import logosList from 'src/assets/logos.json';
import skillsList from 'src/assets/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
})
export class SkillsComponent implements OnInit {

  triggerState: boolean = false;

  logos: string[] = [];
  //logoslist: string[];

  skills: Array<Object> = skillsList;

  

  constructor() { }

  ngOnInit(): void {


 }




}
