import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient ) { }
  
  url = '../../assets/userslist.json';
  
  getUserData(){
	return this.http.get(this.url)
			.pipe(
				map(x => { 				
					let userArray = x;
					return userArray;
				}),
				catchError(this.handleError)
			)
  }
  
  
  handleError(error: any) {
     let errMsg = (error.message) ? error.message :
        error.status ? '${ error.status } - ${ error.statusText}' : 'Server error';
        return throwError(errMsg);
    }
}
