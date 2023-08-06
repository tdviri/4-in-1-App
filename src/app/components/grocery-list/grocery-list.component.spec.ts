import { ComponentFixture, TestBed } from '@angular/core/testing';

import { groceryListComponent } from './grocery-list.component';

describe('GroceryListComponent', () => {
  let component: groceryListComponent;
  let fixture: ComponentFixture<groceryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [groceryListComponent]
    });
    fixture = TestBed.createComponent(groceryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
