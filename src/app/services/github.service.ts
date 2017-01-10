import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	private client_id = '93bbcbfe619c925c75f8';
	private client_secret = 'd3b285fe458ff91757bd18e9183129c996c47702';

    constructor(private _http:Http ) {
  		console.log('Github service ready');
  		this.username = 'arnavpuri';
    }

    getUser(){
	   	return this._http.get('http://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		   	.map(res => res.json());

    }

    getRepos(){
	   	return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		   	.map(res => res.json());

    }

    updateUser(username:string){
    	this.username= username;

    }

}
