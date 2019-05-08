import {Request, Response} from 'express';
import pool from '../database';

class GamesController {
  public async list (req: Request, res: Response): Promise<void>{
    const games = await pool.query('SELECT * FROM games');
    res.json(games);
    res.json({ message: 'GET Method listing games' });
  }

  public async create (req: Request, res: Response) {
    console.log(req.body);
    await pool.query('INSERT INTO games set ?', [req.body]); // NOTE: todas las consultas a BBDD son eventos asincronos y llevan su timepo, esto se gestiona mediante las funciones async await ()
    res.json({ message: 'POST Method game saved' });
  }

  public async delete (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id =?', [id])
    res.json({ text: 'The game is removed' });
  }

  public async update (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('UPDATE games set ? WHERE id =?', [req.body, id]);
    res.json({ text: 'The game is updated' });
  }

  public async getOne (req: Request, res: Response): Promise<any>{
    const { id } = req.params;
    const game = await pool.query('SELECT * FROM games WHERE id =?', [id]);
    if (game.length > 0) {
      return res.json(game[0]);
    }
    console.log(game)
    res.status(404).json({ message: 'this game doesnt exist' });

  }
}

export const gamesController = new GamesController();
