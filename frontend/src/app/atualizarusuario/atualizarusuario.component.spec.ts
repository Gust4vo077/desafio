import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarusuarioComponent } from './atualizarusuario.component';

describe('AtualizarusuarioComponent', () => {
  let component: AtualizarusuarioComponent;
  let fixture: ComponentFixture<AtualizarusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
