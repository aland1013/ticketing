const bcrypt = require('bcryptjs');

export class Password {
  static async toHash(password: string) {
    return bcrypt.hashSync(password, 8);
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    return bcrypt.compareSync(suppliedPassword, storedPassword);
  }
}
