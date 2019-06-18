import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Data, DataService }  from '../data/data.service';

@Component({
  selector: 'app-function-binding-on-push',
  templateUrl: './function-binding-on-push.component.html',
  styleUrls: ['./function-binding-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FunctionBindingOnPushComponent implements OnInit {

  constructor(private service: DataService) { }

  data() {
    console.log('FunctionBindingOnPushComponent', 'fetch data');
    return this.service.dummyData.dummyValue;
  }

  ngOnInit() {
    console.log('FunctionBindingOnPushComponent', 'ngOnInit');
  }

  ngOnChanges() {
console.log('FunctionBindingOnPushComponent', 'ngOnChanges');
  }

  ngDoCheck() {
console.log('FunctionBindingOnPushComponent', 'ngDoCheck');
  }

  ngAfterContentInit() {
console.log('FunctionBindingOnPushComponent', 'ngAfterContentInit');
  }

  ngAfterContentChecked() {
console.log('FunctionBindingOnPushComponent', 'ngAfterContentChecked');
  }

  ngAfterViewInit() {
console.log('FunctionBindingOnPushComponent', 'nngAfterViewInitgOnInit');
  }

  ngAfterViewChecked() {
console.log('FunctionBindingOnPushComponent', 'ngAfterViewChecked');
  }

  ngOnDestroy() {
console.log('FunctionBindingOnPushComponent', 'ngOnDestroy');
  }
}