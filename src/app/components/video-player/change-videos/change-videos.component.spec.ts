import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeVideosComponent } from './change-videos.component';

describe('ChangeVideosComponent', () => {
  let component: ChangeVideosComponent;
  let fixture: ComponentFixture<ChangeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
