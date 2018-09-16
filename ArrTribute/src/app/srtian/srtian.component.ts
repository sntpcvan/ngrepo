import { Component, OnInit } from '@angular/core';
import { ArrServiceService } from '../arr-service.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-srtian',
  templateUrl: './srtian.component.html',
  styleUrls: ['./srtian.component.css']
})
export class SrtianComponent implements OnInit {

  constructor(private arrSer:ArrServiceService) { }
  private songObs:Observable<any>;
  private songObject:any = {};
  lyric:string="test";
  ngOnInit() {
  this.songObs = this.arrSer.getSongJSON();
  this.songObs.subscribe(r=>
    {this.songObject= r;
      console.log(this.songObject)
    }   
  )
  }

}
