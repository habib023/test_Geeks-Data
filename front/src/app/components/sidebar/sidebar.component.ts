import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Accueille', title: 'Accueille',  icon: 'education_agenda-bookmark', class: '' },
    { path: '/gestion des fichiers', title: 'gestion des fichiers',  icon:'education_agenda-bookmark', class: '' },
    { path: '/toutes les fonctionnalités', title: 'toutes les fonctionnalités',  icon:'loader_refresh', class: '' },
    { path: '/parametrage des attributs', title: 'parametrage des attributs',  icon:'education_agenda-bookmark', class: '' },

    { path: '/charger la liste des valeurs', title: 'charger la liste des valeurs',  icon:'education_agenda-bookmark', class: '' },
    
    { path: '/typage des attributs', title: 'typage des attributs',  icon:'arrows-1_minimal-right', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
