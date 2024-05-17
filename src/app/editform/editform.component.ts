import { Component,inject,TemplateRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {  FormGroup, FormsModule ,ReactiveFormsModule, Validators} from '@angular/forms';
import { SupplyService } from '../supply.service';
import { supply } from '../supply';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,NgIf],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {
  get name(){
    return this.supplyform.get('name');
  }
  get quantity(){
    return this.supplyform.get('quantity');
  }
  get reorderLevel(){
    return this.supplyform.get('reorderLevel');
  }
  constructor(private fb : FormBuilder,private supplyservice:SupplyService,private location:Location,private activatedroute:ActivatedRoute){
  }
  supplyform!:FormGroup;
  selecteditem!:supply;
  ngOnInit(){
    this.supplyform = this.fb.group({
      name : ['',Validators.required],
      quantity : ['',Validators.required],
      reorderLevel:['',Validators.required],
    })
    this.edit();
  }
  edit(){
    const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
    console.log(id);
    this.supplyservice.getlistbyid(id).subscribe(i=>{
      this.selecteditem=i
       this.supplyform.patchValue({
      name:this.selecteditem.name,
      quantity:this.selecteditem.quantity,
      reorderLevel:this.selecteditem.reorderLevel
    });
    });
   
    
  }
  update(name:string,quantity1:string,reorderLevel1:string){
   const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
   const quantity=Number(quantity1);
   const reorderLevel=Number(reorderLevel1);
   this.supplyservice.updatesupply({id,name,quantity,reorderLevel} as supply).subscribe(()=>{
      this.goback();
   });
   
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
