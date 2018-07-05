import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-request.service';
import { Repos } from '../git-repos';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css'],
  providers: [ GitRequestService]
})
export class GitReposComponent implements OnInit {
  repos: Repos;
  public newName: string; 'anitas+Kitchen';
  public nameToSearch: string;
  public resultCount = 10;

  searchRepos(name) {
    this.newName = '';
    for (const i = 0; i < name.length; 'i ++' ) {
      if (name.charAt(i) === '' ) {
        this.newName = this.newName.concat('+');
      } else if (name.charAt(i) !== '' ) {
        this.newName = this.newName.concat(name.charAt(i));
      }
    }
    // tslint:disable-next-line:no-trailing-whitespace
    this.resultCount = 10;    
    // console.log(this.newName);
    // this.ngOnInit();
    this.getDataFunction();
  }

  loadMore() {
    this.resultCount += 10;
    // this.ngOnInit();
    this.getDataFunction();
  }
  constructor(public gitRepoRequest: GitRequestService) { }

  ngOnInit() {
    this.resultCount = 1;
    this.gitRepoRequest.gitRepos(this.newName, this.resultCount);
    // console.log(this.gitRepoRequest);
  }
  getDataFunction() {
    this.gitRepoRequest.gitRepos(this.newName, this.resultCount);
    // console.log(this.gitRepoRequest);
  }

}
