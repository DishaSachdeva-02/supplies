import { Component, inject, TemplateRef  } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {  FormGroup, FormsModule ,ReactiveFormsModule, Validators} from '@angular/forms';
import { SupplyService } from '../supply.service';
import { supply } from '../supply';
import { Location } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-supplyform',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,NgIf],
  templateUrl: './supplyform.component.html',
  styleUrl: './supplyform.component.css'
})
export class SupplyformComponent {
 
  get name(){
    return this.supplyform.get('name');
  }
  get quantity(){
    return this.supplyform.get('quantity');
  }
  get reorderLevel(){
    return this.supplyform.get('reorderLevel');
  }
  constructor(private fb : FormBuilder,private supplyservice:SupplyService,private location:Location){
  }
  supplyform!:FormGroup;
  
  ngOnInit(){
    this.supplyform = this.fb.group({
      name : ['',Validators.required],
      quantity : ['',Validators.required],
      reorderLevel:['',Validators.required],
    })
  }
  add(name:string,quantity1:string,reorderLevel1:string){
   name=name.trim();
   const quantity=Number(quantity1);
   const reorderLevel=Number(reorderLevel1);
   this.supplyservice.addsupply({name,quantity,reorderLevel} as supply).subscribe(()=>{
      this.goback();
   });
   this.supplyform.reset();
  }
  goback(){
    this.location.back();
  }
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
