import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SynonymeModel} from '../model/Synonyme.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SynonymeService} from '../service/synonyme.service';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {

  synonymes: SynonymeModel[];
  addForm: FormGroup;
  UpdateForm: FormGroup;

  loading = false;
submitted = false;

  constructor(
    private modalService: NgbModal,
    private synonymeService: SynonymeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  

  get f() {
    return this.addForm.controls;
  }
  get g() {
    return this.addForm.controls;
  }


  ngOnInit() {
    this.getAllsynonyme();
    this.addForm = this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.UpdateForm = this.formBuilder.group({
      code: ['', Validators.required],
    });

  }

  getAllsynonyme(): void {
    this.synonymeService.getAllSynonyme().subscribe(data => {
      this.synonymes = data;

    });
  }


 updatesynonyme(synonymes: SynonymeModel , id: string) {
   
      this.synonymeService.updateSynonyme(synonymes, id).subscribe(data => {
        console.log(data);
        this.getAllsynonyme();
      });
}

delatesynonyme( id: string) {

  this.synonymeService.deleteSynonyme(id).subscribe(data => {
    console.log(data);
    this.getAllsynonyme();
  });
}


openLg(content) {
  this.modalService.open(content, {size: 'lg'});
}
openSm(content2,synonyme) {
  console.log(synonyme._id)
  localStorage.setItem('x',synonyme._id)
  this.modalService.open(content2, { size: 'sm' });
}


onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.addForm.invalid) {
    return;
  }
  this.loading = true;
  console.log(this.addForm.value);
  this.synonymeService.addSynonyme(this.addForm.value)
    .subscribe(
      (data) => {
        this.getAllsynonyme();
      },
      (error) => {
        console.log('er' + error);
      });

}

onSubmit2(synonyme : SynonymeModel) {
  console.log(synonyme._id)

  this.submitted = true;
  // stop here if form is invalid
  if (this.UpdateForm.invalid) {
    return;
  }
  this.loading = true;
  console.log(this.UpdateForm.value);
  console.log(synonyme._id)
  this.synonymeService.updateSynonyme(this.UpdateForm.value , localStorage.getItem('x'))
    .subscribe(
      (data) => {
        this.getAllsynonyme();
      },
      (error) => {
        console.log('er' + error);
      });

}
deleteSyno(synonyme: SynonymeModel) {
  if (confirm('Are you sure to delete this record ?') === true) {
  this.synonymeService.deleteSynonyme(synonyme._id).subscribe(data => {
    console.log(data);
    this.getAllsynonyme();

  });
}
}

}
