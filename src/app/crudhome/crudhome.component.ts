import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-crudhome',
  templateUrl: './crudhome.component.html',
  styleUrls: ['./crudhome.component.scss']
})
export class CrudhomeComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  openAddeditEmpForm(){
    this._dialog.open(EmpAddEditComponent);
  }
  ngOnInit(): void {
  }

}
