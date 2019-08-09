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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  // tracking submitted
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this is not best options because it's override all form field to default one 
    // and user need to input again other field again
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'hola',
    //   gender: 'female'
    // });
    // this is patch spesific value
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    // this is will reset form 
    // !Important you can pass the same object as in set Value() to reset which will then reset the 
    // form to spesific values
    this.signupForm.reset();
    console.log(this.signupForm);
    // console.log(this.signupForm);
  }
}
