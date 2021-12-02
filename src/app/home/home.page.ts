import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  markers: marker[] = [
    {
      lat: 4.806650,
      lng: -75.737056,
      label: 'Estación cuba',
      draggable: true,
      // icon: '../../../assets/img/available.svg'google
    },
    // {
    //   lat: 4.826842,
    //   lng: -75.683633,
    //   label: 'Estación cuba',
    //   draggable: true,
    //   // icon: '../../../assets/img/chargin.svg'
    // },
  ]
  routeBus: Array<Object> = [
    { lat: 4.806650, lng: -75.737056, speed:54 },
    { lat: 4.807301, lng: -75.736594, speed:58 },
    { lat: 4.807975, lng: -75.736165, speed:60 },
    { lat: 4.809036, lng: -75.735300, speed:60 },
    { lat: 4.809517, lng: -75.734566, speed:54 },
    { lat: 4.809484, lng: -75.733884, speed:54 },
    { lat: 4.809334, lng: -75.733337, speed:54 },
    { lat: 4.809045, lng: -75.732983, speed:54 },
    { lat: 4.808799, lng: -75.732844, speed:54 },
    { lat: 4.808393, lng: -75.732833, speed:53 },
    { lat: 4.807901, lng: -75.732661, speed:60 },
    { lat: 4.807468, lng: -75.732602, speed:60 },
    { lat: 4.807218, lng: -75.732179, speed:60 },
    { lat: 4.807205, lng: -75.731785, speed:53 },
    { lat: 4.807305, lng: -75.731458, speed:60 },
    { lat: 4.807412, lng: -75.731168, speed:60 },
    { lat: 4.807597, lng: -75.730762, speed:51 },
    { lat: 4.807658, lng: -75.730504, speed:60 },
    { lat: 4.807781, lng: -75.730139, speed:50 },
    { lat: 4.807917, lng: -75.729885, speed:60 },
    { lat: 4.808027, lng: -75.729612, speed:54 },
    { lat: 4.808108, lng: -75.729382, speed:60 },
    { lat: 4.808228, lng: -75.729045, speed:60 },
    { lat: 4.808287, lng: -75.728680, speed:60 },
    { lat: 4.808324, lng: -75.728294, speed:60 },
    { lat: 4.808244, lng: -75.727843, speed:60 },
    { lat: 4.808137, lng: -75.727414, speed:55 },
    { lat: 4.808010, lng: -75.727158, speed:58 },
    { lat: 4.807931, lng: -75.726840, speed:56 },
    { lat: 4.807853, lng: -75.726596, speed:58 },
    { lat: 4.807789, lng: -75.726395, speed:58 },
    { lat: 4.807721, lng: -75.726195, speed:58 },
    { lat: 4.807636, lng: -75.725865, speed:57 },
    { lat: 4.807370, lng: -75.724957, speed:58 },
    { lat: 4.807263, lng: -75.724309, speed:57 },
    { lat: 4.807124, lng: -75.723514, speed:58 },
    { lat: 4.807203, lng: -75.723337, speed:56 },
    { lat: 4.807270, lng: -75.723176, speed:54 },
    { lat: 4.807283, lng: -75.722886, speed:54 },
    { lat: 4.807302, lng: -75.722481, speed:54 },
    { lat: 4.807262, lng: -75.722135, speed:54 },
    { lat: 4.807254, lng: -75.721481, speed:58 },
    { lat: 4.807243, lng: -75.720934, speed:58 },
    { lat: 4.807085, lng: -75.720314, speed:58 },
    { lat: 4.806979, lng: -75.719866, speed:54 },
    { lat: 4.806882, lng: -75.719427, speed:58 },
    { lat: 4.806775, lng: -75.718931, speed:58 },
    { lat: 4.806703, lng: -75.718580, speed:58 },
    { lat: 4.806604, lng: -75.718266, speed:58 },
    { lat: 4.806478, lng: -75.718003, speed:58 },
    { lat: 4.806342, lng: -75.717764, speed:58 },
    { lat: 4.806170, lng: -75.717481, speed:58 },
    { lat: 4.805996, lng: -75.717148, speed:58 },
    { lat: 4.805844, lng: -75.716939, speed:58 },
    { lat: 4.805729, lng: -75.716732, speed:58 },
    { lat: 4.805550, lng: -75.716225, speed:58 },
    { lat: 4.805462, lng: -75.715978, speed:54 },
    { lat: 4.805510, lng: -75.715342, speed:58 },
    { lat: 4.805670, lng: -75.715042, speed:58 },
    { lat: 4.805806, lng: -75.714734, speed:58 },
    { lat: 4.806052, lng: -75.714243, speed:58 },
    { lat: 4.806218, lng: -75.713865, speed:58 },
    { lat: 4.806304, lng: -75.713734, speed:58 },
    { lat: 4.806438, lng: -75.713417, speed:58 },
    { lat: 4.806666, lng: -75.712996, speed:54 },
    { lat: 4.806840, lng: -75.712688, speed:58 },
    { lat: 4.807027, lng: -75.712358, speed:59 },
    { lat: 4.807203, lng: -75.712050, speed:58 },
    { lat: 4.807393, lng: -75.711748, speed:58 },
    { lat: 4.807559, lng: -75.711440, speed:54 },
    { lat: 4.807733, lng: -75.711110, speed:58 },
    { lat: 4.807876, lng: -75.710804, speed:59 },
    { lat: 4.808009, lng: -75.710089, speed:58 },
    { lat: 4.808095, lng: -75.709713, speed:56 },
  ]
  zoom: number = 12;
  origin: { lat: number; lng: number; };
  destination: { lat: number; lng: number; };
  lat = 4.806650;
  lng = -75.737056;


  constructor() { }
  ngOnInit(): void {
    this.origin = { lat: 4.8117016, lng: -75.6929977 };
    this.destination = { lat: 4.803694, lng: -75.736899 };
  }

}


interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon?: string;
}


// import {} from '@types/googlemaps';
// import { AgmCoreModule, MapsAPILoader } from "@agm/core";

// calculateDistance() {
//     const mexicoCity = new google.maps.LatLng(19.432608, -99.133209.);
//     const jacksonville = new google.maps.LatLng(40.730610, -73.935242.);
//     const distance = google.maps.geometry.spherical.computeDistanceBetween(nyc, london);
//   }

