import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-file-widget',
  template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.label }}
	</label>
	<input [name]="name" class="text-widget file-widget" [attr.id]="id" [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null" >
  <md-hint *ngIf="schema.description" class="formHelp">{{schema.description}}</md-hint>
</div>`
})
export class FileWidget extends ControlWidget {

  constructor() {
    super();
  }
}

// template: `<div class="widget form-group">
// 	<label [attr.for]="id" class="horizontal control-label">
// 		{{ schema.title }}
// 	</label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<input [name]="name" class="text-widget file-widget" [attr.id]="id" [formControl]="control" type="file" [attr.disabled]="schema.readOnly?true:null" >
// 	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
// </div>`
// })
