import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectNameDialogComponent } from './collect-name-dialog.component';

describe('CollectNameDialogComponent', () => {
  let component: CollectNameDialogComponent;
  let fixture: ComponentFixture<CollectNameDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectNameDialogComponent]
    });
    fixture = TestBed.createComponent(CollectNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
