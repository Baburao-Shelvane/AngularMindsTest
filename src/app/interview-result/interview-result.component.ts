import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-result',
  templateUrl: './interview-result.component.html',
  styleUrls: ['./interview-result.component.css']
})
export class InterviewResultComponent implements OnInit {
  testResult = [];
  constructor() { }

  ngOnInit() {
    let testResult = sessionStorage.getItem('testResult');
    console.log("Result");
    console.log(sessionStorage.getItem('testResult'));
  }

}
