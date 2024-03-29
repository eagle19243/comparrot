import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  ViewEncapsulation,
} from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'fury-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: { class: 'fury-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuryCard {}

// noinspection TsLint
@Component({
  selector: 'fury-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'fury-card-header' },
  template: `
    <div class="fury-card-header-heading-group">
      <ng-content select="fury-card-header-heading"></ng-content>
      <ng-content select="fury-card-header-subheading"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="fury-card-header-actions"></ng-content>
  `,
})
export class FuryCardHeader {}

// noinspection TsLint
@Component({
  selector: 'fury-card-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'fury-card-content' },
  template: ` <ng-content></ng-content>`,
})
export class FuryCardContent {}

// noinspection TsLint
@Directive({
  selector: 'fury-card-header-heading',
  host: { class: 'fury-card-header-heading' },
})
export class FuryCardHeaderTitle {}

// noinspection TsLint
@Directive({
  selector: 'fury-card-header-subheading',
  host: { class: 'fury-card-header-subheading' },
})
export class FuryCardHeaderSubTitle {}

// noinspection TsLint
@Directive({
  selector: 'fury-card-header-actions',
  host: { class: 'fury-card-header-actions' },
})
export class FuryCardHeaderActions {}

// noinspection TsLint
@Directive({
  selector: 'fury-card-actions',
  host: {
    class: 'fury-card-actions',
    '[class.fury-card-actions-align-end]': 'align === "end"',
  },
})
export class FuryCardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}
