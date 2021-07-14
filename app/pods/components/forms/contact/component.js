import Component from '@glimmer/component';
import { action } from '@ember/object';
import Env from 'highstreetly-ui/config/environment';
import fetch from 'fetch';
import { tracked } from '@glimmer/tracking';

export default class FormsContactComponent extends Component {
  @tracked contacted = false;
  @tracked contacting = false;

  contactData = {
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null,
  };

  @tracked formErrors = {};

  handleErrors(errors) {
    this.formErrors = errors;
    window.grecaptcha.reset();
  }

  handleSuccess() {
    this.contacted = true;
  }

  @action
  async onCaptchaResolved(reCaptchaResponse) {
    this.contacting = true;
    this.formErrors = {};

    try {
      this.contactData.reCaptchaResponse = reCaptchaResponse;

      const data = new FormData();
      for (let key in this.contactData) {
        data.append(key, this.contactData[key]);
      }

      let response = await fetch(Env.sonatribe.enquiryUrl + '/contact', {
        method: 'POST',
        body: data,
      });

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
  }

  @action
  submit() {
    window.grecaptcha.execute();
  }
}
