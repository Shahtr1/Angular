import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { relative } from 'path';
import { OtherServersService } from '../other-servers.service';

@Component({
  selector: 'app-other-server',
  templateUrl: './other-server.component.html',
  styleUrls: ['./other-server.component.css']
})
export class OtherServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: OtherServersService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
