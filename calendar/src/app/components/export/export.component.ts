import { Component, OnInit } from '@angular/core';
import * as html2canvas from "html2canvas";

declare var $:any;
declare var jsPDF:any;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  capture(media) {
    let el = $('#schedule-table');
    el.find('.add-staff-button').hide();
    html2canvas(el).then((canvas) => {
      el.find('.add-staff-button').show();
      let img = canvas.toDataURL("image/jpeg");
      let image = canvas.toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      
      if (media === 'image') {
        window.location.href = image;
      }
      if (media == 'email') {
        window.location.href = 'mailto:test@test.com?subject=Schedule&attach='+img;
      }
      if (media == 'pdf') {
        let doc = new jsPDF({
          orientation: 'landscape'
        });
        doc.addImage(img, 'JPEG', 2, 5);
        doc.save('schedule.pdf');
      }
      if (media == 'print') {
        let printWin = window.open('','','width=700,height=700');
        printWin.document.write('<img src="'+img+'">');
        printWin.focus();
        setTimeout(() => {
          printWin.print();
          printWin.close();
        }, 500);
      }
    });
  }

}
