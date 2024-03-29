import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomsociete'
})
export class NomsocietePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(item){
      return JSON.stringify(item.titre_offre).toLowerCase().includes(args);
    });
  }

}
