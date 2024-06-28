import { Component } from '@angular/core';
import { FetchService } from '../../services/fetch.service';
import { inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="suggestions-form">
      <form class="form" [formGroup]="applyForm" (ngSubmit)="handleSubmit()">
          <h2 class="title">Make your suggestions here!</h2>

          <label for="first-name">First Name 
              <span class="alert" [hidden]="firstName.valid || firstName.untouched">*required</span>
              <input type="text" id="first-name" formControlName="firstName"/>
          </label>

          <label for="last-name">Last Name 
              <span class="alert" [hidden]="lastName.valid || lastName.untouched">*required</span>
              <input type="text" id="last-name" formControlName="lastName"/>
          </label>

          <label for="email">Email
              <span class="alert" [hidden]="email.valid || email.untouched">
                @if(email.errors?.['required']){*required} @else{*invalid email}
              </span> 
              <input type="text" id="email" formControlName="email"/>
          </label>

          <label for="suggestions">Suggestions 
              <span class="alert" [hidden]="suggestions.valid || suggestions.untouched">    *required</span>
              <textarea maxlength="140" id="suggestions" placeholder="Up to 140 characters..." formControlName='suggestions'></textarea>
          </label>

          <button type="submit" class="primary" [disabled]="applyForm.invalid">Apply now</button>
      </form>
    </section>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  fetchService = inject(FetchService)

  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    suggestions: new FormControl('', Validators.required),
  });

  get firstName() {
    return this.applyForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.applyForm.get('lastName') as FormControl;
  }
  
  get email() {
    return this.applyForm.get('email') as FormControl;
  }
  
  get suggestions(){
    return this.applyForm.get('suggestions') as FormControl;
  }

  handleSubmit() {
    if (this.applyForm.invalid) return;
    this.fetchService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.suggestions ?? '',
    );
  }
}