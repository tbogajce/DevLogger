import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Component',
        date: new Date('12/27/2020 12:37:34'),
      },
      {
        id: '2',
        text: 'Added Login',
        date: new Date('12/27/2020 12:39:13'),
      },
      {
        id: '3',
        text: 'Added Bootstrap',
        date: new Date('12/27/2020 12:59:26'),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
