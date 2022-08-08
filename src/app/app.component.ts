import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegeAPP';

  
  constructor() {
    this.printMyName('Alina');
  }


printMyName(name: string): void {
  console.log(name);
}
}
