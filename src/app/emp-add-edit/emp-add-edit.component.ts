import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  education: string[] = ['Matric','Diploma','Intermidate','Graduate','Post Graduate'];

  empForm: FormGroup;
  constructor(private _fb:FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<EmpAddEditComponent>) {
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
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val:any)=>{
            // alert('Employee Added sucsefully');  
            this._dialogRef.close();
        },
        error: (err: any) =>{
          console.error(err);
        }
      })
    }
  }
  onClose(){
    this._dialogRef.close();
  }
  ngOnInit(): void {
  }

}
