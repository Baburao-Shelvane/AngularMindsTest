import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  testDetails = [];
  testResults = [];
  currentIndex = 0;
  noOfQuestions = 0;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    let testSession = sessionStorage.getItem('test');
    this.testDetails.push(JSON.parse(testSession));
    this.noOfQuestions = this.testDetails[0].questions.length;
    console.log(this.testDetails[0].questions.length);
    this.testResults['name'] = this.testDetails[0].name;
    this.testResults['correct'] = 0;
    this.testResults['wrong'] = 0;
  }
  
  onSubmit(formData, testData){
    console.log(formData);
    console.log(testData);
    this.currentIndex +=1;
    console.log(this.currentIndex);
    
    
    if(formData.option == testData.optionAnswerIndex){
      this.testResults['correct'] +=1;    
    }else{
      this.testResults['wrong'] +=1;  
    }

    if(this.currentIndex == this.noOfQuestions){
      this.onFinish();    
    }
    
  }

  onFinish(){
    //console.log(this.testResults);
    sessionStorage.setItem('testResult',JSON.stringify(this.testResults));
    //this.testDetails = [];
    this.router.navigate(['/finish'])
  }
}
