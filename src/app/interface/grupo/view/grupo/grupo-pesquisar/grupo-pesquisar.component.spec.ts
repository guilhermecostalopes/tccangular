import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoPesquisarComponent } from './grupo-pesquisar.component';

describe('GrupoPesquisarComponent', () => {
  let component: GrupoPesquisarComponent;
  let fixture: ComponentFixture<GrupoPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
