import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  selectlanguage:string = "en";
  public routeid=1;
constructor(private translate: TranslateService) {
translate.setDefaultLang('en');

}
useLanguage( ) {
this.translate.use(this.selectlanguage);
}

}
