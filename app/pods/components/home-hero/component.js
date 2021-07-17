import Component from '@glimmer/component';
import { action } from '@ember/object';
import Typed from 'typed.js';

export default class HomeHeroComponent extends Component {
  typed = null;

  typingTriggerWidth = 640;

  @action
  startTyping() {
    if (window.innerWidth >= this.typingTriggerWidth) {
      var options = {
        strings: ['quickest', 'powerful', 'cost effective', 'easiest'],
        typeSpeed: 60,
      };
      this.typed = new Typed('#typing', options);
    }
  }

  stopTyping() {
    if (window.innerWidth >= this.typingTriggerWidth) {
      this.typed.destroy();
    }
  }
}
