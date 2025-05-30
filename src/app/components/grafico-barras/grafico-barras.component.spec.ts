import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarrasComponent } from './grafico-barras.component';

describe('GraficoBarrasComponent', () => {
  let component: GraficoBarrasComponent;
  let fixture: ComponentFixture<GraficoBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoBarrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
