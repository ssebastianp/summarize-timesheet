import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalFilesComponent } from './original-files.component';

describe('OriginalFilesComponent', () => {
  let component: OriginalFilesComponent;
  let fixture: ComponentFixture<OriginalFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OriginalFilesComponent]
    });
    fixture = TestBed.createComponent(OriginalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
