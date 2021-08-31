import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: any;

  constructor(public roleServices:ServiceService, private route: Router) { 
   }

  ngOnInit(): void {
    this.roleServices.role.subscribe((res: any) => {  
      this.role = res;  
      console.log(this.role)
    }) 
  }
public setRole(roleId:number){
  this.roleServices.role.next(roleId); 
  this.route.navigateByUrl('')

}
}
