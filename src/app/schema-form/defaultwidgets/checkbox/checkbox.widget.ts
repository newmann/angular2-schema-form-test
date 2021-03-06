import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-checkbox-widget',
  template: `
    <md-checkbox [disabled]="schema.readOnly" [name]="name" [formControl]="control" [id] = "id" >
        {{schema.label}}
    </md-checkbox>
    
`
})
export class CheckboxWidget extends ControlWidget {}
// template: `<div class="widget form-group">
//     <label [attr.for]="id" class="horizontal control-label">
//         {{ schema.title }}
//     </label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<div class="checkbox">
// 		<label class="horizontal control-label">
// 			<input [formControl]="control" [attr.name]="name" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" [attr.disabled]="schema.readOnly">
// 			<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
// 			{{schema.description}}
// 		</label>
// 	</div>
// </div>`

// <md-hint *ngIf="schema.description">{{schema.description}}</md-hint>
