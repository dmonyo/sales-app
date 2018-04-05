import { Component, OnInit } from '@angular/core';
import {SalesService} from '../../services/sales.service'
import {Sales} from '../../models/Sales'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  ctrl = this
  newSale: Sales
  salesList: Sales[]
  constructor(private service: SalesService) { }

  ngOnInit() {
    
    
    this.getAllSales()
    this.newSale = {
      id:null,
      FolioNumber: "",
      SaleDate: "",
      SaleAmount: ''
    }
  }

  getAllSales(){
    this.service.getSales().subscribe(sales=> this.salesList = sales)
  }

  selectSale(sale){
    this.newSale = sale
  }

  saveSale(){
    console.log(this.newSale)
    if(this.newSale.id == null){
      this.newSale.id = this.salesList.length + 1
      this.salesList.push(this.newSale)
      //this.service.add(this.newSale)
    }
    else{
      //do edit throu database
    }
    this.getAllSales()
    this.newSale = {
      id:null,
      FolioNumber: "",
      SaleDate: "",
      SaleAmount: ''
    }
  }

  delete(sale){
    var index = this.salesList.indexOf(sale)
    this.salesList.splice(index,1)
  }

}
