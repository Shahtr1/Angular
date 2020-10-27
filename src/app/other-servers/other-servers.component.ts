import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtherServersService } from './other-servers.service';

@Component({
  selector: 'app-other-servers',
  templateUrl: './other-servers.component.html',
  styleUrls: ['./other-servers.component.css']
})
export class OtherServersComponent implements OnInit {

   servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: OtherServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['other-servers']);
    this.router.navigate(['other-servers'], {relativeTo: this.route});
  }

}
