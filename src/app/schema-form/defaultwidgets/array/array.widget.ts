import { Component } from '@angular/core';

import { ArrayLayoutWidget } from '../../widget';

@Component({
  selector: 'sf-array-widget',
  template: `<md-list>
	<label>{{ schema.label }}</label>
	<md-list-item *ngFor="let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex">
		<sf-form-element [formProperty]="itemProperty"></sf-form-element>
		<button md-raised-button (click)="removeItem(i)" class="btn btn-default array-remove-button">
			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
		</button>
	</md-list-item>
	<md-divider></md-divider>
	<button md-raised-button (click)="addItem()" class="btn btn-default array-add-button">
		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
	</button>
	
	<md-hint *ngIf="schema.description" class="formHelp">{{schema.description}}</md-hint>
</md-list>`
})
export class ArrayWidget extends ArrayLayoutWidget {

  addItem() {
    this.formProperty.addItem();
  }

  removeItem(index: number) {
    this.formProperty.removeItem(index);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
// template: `<div class="widget form-group">
// 	<label [attr.for]="id" class="horizontal control-label">
// 		{{ schema.title }}
// 	</label>
// 	<span *ngIf="schema.description" class="formHelp">{{schema.description}}</span>
// 	<div *ngFor="let itemProperty of formProperty.properties; let i=index; trackBy:trackByIndex">
// 		<sf-form-element [formProperty]="itemProperty"></sf-form-element>
// 		<button (click)="removeItem(i)" class="btn btn-default array-remove-button">
// 			<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
// 		</button>
// 	</div>
// 	<button (click)="addItem()" class="btn btn-default array-add-button">
// 		<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
// 	</button>
// </div>`
