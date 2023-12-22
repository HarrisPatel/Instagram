import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any, searchTerm: string, searchType:string) {
    let result:any = [];
   if(!arr || searchTerm == "" || searchType == ""){
     return arr;
   }


   arr.forEach((a:any)=>{
     if(a[searchType].trim().toLowerCase().includes(searchTerm.toLowerCase())){
       result.push(a);
     }
   })
   console.log(arr)
    return result
 }

}
