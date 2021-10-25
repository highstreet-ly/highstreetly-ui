import Component from '@glimmer/component';
import { action } from '@ember/object';
import Env from 'highstreetly-ui/config/environment';
import { tracked } from '@glimmer/tracking';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { sort } from '@ember/object/computed';

export default class FormsRegisterComponent extends Component {
  @service
  store;

  @tracked registered = false;
  @tracked registering = false;

  @tracked
  registerData = {
    businessName: null,
    firstName: null,
    lastName: null,
    address: null,
    password: null,
    contactPhone: null,
    contactPost: null,
    email: null,
    businessType: null,
  };

  sortBy = ['name'];
  @sort('args.businessTypes', 'sortBy')
  sortedBusinessTypes;

  @tracked formErrors = {};

  handleSuccess() {
    this.registered = true;
  }

  validatePassword(password) {
    var re = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
    return re.test(String(password));
  }

  validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  @action
  didSelectBusinessType(bt) {
    this.registerData.businessType = bt
  }

  @action
  async submit() {
    this.registering = true;
    this.formErrors = {};

    try {
      if (isEmpty(this.registerData.businessName)) {
        this.formErrors['businessName'] = [];
        this.formErrors['businessName'].push('Business name cannot be empty');
      }

      if (isEmpty(this.registerData.firstName)) {
        this.formErrors['firstName'] = [];
        this.formErrors['firstName'].push('First name cannot be empty');
      }

      if (isEmpty(this.registerData.lastName)) {
        this.formErrors['lastName'] = [];
        this.formErrors['lastName'].push('Last name cannot be empty');
      }

      if (!this.validateEmail(this.registerData.email)) {
        this.formErrors['email'] = [];
        this.formErrors['email'].push('Email cannot be empty');
      }

      if (!this.validatePassword(this.registerData.password)) {
        this.formErrors['password'] = [];
        this.formErrors['password'].push('Password cannot be empty');
      }

      if (Object.keys(this.formErrors).length > 0) {
        this.registering = false;
        return;
      }

      let existingEvent = await this.store.query('event-series', {
        filter: {
          name: this.registerData.businessName,
        },
      });

      if (existingEvent.length > 0) {
        this.formErrors = {};
        this.formErrors['businessName'] = [];
        this.formErrors['businessName'].push(
          'A business with that name is already registered.'
        );
        this.registering = false;
        return;
      }

      let redirectURI = `${Env.sonatribe.DashUi}/confirmemail`;

      var registration = this.store.createRecord('register', {
        email: this.registerData.email,
        password: this.registerData.password,
        confirmPassword: this.registerData.password,
        redirect: redirectURI,
        createEventName: this.registerData.businessName,
        firstName: this.registerData.firstName,
        lastName: this.registerData.lastName,
        createEventBusinessTypeId: this.registerData.businessType.id
      });

      await registration.save();

      this.registered = true;
    } catch (e) {
      console.log('error');
    }

    this.registering = false;
  }
}
