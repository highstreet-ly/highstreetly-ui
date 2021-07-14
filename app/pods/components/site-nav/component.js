import Component from '@glimmer/component';

export default class SiteNavComponent extends Component {
  get light() {
    return this.args.light || false;
  }
}
