import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/producto.model';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nuevoProducto: ProductoModel = new ProductoModel();

  productos = [
    {
      nombre: 'Pesa 1',
      detalle: 'Esta es la descripcion de la pesa 1',
      precio: 100,
    },
    {
      nombre: 'Pesa 2',
      detalle: 'Esta es la descripcion de la pesa 2',
      precio: 100,
    },
    {
      nombre: 'Pesa 3',
      detalle: 'Esta es la descripcion de la pesa 3',
      precio: 100,
    },
  ]

  constructor() {

  }
  ngOnInit() {

  }
  clickAddProductos(f: NgForm){
    this.productos.push(this.nuevoProducto)
  }
  

}
