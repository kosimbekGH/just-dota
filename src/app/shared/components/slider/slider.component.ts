import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  activeSlide = 0;
  slides = [1, 2, 3, 4, 5];

  constructor() {

  }

  ngOnInit(): void {
  }

}
