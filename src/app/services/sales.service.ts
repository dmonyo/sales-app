import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Sales} from '../models/Sales'

import {SalesComponent} from '../component/sales/sales.component'

@Injectable()
export class SalesService{
    url = "http://localhost:3000/sales"
    headers:Headers 
    constructor(private http: Http){
      this.headers = new Headers({
        "Content-Type": "application/json"
      })
    }

    getAllSales(query){
      const url = (query == "")? this.url : this.url + "?q=" + query  
      console.log(url)
      return this.http.get(url)
    }

    deleteSale(sale){
      const url = this.url + "/" + sale.id
      return this.http.delete(url,{headers: this.headers}).toPromise()
    }

    addSale(sale:Sales){
      return this.http.post(this.url,sale)
    }

    updateSale(sale:Sales){
      var url = this.url + "/" + sale.id
      return this.http.put(url,JSON.stringify(sale),{headers:this.headers})
      .toPromise()
    }

    
}

