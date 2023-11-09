import { Component, OnInit } from '@angular/core';
import Glide, {
  Controls,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  ngOnInit() {
    new Glide('.glide').mount({ Controls, Breakpoints });
  }
}
