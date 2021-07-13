import Component from '@glimmer/component';
import { action } from '@ember/object';
import Env from 'highstreetly-ui/config/environment';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

export default class FormsRegisterInterestComponent extends Component {
  @tracked registered = false;
  @tracked registering = false;

  registerInterestData = {
    businessName: null,
    firstName: null,
    lastName: null,
    address: null,
    phone: null,
    contactPhone: null,
    contactPost: null,
  };

  @tracked formErrors = {};

  handleErrors(errors) {
    console.log(errors);
    this.formErrors = errors;
    window.grecaptcha.reset();
  }

  handleSuccess() {
    this.registered = true;
  }

  @action
  async onCaptchaResolved(reCaptchaResponse) {
    this.registering = true;
    this.formErrors = {};

    try {
      this.registerInterestData.reCaptchaResponse = reCaptchaResponse;

      const data = new FormData();
      for (let key in this.registerInterestData) {
        data.append(key, this.registerInterestData[key]);
      }

      let response = await fetch(
        Env.sonatribe.enquiryUrl + '/register-interest',
        {
          method: 'POST',
          body: data,
        }
      );

      let result = await response.json();

      if (!result.success) {
        this.handleErrors(result.errors);
      } else {
        this.handleSuccess(response);
      }
    } catch (e) {
      console.log('error');
    }

    this.registering = false;

      /*.catch(({ response, jqXHR, payload }) => {
        console.log(response, jqXHR, payload)
        this.handleErrors(jqXHR.responseJSON);
        this.registering = false;
      });*/
  }

  @action
  submit() {
    window.grecaptcha.execute();
  }
}
