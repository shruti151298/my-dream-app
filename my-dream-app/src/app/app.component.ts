import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  welcomeMessage= 'I am a ISSC student';
  score = 100;

  student = {
    name: 'shrutika',
    age: 21
  };

  students = ['Rohan', 'adu', 'raju', 'nikita', 'preksha'];
  teachers = [
    {
      name : 'Bedekar mam' ,
      subject : 'Numerical Method'
    },
     {
      name: 'Tondon sir' ,
      subject: 'CPP'

    }
  ];
  day = 'Sunday';
  showWhiteText = false;
  showBoldText = false;

  facebookTmageLink = './assets/download.jpeg' ;
  

  sayhello() {
    console.log("hello");
    this.showWhiteText = !this.showWhiteText;
    this.showBoldText = !this.showBoldText;
    

  }
}
