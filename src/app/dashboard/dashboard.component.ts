import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dashBoardData } from 'src/assets/dashboardData.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
data:any=[]
  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.data = dashBoardData
   }

   gotoMovies(){
    this.router.navigate(['/movies']);
  }

}
