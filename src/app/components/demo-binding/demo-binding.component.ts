import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.css']
})
export class DemoBindingComponent implements OnInit {

  nomUser: string = "Alexandre";
  color: string = "blue";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(param: any){
    console.log(param);
  }

  swapColor(){
    this.color = this.color === 'blue' ? 'red':'blue';
  }


}
