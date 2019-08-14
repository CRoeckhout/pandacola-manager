import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import _ from 'lodash';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  routes = [
    {
      name: "Conversations",
      path: "/conversations",
      otherPath: [],
      icon: "fa-comments"
    }, {
      name: "Statistiques",
      otherPath: [],
      icon: "fa-chart-pie",
      children: [{
        name: "Général",
        otherPath: [],
        path: "/reporting"
      }, {
        name: "Menu 2",
        otherPath: [],
        path: "/conversation"
      }]
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {

  }

  isRouteActive(route) {
    if (route.path && route.path.includes('/' + this.router.url.split('/')[1])) return true;
    else if(route.children && _.map(route.children, 'path').includes(this.router.url)) return true
    else if(route.otherPath && route.otherPath.includes(this.router.url.split('?')[0].slice(1))) return true
    else return false;
  }
}
