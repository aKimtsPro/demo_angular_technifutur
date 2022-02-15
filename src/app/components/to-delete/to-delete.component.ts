import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRODUIT_INSERT_FORM } from 'src/app/forms/produit.form';

@Component({
  selector: 'app-to-delete',
  templateUrl: './to-delete.component.html',
  styleUrls: ['./to-delete.component.css']
})
export class ToDeleteComponent implements OnInit {

  porduitForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.porduitForm = _builder.group(PRODUIT_INSERT_FORM);
  }

  ngOnInit(): void {
  }

}
