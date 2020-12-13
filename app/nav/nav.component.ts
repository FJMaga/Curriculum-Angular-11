import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pdfFiles = [
    {
      name:'CV pdf',
      startPage: 1,
      path: 'assets/pdf/francisco javier magariño cristóbal.pdf'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string, startPage: number ) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
  }

}
