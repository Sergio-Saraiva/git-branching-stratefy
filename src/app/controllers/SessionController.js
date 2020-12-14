import knexfile from '../../../knexfile';

import knex from '../../database';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const userExists = await knex('users')
      .select(['id', 'email', 'password_hash'])
      .where({ email });

    if (!userExists) {
      return res.send('Usuário não existe');
    }

    // Adiciona o hotfix

    return res.send('Ok');
  }
}

export default new SessionController();
