import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data;
  interviews=[];
  isVisibleTestList = true;
  isVisibleTest = false;
  
  constructor(private portalService: PortalService, private router: Router){
    this.data = this.portalService.getProtalData();
    this.interviews.push(this.data);
    console.log(this.interviews);
     
  }
  ngOnInit(){
    //let testSession = sessionStorage.getItem('test');
    //this.isVisibleTestList =  (testSession) ? false : true;
  }
  startTest(event: Event, testData){
    //console.log(event);
    //console.log(testData);
    sessionStorage.setItem('test',JSON.stringify(testData));
    this.isVisibleTestList = false;
    this.isVisibleTest = true;
    this.router.navigateByUrl('/test');
  }

}
