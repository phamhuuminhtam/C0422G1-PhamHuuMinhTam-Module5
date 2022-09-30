import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Dictionary} from '../../dictionary';
import {DictionaryService} from '../../dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
diction: Dictionary;
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((param: ParamMap) =>{
      let word = param.get("word").toString()
      console.log(word);
      if(word != null){
        this.diction = dictionaryService.showDetail(word);
      }
    })
  }

  ngOnInit(): void {
  }

}
