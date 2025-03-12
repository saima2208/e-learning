import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinstructorComponent } from './addinstructor.component';

describe('AddinstructorComponent', () => {
  let component: AddinstructorComponent;
  let fixture: ComponentFixture<AddinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddinstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
