import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {

  _width: string = '200px'
  @Input() set width(value: number) {
    this._width = value + 'px'
  }

  _height: string = '36px'
  @Input() set height(value: number) {
    this._height = value + 'px'
  }
}
