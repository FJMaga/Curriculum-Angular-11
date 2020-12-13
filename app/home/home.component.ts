import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { tdRotateAnimation } from '@covalent/core/common';

import { getThemes } from '@covalent/echarts/base';
import { ITdWordCloudData } from '@covalent/echarts/wordcloud';

import { ChartThemeSelectorService }from './chart-theme';

import listaLogos from 'src/assets/logos.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    tdRotateAnimation, // using implicit anchor name '@tdRotate' in template
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class homeComponent implements OnInit {

  triggerState: boolean = false;

  themes: string[] = getThemes();
  selectedTheme: string;


 words: string[] = [];
 logos: string[] = [];
 

 componentRandomWords: ITdWordCloudData[] = this.generateRandomWords(this.words);

 // Chart config
 config: any = {
   tooltip: {},
   series: [
     {
       type: 'wordCloud',
       shape: 'triangle',
       sizeRange: [8, 50],
       rotationRange: [-30, 30],
       color: this.randomColor(),
       data: this.generateRandomWords(this.words),
     },
   ],
 };

 constructor(private _cdr: ChangeDetectorRef, public themeSelector: ChartThemeSelectorService) {}

 async ngOnInit(): Promise<void> {
   this.selectedTheme = this.themeSelector.selected;
   this._cdr.markForCheck();
    
    
 }

 
 randomColor(): string {
   return (
     'rgb(' +
     [Math.round(Math.random() * 55)+200, Math.round(Math.random() * 55)+200, Math.round(Math.random() * 55)+200].join(',') +
     ')'
   );
 }

 generateRandomWords(words : string[]): ITdWordCloudData[] {

  for(let i in listaLogos){
    //console.log(listaLogos[i].name);
    this.words[i] = [listaLogos[i].name];
    this.logos[i] = [listaLogos[i].shortname]
    
  }

  console.log(this.words);

  console.log(this.componentRandomWords);
  

  return Array.apply(undefined, Array(150)).map(() => {
    return {
      
      name: this.words[Math.floor(Math.random() * this.words.length)],
      value: Math.floor(Math.random() * 100),
      textStyle: {
        normal: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: this.randomColor(),
        },
      },
    };
  });
 }

 selectChartTheme(theme: string): void {
   this.themeSelector.select(theme);
 }

}

