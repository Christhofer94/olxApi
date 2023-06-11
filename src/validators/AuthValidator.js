const { checkSchema } = require ('express-validator')
const { options } = require('../routes')

module.exports = {
  signup: checkSchema({
    name: {
      trim: true,
      isLength: {
        options: {min: 2}
      },
      errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    password: {
      notEmpty: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Senha precisa de pelo menos 2 caracteres'
    },
    state: {
      notEmpty: true,
      errorMessage: 'Estado não preenchido'
    }

  }),

  signin: checkSchema({
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido'
    },
    password: {
      notEmpty: true,
      isLength: {
        options: { min: 2 }
      },
      errorMessage: 'Senha precisa de pelo menos 2 caracteres'
    },
  })
}