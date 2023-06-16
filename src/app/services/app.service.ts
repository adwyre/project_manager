import { Injectable } from "@angular/core";
import { Project } from "../project";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  projectsList: Project [] = [
    {
      id: 1,
      title: "Spring Campaign",
      tag: "Marketing",
      description: "Short description of this project goes here.",
      assigned: [
        {
          id: 12,
          firstName: "John",
          lastName: "Smith",
          email: "johnsmith@mail.com"
        },
        {
          id: 22,
          firstName: "Jane",
          lastName: "Doe",
          email: "janedoe@mail.com"
        }
      ],
      tasks: [
        {
          id: 13,
          title: "Design posters",
          completed: false
        },
        {
          id: 14,
          title: "Hire influences",
          completed: true
        }
      ],
      status: "In Progress",
      priority: "Med",
      startDate: "02/08/2023",
      dueDate: "03/20/2023",
      files: [{
        id: 15,
        title: "Brand Guide",
        path: "file.pdf"
      }],
      completed: false
    },
    {
      id: 2,
      title: "App Feature",
      tag: "Development",
      description: "We need a feature that allows users to do x, y, z.",
      assigned: [
        {
          id: 22,
          firstName: "Jane",
          lastName: "Doe",
          email: "janedoe@mail.com"
        }
      ],
      tasks: [
        {
          id: 23,
          title: "Build frontend",
          completed: false
        },
        {
          id: 24,
          title: "Build backend",
          completed: false
        }
      ],
      status: "To Do",
      priority: "High",
      startDate: "05/21/2023",
      dueDate: "07/01/2023",
      files: [],
      completed: false
    }
  ];

  constructor() {

  }

  getProjectsList() {
    return this.projectsList;
  }
}