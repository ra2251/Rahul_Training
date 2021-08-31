import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { gender } from '../constant/gender';
import { language } from '../constant/language';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-devextreme-form',
  templateUrl: './devextreme-form.component.html',
  styleUrls: ['./devextreme-form.component.css']
})
export class DevextremeFormComponent implements OnInit {

  Language=language;
  Gender = gender;
  mobileNumberPattern: any = /^[^-\s][0-9 +-_\s-]+$/;
  nameFeildPattern: any = /^[^-\s][a-zA-Z_\s-]+$/;
  maxDate = Date.now()
  url: string;
  userData$: Observable<any>;
  buttonOptions: any = {
    text: "Register",
    type: "success",
    useSubmitBehavior: true
}
  constructor(private serviceAccess:ServiceService) { }

  ngOnInit(): void {
  
    this.url = "http://localhost:3000/users"
    this.userData$ = this.serviceAccess.getData(this.url)
  }
  onFormSubmit = function(e) {
    console.log(e)
}
}


