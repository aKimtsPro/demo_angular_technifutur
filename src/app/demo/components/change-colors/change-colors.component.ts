import { Component, OnInit } from '@angular/core';
import { ColorSwapService } from 'src/app/services/color-swap.service';

@Component({
  selector: 'app-change-colors',
  templateUrl: './change-colors.component.html',
  styleUrls: ['./change-colors.component.css']
})
export class ChangeColorsComponent implements OnInit {

  color!: string;

  constructor(private swapService: ColorSwapService) { }

  ngOnInit(): void {
  }
  
  onSwap(){
    this.swapService.swap();
  }

  onChooseColor(){
    this.swapService.swapWithColor(this.color);
  }

}
