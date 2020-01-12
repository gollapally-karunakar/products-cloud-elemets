import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient:HttpClient) { }

  /**
   * Getting all products data
   * Date : 11-01-2020
   */

   getAllProductsData(){
     return this._httpClient.get("https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json");
   }
}
