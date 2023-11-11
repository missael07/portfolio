import { Component, OnDestroy } from '@angular/core';
import { Subject, map, takeUntil } from 'rxjs';
import { NetlifySite } from 'src/app/models/netlify-sites';
import { GithubService } from 'src/app/services/github.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnDestroy{
  // nfp_HzS4Voo3Z6NTDQQET61uH4Gatt6SSMHae4cf
  repos: any[] = [];
protected _onDestroy$ = new Subject<void>();

  constructor(private githubService: GithubService, private loadingService: LoadingService){
    this.getRepos();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
  getRepos(){
    this.loadingService.show();
    this.githubService.getSites().pipe(
      takeUntil(this._onDestroy$)
    )
    .subscribe({
      next: ({sites}) => {
        this.repos = sites;
        this.loadingService.hide();
      }
    });
  }
}
