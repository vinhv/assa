import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {

  _width: string = '200px'
  @Input() set width(value: number) {
    this._width = value + 'px'
  }

  _height: string = '36px'
  @Input() set height(value: number) {
    this._height = value + 'px'
  }

  @Input() placeholder = 'Nhập từ khóa tìm kiếm'

  @Output() onSearch = new EventEmitter()

  search = this.fb.group({
    searchInput: ['']
  })

  constructor(private fb: FormBuilder) {
  }

  submit() {
    this.onSearch.emit(this.search.controls.searchInput.value)
  }
}
