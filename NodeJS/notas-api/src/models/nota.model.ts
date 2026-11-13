import mongoose from "mongoose";

const notaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    contenido:{
        type: String,
        required: [true, 'El contenido es obligatorio']
    }

});

// Al convertir a JSON se expone "id" (string) en lugar de "_id" y "__v"
notaSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_doc, ret: Record<string, unknown>) => {
        delete ret['_id'];
        return ret;
    }
});

export const NotaModel = mongoose.model('Nota', notaSchema);
