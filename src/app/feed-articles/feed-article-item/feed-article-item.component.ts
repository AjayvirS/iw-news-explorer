import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feed-article-item',
  templateUrl: './feed-article-item.component.html',
  styleUrls: ['./feed-article-item.component.sass']
})
export class FeedArticleItemComponent implements OnInit {

  @Input()
  article: NewsAPI.Article;

  constructor() { }

  ngOnInit() {
  }

}
