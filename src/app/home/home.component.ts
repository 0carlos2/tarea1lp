import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Categoria } from '../models/categoria';
import { CategoriaService } from '../services/categoria.service';
import { TableModule } from 'primeng/table';
import { SeccionService } from '../services/secciones.service';
import { Seccion } from '../models/secciones';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule,TableModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 categorias: Categoria[]=[];
 secciones: Seccion[] = [];


 constructor( private categoriaService:CategoriaService,private seccionesService:SeccionService){}

 ngOnInit():void{
  this.listarCategoria();
  this.listarSeccion();
 }

 listarCategoria(){
  this.categoriaService.getCategorias().subscribe((data)=>{
    this.categorias=data;
  });
 }
 listarSeccion(){
  this.seccionesService.getSeccion().subscribe((data)=>{
    this.secciones=data;
  });
 }
}
