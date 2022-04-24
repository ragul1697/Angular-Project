import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  agreeControlCheckbox = new FormControl(false);
  hidePassword = true;
  formGroupLogin = new FormGroup({
    emailFormControl: new FormControl(),
    agreeControlCheckbox: new FormControl(),
  });

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<img src="/assets/images/left_long_arrow.png" />',
      '<img src="/assets/images/right_long_arrow.png" />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
