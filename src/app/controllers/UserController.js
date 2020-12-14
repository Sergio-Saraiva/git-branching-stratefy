import knex from '../../database';

class UserController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await knex('users')
      .insert({ email, password })
      .returning(['id, email']);

    return res.json(user[0]);
  }
}

export default new UserController();
