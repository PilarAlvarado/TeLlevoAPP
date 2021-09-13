import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email:any;

  constructor(private activeRouter : ActivatedRoute, private router : Router) {
    this.activeRouter.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.email = this.router.getCurrentNavigation().extras.state.email;
      }
    });
  }

  public toRecover() {
    this.router.navigate(['/home']);
  }

  public submit() {
    this.router.navigate(['/inicio']);
  }

}



