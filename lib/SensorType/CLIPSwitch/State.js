'use strict';

let AbstractSensorState = require('../AbstractSensorState');

/**
 * CLIPSwitch sensor: State
 */
class State extends AbstractSensorState {
  /**
   * Get button event
   *
   * @return {int} Button event
   */
  get buttonEvent() {
    return this.attributes.get('buttonevent');
  }

  /**
   * Set button event
   *
   * @param {int} event Button event
   */
  set buttonEvent(event) {
    this.attributes.set('buttonevent', parseInt(event));
  }
}

module.exports = State;