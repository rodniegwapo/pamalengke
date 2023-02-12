import { extend } from 'vee-validate'
import { required, email, integer, digits } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: (placeholder) => {
    return `The ${placeholder} field must be required`
  }
})

// email validator
extend('email', email)

// email validator
extend('integer', integer)

// digit validation
extend('digits', digits)

extend('min', {
  validate (value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'At least {length} numbers'
})
