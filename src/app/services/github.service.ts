import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Netlify } from '../models/netlify';
import { NetlifySite } from '../models/netlify-sites';
import { NetliFySiteClass } from '../models/classes/netlify-site-class';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.netlify.com/api/v1/sites';
  
  constructor(private http: HttpClient) { }

  getSites(): Observable<NetlifySite> {
    const token = 'nfp_HzS4Voo3Z6NTDQQET61uH4Gatt6SSMHae4cf';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<Netlify[]>(`${this.apiUrl}`, { headers })
    .pipe( map((resp: Netlify[]) => {
      console.log(resp)
      const users = resp.map(
        (site) =>
          new NetliFySiteClass(
            site.name.replaceAll('-',' ').replace('missael padilla',''),
            site.url,
            site.build_settings.repo_url,
            site.screenshot_url
          )
      );
      return {
        sites: users
      };
    }));
  }

  getRepositories(): Observable<any[]> {
    const token = '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';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const githubApiUrl = 'https://api.github.com';
    return this.http.get<any[]>(`${githubApiUrl}/repos/`, { headers });
  }
}
