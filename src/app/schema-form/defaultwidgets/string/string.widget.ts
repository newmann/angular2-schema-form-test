import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-string-widget',
  template: `<md-input-container class="full-width" >
    <input mdInput [name]="name" [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"  [attr.type]="this.getInputType()" [attr.id]="id"  [formControl]="control" placeholder="{{schema.title}}" [attr.disabled]="(schema.widget.id=='color' && schema.readOnly)?true:null">
    <input mdInput *ngIf="(schema.widget.id==='color' && schema.readOnly)" [attr.name]="name" type="hidden" [formControl]="control">
    <md-hint *ngIf="schema.description" >{{schema.description}}</md-hint>
</md-input-container>`,
  styles:['.full-width{ width: 100%;}']
})
export class StringWidget extends ControlWidget {

    getInputType() {
        if (!this.schema.widget.id || this.schema.widget.id === 'string') {
            return 'text';
        } else {
            return this.schema.widget.id;
        }
    }
}

// template: `<div class="widget form-group">
//     <label [attr.for]="id" class="horizontal control-label">
//     	{{ schema.title }}
//     </label>
//     <span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
//     <input [name]="name" [attr.readonly]="(schema.widget.id!=='color') && schema.readOnly?true:null"  class="text-widget.id textline-widget form-control" [attr.type]="this.getInputType()" [attr.id]="id"  [formControl]="control" [attr.placeholder]="schema.placeholder" [attr.disabled]="(schema.widget.id=='color' && schema.readOnly)?true:null">
//     <input *ngIf="(schema.widget.id==='color' && schema.readOnly)" [attr.name]="name" type="hidden" [formControl]="control">
// </div>`
