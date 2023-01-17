import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css',],
  encapsulation: ViewEncapsulation.None
})
export class MenubarComponent {
  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'<span class="binary">001</span>  About',
              escape: false,
              badge: ''
          },
          {
            label:'<span class="binary">010</span>  Experience',
            escape: false,
            routerLink: ['#test']
          },
          {
            label:'<span class="binary">011</span>  Work',
            escape: false
          },
          {
            label:'<span class="binary">100</span>  Contact',
            escape: false
          },
         
      ];
  }

}
