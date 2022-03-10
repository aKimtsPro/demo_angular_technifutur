import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PLAT_INSERT_FORM } from 'src/app/forms/plat.form';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.css']
})
export class PlatFormComponent implements OnInit {

  platForm: FormGroup;

  @Output('plat-sent')
  platSent= new EventEmitter<Plat>()

  constructor(builder: FormBuilder) {
    this.platForm = builder.group(PLAT_INSERT_FORM)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.platForm.valid )
      this.platSent.emit(this.platForm.value);
  }

}
