import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  visibleSidebar1: boolean;

  constructor() { }

  ngOnInit() {
  }

}
