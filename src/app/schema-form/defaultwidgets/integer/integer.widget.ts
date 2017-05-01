import {
  Component,
} from '@angular/core';
import {

} from '@angular/material';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-integer-widget',
  template: `<md-input-container class="full-width">
	  <input mdInput [readonly]="schema.readOnly?true:null" [name]="name" [formControl]="control" [type]="'number'" [min]="schema.minimum" [max]="schema.maximum" [placeholder]="schema.label" [id] = "id" >
	  <md-hint *ngIf="schema.description">{{schema.description}}</md-hint>
	  <!--<md-hint *ngIf="validators">{{validators.}}</md-hint>-->
</md-input-container>
  <div [hidden]="!(control.invalid && control.touched)">
      {{control.errors | json}}
  </div>

`,
  styles:['.full-width{ width: 100%;};[hidden] {display: none;}']
})
export class IntegerWidget extends ControlWidget {}


// template: `<div class="widget form-group">
// 	<label [attr.for]="id" class="horizontal control-label">
// 		{{ schema.title }}
// 	</label>
// 	<div class="widget form-group">
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<input [attr.readonly]="schema.readOnly?true:null" [name]="name" class="text-widget integer-widget form-control" [formControl]="control" [attr.type]="'number'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.placeholder]="schema.placeholder" >
// </div>`
