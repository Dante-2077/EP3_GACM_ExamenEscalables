import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal, WritableSignal } from '@angular/core';
import { NuevaNota, Nota } from '../interfaces/nota.interface';

@Service()
export class NotaService {

    private http = inject(HttpClient);
    private apiUrl = "http://localhost:8081/api/notas";
    private _notas: WritableSignal<Nota[]> = signal([]);
    public notas = this._notas.asReadonly();

    notaCount = computed(() => this.notas().length);

    cargarNotas(): void{
        this.http.get<Nota[]>(this.apiUrl).subscribe({
            next: (response : Nota[]) => {
                this._notas.set(response);
            },
            error: (error) => {
                console.error("Error al cargar las notas", error);
            },
        })
    }

    // actualizacion pesimista: la nota se agrega a la señal cuando el servidor confirma el guardado
    agregarNota(nuevaNota: NuevaNota): void{
        // el backend responde { ok, msg, data }
        this.http.post<{ ok: boolean; msg: string; data: Nota }>(this.apiUrl, nuevaNota).subscribe({
            next: (response) => {
                this._notas.update((notas) => [...notas, response.data]);
            },
            error: (error) => {
                console.error("Error al crear la nota", error);
            },
        })
    }
}
