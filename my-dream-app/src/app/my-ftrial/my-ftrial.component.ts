import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ftrial',
  templateUrl: './my-ftrial.component.html',
  styleUrls: ['./my-ftrial.component.scss']
})
export class MyFtrialComponent implements OnInit {

  constructor() { }

 

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
  myName = 'Shrutika';
  

  facebookTmageLink = './assets/download.jpeg' ;
  ngOnInit() {
  }
  

  sayhello() {
    console.log("hello");
    this.showWhiteText = !this.showWhiteText;
    this.showBoldText = !this.showBoldText;
    

  }
}
