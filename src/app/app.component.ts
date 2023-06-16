import { Component } from '@angular/core';
import { Project } from './project';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';

  projectsList: Project[] = [];

  constructor(private appService : AppService) {}

  ngOnInit(): void {
    this.projectsList = this.appService.getProjectsList();
  }
}
