import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  @ViewChild('mapa', { static: false }) mapaElement: ElementRef;

  directionsService: any;
  directionsDisplay: any;

  map: any;


  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadMap(position);
      });
    } else {
      alert('Ud. está aquí');
    }

  }

  loadMap(posicion) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    const mapProps = {

      center: new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude),
      positionUno: new google.maps.LatLng(40.451250, - 3.345232),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('mapId'), mapProps);

    this.directionsDisplay.setMap(this.map);



    const Marker = new google.maps.Marker({
      position: mapProps.center,
      title: 'Ud. Está aquí',
    });
    Marker.setMap(this.map);

    const ascanMarker = new google.maps.Marker({
      position: { lat: 40.451250, lng: - 3.345232 },
      title: 'ASCAN MADRID',
    });
    ascanMarker.setMap(this.map);

    const infowindowAscan = new google.maps.InfoWindow({
      content: '<div> <h5>ASCAN</h5><p><strong>DIRECCIÓN:</strong> Carretera de Villalbilla km.4 28810 Villalbilla(Madrid)</p><p><strong>EMAIL:</strong> info.ascanmadrid@gmail.com</p><p><strong>TELÉFONO:</strong> 656903860</p>  </div>'
    });

    google.maps.event.addListener(ascanMarker, 'click', function () {

      infowindowAscan.open(this.map, ascanMarker);
    });

    const vozAnimakMarker = new google.maps.Marker({
      position: { lat: 40.240746, lng: - 3.754222 },
      title: 'ASOCIACION LA VOZ ANIMAL'
    });
    vozAnimakMarker.setMap(this.map);

    const infowindowVozAnimal = new google.maps.InfoWindow({
      content: '<div> <h5>ASOCIACIÓN LA VOZ ANIMAL</h5><p><strong>DIRECCIÓN:</strong> Apartado de Correos, 249 - 28983(Madrid)</p><p><strong>EMAIL:</strong> info@lavozanimal.com</p><p><strong>TELÉFONO:</strong> 649022582</p>  </div>'
    });

    google.maps.event.addListener(vozAnimakMarker, 'click', function () {

      infowindowVozAnimal.open(this.map, vozAnimakMarker);
    });

    const albaMarker = new google.maps.Marker({
      position: { lat: 40.540147, lng: - 3.397872 },
      title: 'PROTECTORA ALBA'
    });
    albaMarker.setMap(this.map);

    const infowindowAlba = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ALBA</h5><p><strong>DIRECCIÓN:</strong> Camino del corral, 60 - 28816 Camarma de Est.(Madrid)</p><p><strong>EMAIL:</strong> alba@albaonline.org</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(albaMarker, 'click', function () {

      infowindowAlba.open(this.map, albaMarker);
    });



    const annaMarker = new google.maps.Marker({
      position: { lat: 40.674603, lng: - 3.474912 },
      title: 'PROTECTORA ANNA'
    });
    annaMarker.setMap(this.map);

    const infowindowAnna = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ANNA</h5><p><strong>DIRECCIÓN:</strong> Calle Algete s/n - 28660 Fuente el Saz(Madrid)</p><p><strong>EMAIL:</strong> anaa@anaaweb.com</p><p><strong>TELÉFONO:</strong> 916672036</p>  </div>'
    });

    google.maps.event.addListener(annaMarker, 'click', function () {

      infowindowAnna.open(this.map, annaMarker);
    });




    const arpaMarker = new google.maps.Marker({
      position: { lat: 40.023244, lng: - 3.603719 },
      title: 'PROTECCIÓN ANIMAL ARPA'
    });
    arpaMarker.setMap(this.map);

    const infowindowArpa = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ARPA</h5><p><strong>DIRECCIÓN:</strong> 28300 - Aranjuez(Madrid)</p><p><strong>EMAIL:</strong> aranjuezproteccionanimal@gmail.com</p><p><strong>TELÉFONO:</strong> 657638696</p>  </div>'
    });

    google.maps.event.addListener(arpaMarker, 'click', function () {

      infowindowArpa.open(this.map, arpaMarker);
    });





    const nuevaVidaMarker = new google.maps.Marker({
      position: { lat: 40.472883, lng: - 3.875216 },
      title: 'PROTECTORA NUEVAVIDA'
    });
    nuevaVidaMarker.setMap(this.map);

    const infowindowNuevaVida = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA NUEVAVIDA</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(nuevaVidaMarker, 'click', function () {

      infowindowNuevaVida.open(this.map, nuevaVidaMarker);
    });




    const perrikusMarker = new google.maps.Marker({
      position: { lat: 41.037583, lng: - 3.620449 },
      title: 'PROTECTORA PERRIKUS'
    });
    perrikusMarker.setMap(this.map);

    const infowindowPerrikus = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA PÉRRIKUS</h5><p><strong>DIRECCIÓN:</strong> Diseminado Madrid-Burgos, km.5 28737 - La Serna del Monte(Madrid)</p><p><strong>EMAIL:</strong> info@perrikus.org</p><p><strong>TELÉFONO:</strong> 610376351</p>  </div>'
    });

    google.maps.event.addListener(perrikusMarker, 'click', function () {

      infowindowPerrikus.open(this.map, perrikusMarker);
    });






    const elRefugioMarker = new google.maps.Marker({
      position: { lat: 40.481445, lng: - 3.659882 },
      title: 'EL REFUGIO'
    });
    elRefugioMarker.setMap(this.map);

    const infowindowElrefugio = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA EL REFUGIO</h5><p><strong>DIRECCIÓN:</strong> Calle Roquetas de Mar, 21 28033 - El Espinar(Madrid)</p><p><strong>EMAIL:</strong> info@elrefugio.org</p><p><strong>TELÉFONO:</strong> 917303680</p>  </div>'
    });

    google.maps.event.addListener(elRefugioMarker, 'click', function () {

      infowindowElrefugio.open(this.map, elRefugioMarker);
    });





    const rivanimalMarker = new google.maps.Marker({
      position: { lat: 40.356191, lng: - 3.543498 },
      title: 'RIVANIMAL'
    });
    rivanimalMarker.setMap(this.map);

    const infowindowRivanimal = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA RIVANIMAL</h5><p><strong>DIRECCIÓN:</strong> Calle Marie Curie, 4 28521 - Rivas-Vaciamadrid(Madrid)</p><p><strong>EMAIL:</strong> info@rivanimal.org</p><p><strong>TELÉFONO:</strong> 637809126</p>  </div>'
    });

    google.maps.event.addListener(rivanimalMarker, 'click', function () {

      infowindowRivanimal.open(this.map, rivanimalMarker);
    });




    const almanimalMarker = new google.maps.Marker({
      position: { lat: 40.406669, lng: - 3.875029 },
      title: 'ALMANIMAL'
    });
    almanimalMarker.setMap(this.map);

    const infowindowAlmanimal = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ALMANIMAL</h5><p><strong>DIRECCIÓN:</strong> Avda. Adolfo Suarez s/n 28660 - Boadilla del Monte(Madrid)</p><p><strong>EMAIL:</strong> info@almanimal.org/p><p><strong>TELÉFONO:</strong> 619233588</p>  </div>'
    });

    google.maps.event.addListener(almanimalMarker, 'click', function () {

      infowindowAlmanimal.open(this.map, almanimalMarker);
    });
  }
}
