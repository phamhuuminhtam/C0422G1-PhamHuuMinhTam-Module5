import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  deleteNumb: number;
  articles: Article[] = [
    {
      id: 1,
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    { id: 2,
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    { id: 3,
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    { id: 4,
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      id: 5,
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  addNewArticle() {
    this.article.id = this.articles.length + 1;
    this.articles.push(this.article);
  }

  removeArticle() {
    for (let i = 0 ; i < this.articles.length; i++) {
      if (this.articles[i].id === this.deleteNumb) {
        this.articles.splice(i, 1);
      }
    }
  }
  removeArticleElement(article: Article) {
   this.articles.splice(this.articles.indexOf(article),1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
