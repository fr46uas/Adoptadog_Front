import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PerrosService } from '../perros.service';
import { PerrerasService } from '../perreras.service';
declare var google;



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @ViewChild('mapa', { static: false }) mapaElement: ElementRef;

  buscador: FormGroup;
  arrPerreras: any[];
  arrPerros: any[];
  arrRaza: any[];
  arrColor: any[];
  arrSize: any[];
  arrSexo: any[];
  arrFiltrado: any[];
  arrayPerrera: any[];

  directionsService: any;
  directionsDisplay: any;

  map: any;


  constructor(private perrosService: PerrosService, private perrerasService: PerrerasService) {
    this.arrayPerrera = [];
    this.buscador = new FormGroup({
      perrera: new FormControl(''),
      raza: new FormControl(''),
      color: new FormControl(''),
      tamano: new FormControl(''),
      edad: new FormControl(''),
      sexo: new FormControl('')
    });
  }


  ngOnInit() {


    this.perrerasService.getPerreras()
      .then(response => {

        this.arrPerreras = response;


      });

    this.perrosService.getPerros()
      .then(response => {
        this.arrPerros = response;

      });

    this.perrosService.getPerrosRaza()
      .then(response => {
        this.arrRaza = response;
      });

    this.perrosService.getPerrosColor()
      .then(response => {
        this.arrColor = response;
      });

    this.perrosService.getPerrosSize()
      .then(response => {
        this.arrSize = response;
      });

    this.perrosService.getPerrosSexo()
      .then(response => {
        this.arrSexo = response;
      });


  }

  onSubmit() {
    this.perrosService.getFindPerro(this.buscador.value)

      .then(response => {
        this.arrFiltrado = response;
        console.log(this.arrFiltrado)
      });

  }

  getPerreraForFk(perreraId) {
    this.arrayPerrera = [];
    this.arrayPerrera = this.arrPerreras.find((item) => item.id === perreraId);

    this.pintarMapaPerrera(this.arrayPerrera);
  }

  pintarMapaPerrera(pPerrera) {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();

        const mapProps = {

          center: new google.maps.LatLng(parseFloat(pPerrera.lat), parseFloat(pPerrera.lng)),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(document.getElementById('mapPerrera'), mapProps);

        this.directionsDisplay.setMap(this.map);



        const Marker = new google.maps.Marker({
          position: mapProps.center,
          title: pPerrera.nombre
        });
        Marker.setMap(this.map);
      });
    }
  }
}

