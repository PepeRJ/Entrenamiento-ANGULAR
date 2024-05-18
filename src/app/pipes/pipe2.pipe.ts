import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe2'
})
export class Pipe2Pipe implements PipeTransform {

  transform(value: number, parametro?: unknown): unknown {
    const result= value * value
    parametro='euro'
    return parametro?  result + ' ' + parametro: result ;
  }

}
