import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists',
  standalone: true,
})
export class SearchArtistsPipe implements PipeTransform {
  transform(pipeData: any, pipeModifier: any): any {
    return pipeData.filter((item: any) => {
      return (
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        item['shortname'].toLowerCase().includes(pipeModifier.toLowerCase())
      );
    });
  }
}
