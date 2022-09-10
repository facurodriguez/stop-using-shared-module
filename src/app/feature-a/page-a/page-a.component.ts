import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css'],
})
export class PageAComponent {
  title = 'Feature A Page';
  imgSrc = 'http://placekitten.com/300/350';
  width = 300;
  height = 350;
}
