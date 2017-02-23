import {API} from '../../../constants';
import {Injectable} from "@angular/core";
import {Http} from '@angular/http';




@Injectable()
export class DBService {

  constructor(private http: Http) {
  }

  exportDB(db) {
    window.open(API + 'export/' + db);
  }

  listDatabases() {

    let url = API + 'listDatabases';
    return this.http.get(url).toPromise().then((data) => {
      return data.json();
    });
  }

}

