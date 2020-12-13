import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { tdRotateAnimation } from '@covalent/core/common';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
})
export class WorksComponent implements OnInit {

  triggerState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
