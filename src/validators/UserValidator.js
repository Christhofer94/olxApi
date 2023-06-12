const { checkSchema } = require ('express-validator')
const { options } = require('../routes')

module.exports = {
  editAction: checkSchema({
    token: {
      notEmpty: true
    },
    name: {
      optional: true,
      trim: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    password: {
      optional: true,
      notEmpty: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Senha precisa de pelo menos 2 caracteres'
    },
    state: {
      optional: true,
      notEmpty: true,
      errorMessage: 'Estado não preenchido'
    }

  }),
}