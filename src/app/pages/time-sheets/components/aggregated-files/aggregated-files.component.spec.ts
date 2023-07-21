import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatedFilesComponent } from './aggregated-files.component';

describe('AggregatedFilesComponent', () => {
  let component: AggregatedFilesComponent;
  let fixture: ComponentFixture<AggregatedFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggregatedFilesComponent]
    });
    fixture = TestBed.createComponent(AggregatedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
