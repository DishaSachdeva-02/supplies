import { Component } from '@angular/core';
import { supply } from '../supply';
import { SupplyService } from '../supply.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supply',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './supply.component.html',
  styleUrl: './supply.component.css'
})
export class SupplyComponent {
  SupplyList?:supply[];
  constructor(private supplyservice:SupplyService){}
  ngOnInit(){
   this.getsupplylist();
  }
  getsupplylist(){
  
    return this.supplyservice.getlist().subscribe(l=>this.SupplyList=l);

  }

  delete(id:number){
    this.SupplyList=this.SupplyList?.filter(l=>l.id!=id);
    this.supplyservice.deletesupply(id).subscribe();
  }
}
