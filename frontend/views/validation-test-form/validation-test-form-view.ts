import { showNotification } from '@vaadin/flow-frontend/a-notification';
import { Binder, field } from '@vaadin/form';
import { EndpointError } from '@vaadin/fusion-frontend';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-email-field';
import ValidationTestEntityModel from 'Frontend/generated/com/example/application/data/entity/ValidationTestEntityModel';
import * as ValidationTestEndpoint from 'Frontend/generated/ValidationTestEndpoint';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';

@customElement('validation-test-form-view')
export class ValidationTestFormView extends View {
  private binder = new Binder(this, ValidationTestEntityModel);

  render() {
    return html`
      <h3>Validation Test Form</h3>
      <vaadin-vertical-layout>
        <vaadin-text-field label="Min max length string" ${field(this.binder.model.minMaxLengthString)}></vaadin-text-field>
        <vaadin-text-field label="Min max length custom message" ${field(this.binder.model.minMaxLengthCustomMessage)}></vaadin-text-field>
        <vaadin-text-field label="Min max length custom message 2" ${field(this.binder.model.minMaxLengthCustomMessage2)}></vaadin-text-field>
        <vaadin-text-field label="Min length custom message" ${field(this.binder.model.minLengthCustomMessage)}></vaadin-text-field>
        <vaadin-text-field label="Not blank string" ${field(this.binder.model.notBlankString)}></vaadin-text-field>
        <vaadin-text-field label="Not empty string" ${field(this.binder.model.notEmptyString)}></vaadin-text-field>
        <vaadin-email-field label="Email address" ${field(this.binder.model.email)}></vaadin-email-field>
        <vaadin-horizontal-layout class="button-layout" theme="spacing">
          <vaadin-button theme="primary" @click="${this.save}"> Save </vaadin-button>
          <vaadin-button @click="${this.clearForm}"> Cancel </vaadin-button>
        </vaadin-horizontal-layout>
      </vaadin-vertical-layout>
    `;
  }

  private async save() {
    try {
      await this.binder.submitTo(ValidationTestEndpoint.update);
      this.clearForm();
      showNotification('ValidationTestEntity details stored.', { position: 'bottom-start' });
    } catch (error: any) {
      if (error instanceof EndpointError) {
        showNotification('Server error. ' + error.message, { position: 'bottom-start' });
      } else {
        throw error;
      }
    }
  }

  private clearForm() {
    this.binder.clear();
  }
}
