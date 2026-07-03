import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Exercício 8: tema customizado - cor primária verde e secundária amarela
export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4CAF50',
          secondary: '#FFC107'
        }
      }
    }
  }
});