import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dir',
  templateUrl: './custom-dir.component.html',
  styleUrls: ['./custom-dir.component.css']
})
export class CustomDirComponent implements OnInit {

  elementCreated = 0;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onElementCreated(){
    this.elementCreated++;
    this.cdref.detectChanges();
  }


}
