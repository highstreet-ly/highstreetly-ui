import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.uncountable('register-interest');
  inflector.uncountable('register');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
