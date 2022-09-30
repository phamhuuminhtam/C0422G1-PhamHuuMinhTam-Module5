import {Injectable} from '@angular/core';
import {Dictionary} from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [{
    word: 'pen', mean: 'cây bút', detail: 'a long, thin object used for writing or drawing with ink:\n' +
      'a fountain/ballpoint/felt-tip pen\n' +
      'Don\'t write in pen (= using a pen), or you won\'t be able to rub out any mistakes you make.'
  }, {
    word: 'bike',
    mean: 'xe đạp',
    detail: 'a bicycle: It would be better for the environment if more people used bikes rather than cars. My youngest child is learning to ride a bike'
  },{
    word: 'bye',
    mean: 'tạm biệt',
    detail: 'Bye! See you next week!'
  }];

  constructor() {
  }
  show(){
    return this.dictionary;
  }
  showDetail(word: string){
    return this.dictionary.filter(std => std.word === word)[0];
  }
}
