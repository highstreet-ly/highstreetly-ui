import Component from '@glimmer/component';

export default class FormsRegisterInterestComponent extends Component {
  registered = false;
  registering = false;
  registerInterestData = {
    businessName: null,
    firstName: null,
    lastName: null,
    address: null,
    phone: null,
    contactPhone: null,
    contactPost: null,
  };
}
