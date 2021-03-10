import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglecountryPage } from './singlecountry.page';

describe('SinglecountryPage', () => {
  let component: SinglecountryPage;
  let fixture: ComponentFixture<SinglecountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglecountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
