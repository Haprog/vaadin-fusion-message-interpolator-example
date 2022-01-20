import { showNotification } from '@vaadin/flow-frontend/a-notification';
import { Binder, field } from '@vaadin/form';
import { EndpointError } from '@vaadin/fusion-frontend';
import '@vaadin/button';
import '@vaadin/horizontal-layout';
import '@vaadin/vertical-layout';
import '@vaadin/text-field';
import '@vaadin/email-field';
import ValidationTestEntityModel from 'Frontend/generated/com/example/application/data/entity/ValidationTestEntityModel';
import * as ValidationTestEndpoint from 'Frontend/generated/ValidationTestEndpoint';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { View } from '../view';

@customElement('validation-test-form-view')
export class ValidationTestFormView extends View {
  private binder = new Binder(this, ValidationTestEntityModel);

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
    const { value } = this.binder;
    value.testNull = 'foo';
    value.testNotNull = undefined;
    value.testAssertFalse = true;
    value.testNegativeOrZero = 1;
    value.testPositiveOrZero = -1;
    value.testSize2 = 'foobarbaz';
    value.testDigits = 1.2;
    value.testPast = '2030-01-01';
    value.testFuture = '2020-01-01';
    value.testPattern = 'foo';
    value.testEmail = 'foo';
    this.binder.validate();
  }

  render() {
    return html`
      <vaadin-vertical-layout>
        <h3>Validation Test Form</h3>
        <vaadin-text-field label="Min max length string" ${field(this.binder.model.minMaxLengthString)}></vaadin-text-field>
        <vaadin-text-field label="Min max length custom message" ${field(this.binder.model.minMaxLengthCustomMessage)}></vaadin-text-field>
        <vaadin-text-field label="Min max length custom message 2" ${field(this.binder.model.minMaxLengthCustomMessage2)}></vaadin-text-field>
        <vaadin-text-field label="Min length custom message" ${field(this.binder.model.minLengthCustomMessage)}></vaadin-text-field>
        
        <h4>Simple test to see error message for every type of built in validator</h4>
        <vaadin-text-field label="testNull" ${field(this.binder.model.testNull)}></vaadin-text-field>
        <vaadin-text-field label="testNotNull" ${field(this.binder.model.testNotNull)}></vaadin-text-field>
        <vaadin-text-field label="testAssertTrue" ${field(this.binder.model.testAssertTrue)}></vaadin-text-field>
        <vaadin-text-field label="testAssertFalse" ${field(this.binder.model.testAssertFalse)}></vaadin-text-field>
        <vaadin-text-field label="testMin" ${field(this.binder.model.testMin)}></vaadin-text-field>
        <vaadin-text-field label="testMax" ${field(this.binder.model.testMax)}></vaadin-text-field>
        <vaadin-text-field label="testDecimalMin" ${field(this.binder.model.testDecimalMin)}></vaadin-text-field>
        <vaadin-text-field label="testDecimalMax" ${field(this.binder.model.testDecimalMax)}></vaadin-text-field>
        <vaadin-text-field label="testNegative" ${field(this.binder.model.testNegative)}></vaadin-text-field>
        <vaadin-text-field label="testNegativeOrZero" ${field(this.binder.model.testNegativeOrZero)}></vaadin-text-field>
        <vaadin-text-field label="testPositive" ${field(this.binder.model.testPositive)}></vaadin-text-field>
        <vaadin-text-field label="testPositiveOrZero" ${field(this.binder.model.testPositiveOrZero)}></vaadin-text-field>
        <vaadin-text-field label="testSize1" ${field(this.binder.model.testSize1)}></vaadin-text-field>
        <vaadin-text-field label="testSize2" ${field(this.binder.model.testSize2)}></vaadin-text-field>
        <vaadin-text-field label="testDigits" ${field(this.binder.model.testDigits)}></vaadin-text-field>
        <vaadin-text-field label="testPast" ${field(this.binder.model.testPast)}></vaadin-text-field>
        <vaadin-text-field label="testFuture" ${field(this.binder.model.testFuture)}></vaadin-text-field>
        <vaadin-text-field label="testPattern" ${field(this.binder.model.testPattern)}></vaadin-text-field>
        <vaadin-text-field label="testNotEmpty" ${field(this.binder.model.testNotEmpty)}></vaadin-text-field>
        <vaadin-text-field label="testNotBlank" ${field(this.binder.model.testNotBlank)}></vaadin-text-field>
        <vaadin-email-field label="testEmail" ${field(this.binder.model.testEmail)}></vaadin-email-field>

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
