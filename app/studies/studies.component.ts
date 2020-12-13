import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { tdRotateAnimation } from '@covalent/core/common';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
})
export class StudiesComponent implements OnInit {

  triggerState: boolean = false;


  constructor() { }

  ngOnInit(): void {
  

  }

}
