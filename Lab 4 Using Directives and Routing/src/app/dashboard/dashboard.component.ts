import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//Using ngIf to toggle text display
showText: boolean = false;

toggleText() {
  this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Louis', lastName: 'Garcia', email: 'Louis.Garcia@test.com', role: 'Eldest' },   
    { firstName: 'Lloyd', lastName: 'Garcia', email: 'Lloyd.Garcia@test.com', role: 'Father' }, 
    { firstName: 'Jolyn', lastName: 'Flores', email: 'Jolyn.Garcia@test.com', role: 'Mother' }, 
    { firstName: 'Lykos', lastName: 'Garcia', email: 'Lykos.Garcia@test.com', role: 'Sibling' }, 
    { firstName: 'Doi', lastName: 'Bernardo', email: 'Doi.bernardo@test.com', role: 'Others' } 
    ];
}

