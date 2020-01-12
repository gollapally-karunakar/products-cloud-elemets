import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


declare const $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products:any = [];
  public actualProducts:any = [];
  
  constructor(private _appService:AppService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products = [];
    this._appService.getAllProductsData().subscribe((resp:any)=>{
      if(resp){
        Object.keys(resp).map((val)=>{
          this.products.push(resp[val]);
        })
        console.log('this.products: ', this.products);
        this.actualProducts = JSON.parse(JSON.stringify(this.products));
      }
    })
  }

  getTabData(name){
    this.products = this.actualProducts;
    if(name !== 'general'){
      this.products = this.products.filter((val)=>{
        return val.hub !== 'general'
      })
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }
}

$(document).ready(function(){
  $("#general").click(function(){
    $("#other").removeClass('active')
    $("#general").addClass('active')
  });

  $("#other").click(function(){
    $("#general").removeClass('active')
    $("#other").addClass('active')
  })
})
