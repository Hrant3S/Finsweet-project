import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/service/request.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup = new FormGroup({});


  constructor(public fb: FormBuilder, private request: RequestService, private router: Router) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.pattern(/^[0-9a-zA-Z\-_\.]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,4}$/),
      Validators.required, Validators.email,],
      ],
      name: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submit() {
  }
}


