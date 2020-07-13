import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor() { }
  currentSlide: number;
  nextSlide: number;
  $carousel = $('.carousel');

  ngOnInit() {

  }


}
