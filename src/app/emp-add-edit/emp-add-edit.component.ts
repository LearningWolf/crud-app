import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  education: string[] = ['Matric','Diploma','Intermidate','Graduate','Post Graduate'];

  empForm: FormGroup;
  constructor(private _fb:FormBuilder) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      eduction: '',
      company: '',
      experience: '',
      pacakage: ''
    })
   }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }
  ngOnInit(): void {
  }

}
