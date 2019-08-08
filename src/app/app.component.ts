import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // and we want to get access of local refrence element 'f'
  @ViewChild('f',{static: false}) signupForm : NgForm;
  // TS
  defaultQuestion = "pet";
  answer = '';
  genders = ['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm.control.value.userData.username);
    console.log(this.signupForm.control.value.userData.email);
    console.log(this.signupForm.control.value.secret);
    console.log(this.signupForm.control.value.questionAnswer);
    console.log(this.signupForm.control.value.gender);
    console.log(this.signupForm);
    // console.log(this.signupForm);
  }
}
