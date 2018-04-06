import { Component, OnInit } from '@angular/core';
import {SalesService} from '../../services/sales.service'
import {Sales} from '../../models/Sales'
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  ctrl = this
  url = "http://localhost:3000/sales"
  newSale: Sales
  salesList: Sales[]
  headers = new Headers({
    "Content-Type": "application/json"
  })
  datepickerOptions = {
      format: 'yyyy-mm-dd',
      language: 'fr',
      startDate: "2012-10-01",
      endDate: "2012-10-31",
      autoclose: true,
      weekStart: 0
  }
  constructor(private service: SalesService,private http: Http) { }

  ngOnInit() {
    this.getAllSales()
    this.resetNewSale()
  }

  getAllSales(){
    this.http.get(this.url).subscribe((response)=>{
      this.salesList = response.json()
    })
  }

  selectSale(sale){
    this.newSale = sale
  }

  saveSale(){
    if(this.newSale.id == null){
      this.service.addSale(this.newSale).subscribe(response=>{
        console.log(response.status)
      })
    }
    else{
      this.service.updateSale(this.newSale)
      .then(()=>this.getAllSales())
    }
    this.resetNewSale()
    
  }

  deleteSale(sale){
    this.service.deleteSale(sale)
    .then(()=>this.getAllSales())
  }

  resetNewSale(){
    this.newSale = {
      id:null,
      FolioNumber: "",
      SaleDate: "",
      SaleAmount: ''
    }
  }

}
