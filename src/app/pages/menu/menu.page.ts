import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'First Tab Page',
      url: '/menu/tabs/home',
      direction: 'root'
    },
    {
      title: 'Second Tab Page',
      url: '/menu/tabs/account',
      direction: 'root'
    },
    {
      title: 'Third Tab Page',
      url: '/menu/tabs/menutab',
      direction: 'root'
    },
    {
      title: 'Details Page',
      url: '/menu/tabs/home/details',
      direction: 'forward'
    },
    {
      title: 'Blank Page',
      url: '/blank',
      direction: 'forward'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
