import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-textarea-widget',
  template: `<md-input-container class="full-width" >
    <textarea  mdInput [name]="name" [attr.readonly]="schema.readOnly?true:null" [attr.id]="id"  [formControl]="control" placeholder="{{schema.title}}" >
    </textarea>
    <md-hint *ngIf="schema.description" >{{schema.description}}</md-hint>
</md-input-container>`,
  styles:['.full-width{ width: 100%;}']
})
export class TextAreaWidget extends ControlWidget {}

// template: `<div class="widget form-group">
// 	<label [attr.for]="id" class="horizontal control-label">
// 		{{ schema.title }}
// 	</label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<textarea [attr.readonly]="schema.readOnly" [name]="name" class="text-widget textarea-widget form-control" [formControl]="control"></textarea>
// </div>`
