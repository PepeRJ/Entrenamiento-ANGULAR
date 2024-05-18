import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

cities: string[]=[]

add(city:string){
  this.cities.push(city)
}
onClear(){
  this.cities = []
}
}
