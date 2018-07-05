import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastName'
})
export class LastNamePipe implements PipeTransform {

  transform(value: any): string {
    const wordsLength = value.length;
    let getWord = ' ';
    for (const i = 0; i < wordsLength; 'i++') {
      if (value.charAt(i) === '' ) {
        getWord = ('');

      } else if (value.charAt(i) !== '' ) {
        getWord = getWord + value.charAt(i);
      }
      // console.log(getWord);
    }
    // console.log(getWord);
    return getWord;
  }

}

