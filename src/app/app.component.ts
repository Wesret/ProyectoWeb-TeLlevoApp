import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Te Llevo App';

  celular : boolean;
  link = "https://docs.google.com/uc?export=download&id=1_xr-ULfzj1yCxfr5BpxzQaXkJVbpcnrj";
  
  constructor(public platform: Platform){
    this.celular = this.checkFrom();
  }

  checkFrom(): boolean{
    if(this.platform.ANDROID || this.platform.IOS){
      console.log("Vienes de Smartphone")
      return true;
    }else{
      console.log("No vienes de Smartphone")
      return false;
    }
  }

}
