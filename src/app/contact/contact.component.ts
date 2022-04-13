import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  // title = 'reactiveForm';
  reactiveForm?: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(): void {
    this.reactiveForm = this.fb.group({
      name: '',
      email: '',
      textArea: '',
    });

  }


  
  get name() {
    return this.reactiveForm?.get('name')
  }

  get email() {
    return this.reactiveForm?.get('email')
  }

  get textArea() {
    return this.reactiveForm?.get('textArea')
  }

  onSubmit(): void {
    alert("Form Submitted");
  }


}
