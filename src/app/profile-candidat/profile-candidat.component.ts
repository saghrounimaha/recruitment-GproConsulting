import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {MustMatch} from "../home/must-match-directive";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CandidatService} from "../services/candidat.service";
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile-candidat.component.html',
  styleUrls: ['./profile-candidat.component.css']
})
export class ProfileCandidatComponent implements OnInit {
  candidat;
  registerCandidatForm: FormGroup;
  submitted = false;
  filesToUpload: Array<File>;
  photo;

  constructor(private imageService: ImageService, private candudatservice: CandidatService, private authenService: AuthentificationService, private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.registerCandidatForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],

      adresse: [''],

      niveau_etude: [''],
      compte_linkdln: [''],

      telephone: [''],
      email: ['']


    });
    this.getprofile();
  }

  get f() {
    return this.registerCandidatForm.controls;
  }

  getprofile() {
    this.authenService.getprofile().subscribe((res: any) => {
      console.log(res);
      this.candidat = res;

    })
  }

  modifprofile() {
    this.submitted = true;
    console.log(this.registerCandidatForm.value);
    // stop here if form is invalid


    const data = {

      nom: this.registerCandidatForm.value.nom,
      prenom: this.registerCandidatForm.value.prenom,
      email: this.registerCandidatForm.value.email,
      telephone: this.registerCandidatForm.value.telephone,
      compte_linkdln: this.registerCandidatForm.value.compte_linkdln,
      niveau_etude: this.registerCandidatForm.value.niveau_etude,


      adresse: this.registerCandidatForm.value.adresse,

      photo: this.filesToUpload[0].name

    };
    this.candudatservice.modif(data, this.candidat.id).subscribe(result => {
      console.log(result);
      this.imageService.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })

    });
    window.location.reload();


  }

  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;
    console.log("image", this.filesToUpload)
    this.photo = file.target.files[0]['name'];
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
