import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  title = 'tccguilherme';

  ngOnInit() {
    this.items = [
        {
          label: 'Grupos',
          icon: 'pi pi-folder-open',
          routerLink: ['/grupo/pesquisar']
        },
        {
          separator: true
        },
        {
          label: 'Usuários',
          icon: 'pi pi-users',
          routerLink: ['/usuario/pesquisar']
        }
      ];
    }
}
