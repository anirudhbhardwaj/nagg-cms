import { Component, OnInit } from '@angular/core';
import {EnvService} from "../shared/env.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public environment: any;

  constructor(private envService: EnvService) {
    this.environment = this.envService.getEnv();
  }

  ngOnInit() {
  }

}
