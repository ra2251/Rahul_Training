import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role;

  constructor(public serviceData : ServiceService) {
   
   
   }

  ngOnInit(): void {
    this.serviceData.role.subscribe((res: any) => {  
      this.role = res;  
      console.log(this.role)
    }) 
  }
public logout(){
  this.serviceData.role.next(0); 
}
}
