import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-radio-widget',

  template: `<md-radio-group class="column-group">
    	<label>{{schema.title}}</label>
      <span *ngIf="schema.description">{{schema.description}}</span>
	    <md-radio-button *ngFor="let option of schema.oneOf" 
	      [name]="name" 
	      [value]="option.enum[0]" 
	      [disabled]="schema.readOnly">
		    {{option.label}}
	    </md-radio-button>
    </md-radio-group>`,
  styles:['.column-group{ display: inline-flex;flex-direction: column;}']
})
export class RadioWidget extends ControlWidget {}

// template: `<div class="widget form-group">
// 	<label>{{schema.title}}</label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<div *ngFor="let option of schema.oneOf" class="radio">
// 		<label class="horizontal control-label">
// 			<input [formControl]="control" [attr.name]="name" value="{{option.enum[0]}}" type="radio"  [attr.disabled]="schema.readOnly">
// 			{{option.description}}
// 		</label>
// 	</div>
// 	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
// </div>`
