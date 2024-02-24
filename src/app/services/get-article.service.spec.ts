import { TestBed } from '@angular/core/testing';

import { GetArticleService } from './get-article.service';

describe('GetArticleService', () => {
  let service: GetArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
