import { type Request, type Response } from "express";
import { NotaModel } from "../models/nota.model.ts";

export const getNotas = async (req: Request, res: Response) => {

    try{
        const notas = await NotaModel.find();
        res.status(200).json(notas);
    }catch(error){
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las notas'
        });
    }
};

export const createNota = async (req: Request, res: Response) => {

    const { titulo, contenido } = req.body;

    if(!titulo || !contenido)
    {
        return res.status(400).json({
            ok: false,
            msg: "Datos invalidos"
        });
    }

    try{
        const newNota = new NotaModel({
            titulo,
            contenido,
        });
        await newNota.save();
        res.status(201).json({
            ok: true,
            msg: 'Nota creada con exito',
            data: newNota
        });

    } catch(error){
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la nota'
        });
    }
};
