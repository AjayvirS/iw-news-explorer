import {Component, Input, OnInit} from '@angular/core';
import {MAX_SUMMARY_CHARS} from '../../constants';

@Component({
  selector: 'app-feed-article-item',
  templateUrl: './feed-article-item.component.html',
  styleUrls: ['./feed-article-item.component.sass']
})
export class FeedArticleItemComponent implements OnInit {

  @Input()
  readonly article: NewsAPI.Article;
  MAX_SUMMARY_CHARS = MAX_SUMMARY_CHARS;
  showModal = false;

  constructor() { }

  ngOnInit() {
  }

}
