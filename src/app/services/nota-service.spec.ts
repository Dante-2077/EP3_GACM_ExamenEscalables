import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { NotaService } from './nota-service';

describe('NotaService', () => {
  let service: NotaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(NotaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('cargarNotas guarda la respuesta en la señal', () => {
    service.cargarNotas();
    httpMock.expectOne('http://localhost:8081/api/notas').flush([
      { id: '1', titulo: 'A', contenido: 'B' },
    ]);
    expect(service.notas().length).toBe(1);
  });

  it('agregarNota actualiza la señal con la nota creada', () => {
    service.agregarNota({ titulo: 'A', contenido: 'B' });
    httpMock.expectOne('http://localhost:8081/api/notas').flush({
      ok: true, msg: 'ok', data: { id: '2', titulo: 'A', contenido: 'B' },
    });
    expect(service.notas()).toEqual([{ id: '2', titulo: 'A', contenido: 'B' }]);
    expect(service.notaCount()).toBe(1);
  });
});
