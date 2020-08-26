import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hubble-page',
  templateUrl: './hubble-page.component.html',
  styleUrls: ['./hubble-page.component.scss']
})
export class HubblePageComponent implements OnInit {
  totalAngularPackages;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:5000/todo').subscribe(data => {
      this.totalAngularPackages = data.total;
      console.log('Data s localhost 5000', data)
  })
  }

}
