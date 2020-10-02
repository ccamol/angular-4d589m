import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupByDate'})
export class GroupByPipe implements PipeTransform {
    transform(collection: Array<any>, property: string = 'date'): Array<any> {
        if(!collection) {
            return null;
        }
        const gc = collection.reduce((previous, current)=> {
            if(!previous[current[property]]) {
                previous[current[property]] = [];
            }
                current.events.forEach(x => previous[current[property]].push(x));
            return previous;
        }, {});
        return Object.keys(gc).map(date => ({ date: date, events: gc[date] }));
    }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  events = [{
      date: '2017-12-26',
      events: [{
        id: 1,
        title: 'First event'
      }, {
        id: 3,
        title: 'Third event'
      }]
    },{
      date: '2017-12-26',
      events: [{
        id: 4,
        title: 'Fourth event'
      }, {
        id: 5,
        title: 'Fifth event'
      }]
    }, {
      date: '2017-12-30',
      events: [{
        id: 2,
        title: 'Second event'
      }]
    }, {
      date: '2017-12-31',
      events: [{
        id: 4,
        title: 'Last event'
      }]
    }];
}
