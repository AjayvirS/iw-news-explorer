import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedArticleItemComponent } from './feed-article-item.component';

describe('FeedArticleItemComponent', () => {
  let component: FeedArticleItemComponent;
  let fixture: ComponentFixture<FeedArticleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedArticleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
