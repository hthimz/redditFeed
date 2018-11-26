import { Component , OnInit} from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public feed = [];
  constructor(private api:ApiService){


  }
ngOnInit(){
  this.api.getData("r/worldnews/top/.json?count=20").subscribe(
    (data:any) => 
    {
      console.log(data);
      this.feed = data.data.children;
    }
  );
}  

}
