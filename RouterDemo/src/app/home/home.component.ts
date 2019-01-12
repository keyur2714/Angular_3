import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name : string = '';
  city : string = '';

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(
    //   (paramMap)=>{
    //     this.name = paramMap.name;
    //     this.city = paramMap.city;
    //   }
    // )
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        this.name = queryParamMap.get("name");
        this.city = queryParamMap.get("city");
      }
    )
  }

}
