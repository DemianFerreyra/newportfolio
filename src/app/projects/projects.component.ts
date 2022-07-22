import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import proyectos from "./allprojects"

interface Project{
  name : String;
  link: String;
  img?: String;
  desc: String;
}


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  faGitHub = faGithub;
  mobile: Boolean = false;
  projects: Array<Project> = [];
  currentPage: any = 0;
  currentMobile: any = 0;
  pages: Array<any> = [];


  @HostListener('window:resize', ['$event'])
     onResize(event: any) {
      if (window.matchMedia("(min-width: 767px)").matches) {
        this.mobile = false;
      }else{
        this.mobile = true;
      }
   }
  constructor() {}

  ngOnInit(): void {
    this.setArray();
    this.pages = [...Array(Math.ceil(proyectos.length / 2))]
  }


  mobileArray(index:any){
    if(index >= proyectos.length){
      this.currentMobile = 0
    }else{
      this.currentMobile = index;
    }
    this.projects = []

    proyectos.forEach((e:any, i) =>{
      if(index === i){
        const res: Project = {
          name: e.name,
          link: e.link,
          desc: e.desc,
          img: e.img?e.img:"https://niixer.com/wp-content/uploads/2020/11/javascript.png"
        }
        this.projects.push(res)
      }
    })
  }
  setArray(){
    this.projects = [];
      proyectos.forEach((e:any, index) =>{
        if(index >= 2 * this.currentPage && index < 2 * (this.currentPage + 1)){
          const res: Project = {
            name: e.name,
            link: e.link,
            desc: e.desc,
            img: e.img?e.img:"https://niixer.com/wp-content/uploads/2020/11/javascript.png"
          }
          this.projects.push(res)
        }else{
          return
        }
      })
  }
  setPage(page:Number){
    this.currentPage = page;
    this.setArray();
  }
}
