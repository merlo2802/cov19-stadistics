import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestyourselfPage } from './testyourself.page';

describe('TestyourselfPage', () => {
  let component: TestyourselfPage;
  let fixture: ComponentFixture<TestyourselfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestyourselfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestyourselfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
