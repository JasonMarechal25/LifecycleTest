import { Component, OnInit, Input } from '@angular/core';
import { Data, DataService }  from '../data/data.service';


@Component({
  selector: 'app-function-binding',
  templateUrl: './function-binding.component.html',
  styleUrls: ['./function-binding.component.css'],
})
export class FunctionBindingComponent implements OnInit {

  constructor(private service: DataService) { }

  data() {
    console.log('FunctionBindingComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    console.log('FunctionBindingComponent', 'ngOnInit');
  }

  ngOnChanges() {
console.log('FunctionBindingComponent', 'ngOnChanges');
  }

  ngDoCheck() {
console.log('FunctionBindingComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
console.log('FunctionBindingComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
console.log('FunctionBindingComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
console.log('FunctionBindingComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
console.log('FunctionBindingComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
console.log('FunctionBindingComponent', 'ngOnDestroy');
  }
}