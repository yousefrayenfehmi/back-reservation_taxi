import { Request, Response } from "express";
import pool from "../connectiondb/connectiondb";
import Voyage from "../model/voyage";

class ControlleurVoyage {
    public async getAllVoyages(req: Request, res: Response): Promise<void> {
        try {
            const result = await pool.query('SELECT * FROM voyages');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération des voyages" });
        }
    }

    public async getVoyageById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        try {
            const result = await pool.query('SELECT * FROM voyages WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                res.status(404).json({ error: "Voyage non trouvé" });
            } else {
                res.json(result.rows[0]);
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la récupération du voyage" });
        }
    }

    public async createVoyage(req: Request, res: Response): Promise<void> {
        const { depart, arrivee, prix, nombre_passagers } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO voyages (depart, arrivee, prix, nombre_passagers) VALUES ($1, $2, $3, $4) RETURNING *',
                [depart, arrivee, prix, nombre_passagers]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.log(error);
            
            res.status(500).json({ error: "Erreur lors de la création du voyage" });
        }
    }

    public async updateVoyage(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        const { depart, arrivee, prix, nombre_passagers } = req.body;
        try {
            const result = await pool.query(
                'UPDATE voyages SET depart = $1, arrivee = $2, prix = $3, nombre_passagers = $4 WHERE id = $5 RETURNING *',
                [depart, arrivee, prix, nombre_passagers, id]
            );
            if (result.rows.length === 0) {
                res.status(404).json({ error: "Voyage non trouvé" });
            } else {
                res.json(result.rows[0]);
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la mise à jour du voyage" });
        }
    }

    public async deleteVoyage(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        try {
            const result = await pool.query('DELETE FROM voyages WHERE id = $1 RETURNING *', [id]);
            if (result.rows.length === 0) {
                res.status(404).json({ error: "Voyage non trouvé" });
            } else {
                res.json({ message: "Voyage supprimé" });
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la suppression du voyage" });
        }
    }
}

export default new ControlleurVoyage();