import { Component, OnInit } from '@angular/core';
import { faAngular, faAws, faGithub, faInstagram, faJs, faLinkedin, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  faJs = faJs;
  faNode = faNodeJs;
  faAngular = faAngular;
  faVuejs = faVuejs;
  faAWS = faAws;
  faReact = faReact;
  faGitHub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
