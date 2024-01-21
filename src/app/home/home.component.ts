import {Component, OnInit, TemplateRef} from '@angular/core';
import {CandidatService} from '../services/candidat.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResponsableCentreService} from '../services/responsabelcentre.service';
import {ResponsabelSocietyService} from '../services/responsabel-society.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AuthentificationService} from '../services/authentification.service';
import {MustMatch} from './must-match-directive';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  loginForm: FormGroup;
  registerCandidatForm: FormGroup;
  registerSocieteForm: FormGroup;
  registerCentreForm: FormGroup;
  submitted = false;
  isActiveToggleTextPassword = true;
  modalRef: BsModalRef;

  filesToUpload: Array<File>;
  photo;
  choix = 'candidat';

  constructor(private responsableCentreService: ResponsableCentreService,
              private modalService: BsModalService, private authenService: AuthentificationService,
              private candudatservice: CandidatService,
              private formBuilder: FormBuilder, private router: Router,
              private responsabelSocietyService: ResponsabelSocietyService,
              private imageService: ImageService) {

  }

  ngOnInit(): void {

    this.registerCandidatForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      date_Naissance: ['', Validators.required],
      niveau_etude: ['', Validators.required],
      compte_linkdln: ['', Validators.required],

      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmerpassword: ['', Validators.required],

    }, {
      validator: MustMatch('password', 'confirmerpassword')
    });


    this.registerSocieteForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      site_web: ['', Validators.required],

      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmerpassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmpassword')
    });

    this.registerCentreForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],

      siteWeb: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmerpassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmerpassword')
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.getprofile();
  }


  choisirsocite() {
    this.choix = 'societe';

  }

  choisircandiat() {
    this.choix = 'candidat';

  }

  choisircentre() {
    this.choix = 'centre';

  }

  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

  get b() {
    return this.loginForm.controls;
  }

  get f() {
    return this.registerCandidatForm.controls;
  }

  registercandidat() {
    const data = {
      username: this.registerCandidatForm.value.username,
      nom: this.registerCandidatForm.value.nom,
      prenom: this.registerCandidatForm.value.prenom,
      email: this.registerCandidatForm.value.email,
      telephone: this.registerCandidatForm.value.telephone,
      compte_linkdln: this.registerCandidatForm.value.compte_linkdln,
      niveau_etude: this.registerCandidatForm.value.niveau_etude,
      date_Naissance: this.registerCandidatForm.value.date_Naissance,

      password: this.registerCandidatForm.value.password,
      confirmerpassword: this.registerCandidatForm.value.confirmerpassword,
      adresse: this.registerCandidatForm.value.adresse,

      photo: this.filesToUpload[0].name

    };
    this.submitted = true;
    console.log(this.registerCandidatForm.value);
    // stop here if form is invalid
    if (this.registerCandidatForm.invalid) {
      return;
    }

    this.candudatservice.register(data).subscribe(result => {
      console.log(result);
      this.imageService.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })

    });


    window.location.reload();
    this.registerCandidatForm.reset();

  }


  get x() {
    return this.registerSocieteForm.controls;
  }

  registerResponsableSociete() {
      const data = {
        username: this.registerSocieteForm.value.username,
        nom: this.registerSocieteForm.value.nom,
        prenom: this.registerSocieteForm.value.prenom,
        email: this.registerSocieteForm.value.email,
        telephone: this.registerSocieteForm.value.telephone,
        site_web: this.registerSocieteForm.value.site_web,


        password: this.registerSocieteForm.value.password,
        confirmerpassword: this.registerSocieteForm.value.confirmerpassword,
        adresse: this.registerSocieteForm.value.adresse,

        photo: this.filesToUpload[0].name

    };
    this.submitted = true;
    console.log(this.registerSocieteForm.value);
    // stop here if form is invalid
    if (this.registerSocieteForm.invalid) {
      return;
    }

    this.responsabelSocietyService.register(data).subscribe(result => {
      console.log(result);
      this.imageService.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
      });
      window.location.reload();
      this.registerSocieteForm.reset();
    });
  }

  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
  }

  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  get v() {
    return this.registerCentreForm.controls;
  }

  reset() {
    this.submitted = false;
    this.registerCentreForm.reset();
  }

  registerResponsableCentre() {
    const data = {
      username: this.registerCentreForm.value.username,
      nom: this.registerCentreForm.value.nom,
      prenom: this.registerCentreForm.value.prenom,
      email: this.registerCentreForm.value.email,
      telephone: this.registerCentreForm.value.telephone,
      description: this.registerCentreForm.value.description,
      siteWeb: this.registerCentreForm.value.siteWeb,

      adresse: this.registerCentreForm.value.adresse,
      password: this.registerCentreForm.value.password,
      confirmerpassword: this.registerCentreForm.value.confirmerpassword,
      photo: this.filesToUpload[0].name

    };
    this.submitted = true;
    if (this.registerCentreForm.invalid) {
      return;

    }
    console.log( data);

    this.responsableCentreService.register(data).subscribe(res => {
      console.log(res);

      this.imageService.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      });
      window.location.reload();
      this.registerCentreForm.reset()
    });

  }

  getprofile() {
    this.authenService.getprofile().subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('id', res.id)
      localStorage.setItem('role',res.roleList[0].roleName);
    })
  }

  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;
    console.log(this.filesToUpload)
    this.photo = file.target.files[0]['name'];
  }

  isCandidat() {
    this.authenService.isCandidat();
  }

  isresponsableSociete() {
    this.authenService.isresponsableSociete();
  }

  isresponsableCentre() {
    this.authenService.isresponsableSociete();
  }

  onlogin() {

    this.submitted = true;
    const data = {
      username: this.loginForm.value.username,

      password: this.loginForm.value.password,
    };

    this.authenService.login(data).subscribe(res => {


        localStorage.setItem('connecte', 'true');
        console.log(res);

        const jwt = res.headers.get('Authorization');
        this.authenService.saveToken(jwt);


        this.refresh();


      }
      , error2 => {


        Swal.fire(
          'OPPs',
          'Vérifier vos coordonnées:)',
          'error'
        );
      }
    );

    if (this.loginForm.invalid) {
      return;
    }

  }

  refresh(): void {
    window.location.reload();
  }

}
