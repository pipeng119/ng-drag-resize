import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-trackby-item',
  template: `
    <div class="button-holder">
        <div style="font-size: 30px">ID: {{id}}</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TrackByItemComponent implements OnInit {
  @Input() id: string;

  ngOnInit() {
      console.info(`Init ${this.id}`);
  }
}
