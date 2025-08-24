import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'comp-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  @Prop() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  };

  render() {
    return (
      <button
        class={`button button--${this.variant} button--${this.size} ${this.disabled ? 'button--disabled' : ''}`}
        disabled={this.disabled}
        type={this.type}
        onClick={this.handleClick}
      >
        test 123
        <slot></slot>
      </button>
    );
  }
}
