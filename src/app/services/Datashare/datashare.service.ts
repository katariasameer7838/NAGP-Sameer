import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }

  setIdForDescPage(id){
    localStorage.setItem("IdForDesc",id);
  }
  getIdForDescPage(){
    return localStorage.getItem("IdForDesc");
  }
}
