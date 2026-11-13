export interface Nota {
    id: string,
    titulo: string,
    contenido: string,

}

// Datos para crear una nota: el id lo genera MongoDB
export type NuevaNota = Omit<Nota, 'id'>;
