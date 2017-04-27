import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-range-widget',
  template: `
    <md-slider class="full-width"
        [formControl]="control"
        [id]="id"
        [disabled]="schema.readOnly?true:null"
        [invert]="invert"
        [max]="schema.maximum"
        [min]="schema.minimum"
        [step]="1"
        [thumb-label]="thumbLabel"
        [tick-interval]="tickInterval"
        [value]="value"
        [vertical]="vertical">
    </md-slider>
`,
  styles:['.full-width{ width: 100%;}']
})
export class RangeWidget extends ControlWidget {}

// template: `<div class="widget form-group">
// 	<label [attr.for]="id" class="horizontal control-label">
// 		{{ schema.title }}
// 	</label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<input [name]="name" class="text-widget range-widget" [attr.id]="id"
// 	[formControl]="control" [attr.type]="'range'" [attr.min]="schema.minimum" [attr.max]="schema.maximum" [attr.disabled]="schema.readOnly?true:null" >
// 	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden">
// </div>`
// })
