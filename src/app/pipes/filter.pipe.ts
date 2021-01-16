import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrayObj: any, filterString: string, propName: string): any {
	const resultArray = [];
	if (arrayObj.length === 0 || filterString === '') {
      return arrayObj;
    }    
	
    for (const item of arrayObj) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
