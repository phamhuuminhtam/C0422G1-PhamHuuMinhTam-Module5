import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../dictionary.service';
import {Dictionary} from '../../dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
 dictionary: Dictionary[];
  constructor(private dictionaryService: DictionaryService) {
    this.dictionary = dictionaryService.show();
  }

  ngOnInit(): void {
  }

}
