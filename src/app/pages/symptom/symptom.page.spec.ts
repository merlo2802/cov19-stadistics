import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomPage } from './symptom.page';

describe('SymptomPage', () => {
  let component: SymptomPage;
  let fixture: ComponentFixture<SymptomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
