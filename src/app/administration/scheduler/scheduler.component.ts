import {Component} from '@angular/core';

import * as $ from "jquery"

import {downgradeComponent} from '@angular/upgrade/static';
import {NotificationService} from "../../core/services/notification.service";
import {DBService} from "../../core/services/database.service";
import {AgentService} from "../../core/services/agent.service";

declare var angular:any

@Component({
  selector: 'scheduler',
  templateUrl: "./scheduler.component.html",
  styleUrls: []
})

class SchedulerComponent {

  private workingDatabase;
  private databases;

  private functions;

  private schedules;
  private workingSchedule;

  constructor(private notification: NotificationService, private agentService: AgentService,
              private dbService: DBService) {

    // agent
    this.agentService.isActive().then(() => {
      this.init();
    });

  }

  init() {

    // fetching databases' names
    this.dbService.listDatabases().then( (data) => {
      this.databases = data["databases"];
      this.workingDatabase = this.databases[0];
    })

  }


}

angular.module('scheduler.component', []).directive(
  `scheduler`,
  downgradeComponent({component: SchedulerComponent}));


export {SchedulerComponent};
