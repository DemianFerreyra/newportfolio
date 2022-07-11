import { Component, OnInit } from '@angular/core';
import proyectos from "./allprojects"

interface Project{
  name : String;
  img?: File;
  desc: String;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];
  constructor() { }

  ngOnInit(): void {
    proyectos.forEach((e:any) =>{
      console.log('hola', e)
      const res: Project = {
        name: e.name,
        desc: e.desc,
      }
      this.projects.push(res)
      console.log(this.projects)
    })
  }
}
