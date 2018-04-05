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
    constructor(private http: Http){}

    getSales(){
      var sales = this.http.get(this.url)
            .map((response:Response)=> response.json())
      return sales
    }

    public add(item: Sales) {
      console.log(item)
      return this.http.post(this.url, JSON.stringify(item)).map(
        (response:Response) => {
            console.log(response)
            let body = response.json();
            
            return body.StatusCode;
        }
    )
  }

    getAllSales(): Sales[]{
        return [
            {
                "id": 1,
              "FolioNumber": "654321",
              "SaleDate": "08/05/2017",
              "SaleAmount": "38.0000"
            },
            {
                "id": 2,
              "FolioNumber": "654321",
              "SaleDate": "08/05/2017",
              "SaleAmount": "38.0000"
            },
            {
                "id": 3,
              "FolioNumber": "654321",
              "SaleDate": "08/05/2017",
              "SaleAmount": "38.0000"
            },
            {
                "id": 4,
              "FolioNumber": "654321",
              "SaleDate": "08/05/2017",
              "SaleAmount": "38.0000"
            },
          ]
    }
}

