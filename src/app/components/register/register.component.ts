import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "angularx-social-login";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.authState$.subscribe(authState => {
      if (authState){
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnURL'] || '/profile');
      } else {
        this.router.navigateByUrl('/register');
      }
    });
  }

  register(form: NgForm) {
    const email = this.email;
    const password = this.password;


    if(form.invalid){
      return;
    }

    form.reset();
    this.userService.registerUser(email, password);
  }
}
