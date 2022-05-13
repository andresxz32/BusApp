import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { Animations } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: Animations,
})
export class HomePage implements OnInit {
  latBus: number = 4.806650;
  lngBus: number = -75.737056

  stars = [
    { icon: '../../assets/star.svg' },
    { icon: '../../assets/star.svg' },
    { icon: '../../assets/star.svg' },
    { icon: '../../assets/star.svg' }
  ]

  latPerson: number;
  lngPerson: number;
  routeBus: Array<marker> = [
    { lat: 4.806650, lng: -75.737056, speed: 54 },
    { lat: 4.807301, lng: -75.736594, speed: 58 },
    { lat: 4.807975, lng: -75.736165, speed: 60 },
    { lat: 4.809036, lng: -75.735300, speed: 60 },
    { lat: 4.809517, lng: -75.734566, speed: 54 },
    { lat: 4.809484, lng: -75.733884, speed: 54 },
    { lat: 4.809334, lng: -75.733337, speed: 54 },
    { lat: 4.809045, lng: -75.732983, speed: 54 },
    { lat: 4.808799, lng: -75.732844, speed: 54 },
    { lat: 4.808393, lng: -75.732833, speed: 53 },
    { lat: 4.807901, lng: -75.732661, speed: 60 },
    { lat: 4.807468, lng: -75.732602, speed: 60 },
    { lat: 4.807218, lng: -75.732179, speed: 60 },
    { lat: 4.807205, lng: -75.731785, speed: 53 },
    { lat: 4.807305, lng: -75.731458, speed: 60 },
    { lat: 4.807412, lng: -75.731168, speed: 60 },
    { lat: 4.807597, lng: -75.730762, speed: 51 },
    { lat: 4.807658, lng: -75.730504, speed: 60 },
    { lat: 4.807781, lng: -75.730139, speed: 50 },
    { lat: 4.807917, lng: -75.729885, speed: 60 },
    { lat: 4.808027, lng: -75.729612, speed: 54 },
    { lat: 4.808108, lng: -75.729382, speed: 60 },
    { lat: 4.808228, lng: -75.729045, speed: 60 },
    { lat: 4.808287, lng: -75.728680, speed: 60 },
    { lat: 4.808324, lng: -75.728294, speed: 60 },
    { lat: 4.808244, lng: -75.727843, speed: 60 },
    { lat: 4.808137, lng: -75.727414, speed: 55 },
    { lat: 4.808010, lng: -75.727158, speed: 58 },
    { lat: 4.807931, lng: -75.726840, speed: 56 },
    { lat: 4.807853, lng: -75.726596, speed: 58 },
    { lat: 4.807789, lng: -75.726395, speed: 58 },
    { lat: 4.807721, lng: -75.726195, speed: 58 },
    { lat: 4.807636, lng: -75.725865, speed: 57 },
    { lat: 4.807370, lng: -75.724957, speed: 58 },
    { lat: 4.807263, lng: -75.724309, speed: 57 },
    { lat: 4.807124, lng: -75.723514, speed: 58 },
    { lat: 4.807203, lng: -75.723337, speed: 56 },
    { lat: 4.807270, lng: -75.723176, speed: 54 },
    { lat: 4.807283, lng: -75.722886, speed: 54 },
    { lat: 4.807302, lng: -75.722481, speed: 54 },
    { lat: 4.807262, lng: -75.722135, speed: 54 },
    { lat: 4.807254, lng: -75.721481, speed: 58 },
    { lat: 4.807243, lng: -75.720934, speed: 58 },
    { lat: 4.807085, lng: -75.720314, speed: 58 },
    { lat: 4.806979, lng: -75.719866, speed: 54 },
    { lat: 4.806882, lng: -75.719427, speed: 58 },
    { lat: 4.806775, lng: -75.718931, speed: 58 },
    { lat: 4.806703, lng: -75.718580, speed: 58 },
    { lat: 4.806604, lng: -75.718266, speed: 58 },
    { lat: 4.806478, lng: -75.718003, speed: 58 },
    { lat: 4.806342, lng: -75.717764, speed: 58 },
    { lat: 4.806170, lng: -75.717481, speed: 58 },
    { lat: 4.805996, lng: -75.717148, speed: 58 },
    { lat: 4.805844, lng: -75.716939, speed: 58 },
    { lat: 4.805729, lng: -75.716732, speed: 58 },
    { lat: 4.805550, lng: -75.716225, speed: 58 },
    { lat: 4.805462, lng: -75.715978, speed: 54 },
    { lat: 4.805510, lng: -75.715342, speed: 58 },
    { lat: 4.805670, lng: -75.715042, speed: 58 },
    { lat: 4.805806, lng: -75.714734, speed: 58 },
    { lat: 4.806052, lng: -75.714243, speed: 58 },
    { lat: 4.806218, lng: -75.713865, speed: 58 },
    { lat: 4.806304, lng: -75.713734, speed: 58 },
    { lat: 4.806438, lng: -75.713417, speed: 58 },
    { lat: 4.806666, lng: -75.712996, speed: 54 },
    { lat: 4.806840, lng: -75.712688, speed: 58 },
    { lat: 4.807027, lng: -75.712358, speed: 59 },
    { lat: 4.807203, lng: -75.712050, speed: 58 },
    { lat: 4.807393, lng: -75.711748, speed: 58 },
    { lat: 4.807559, lng: -75.711440, speed: 54 },
    { lat: 4.807733, lng: -75.711110, speed: 58 },
    { lat: 4.807876, lng: -75.710804, speed: 59 },
    { lat: 4.808009, lng: -75.710089, speed: 58 },
    { lat: 4.808095, lng: -75.709713, speed: 56 },
  ]
  zoom: number = 12;
  origin: { lat: number; lng: number; };
  destination: { lat: number; lng: number; };
  lat = 4.806650;
  lng = -75.737056;
  time: number = 0;
  distanceToPerson: number = 0;
  showInfo: boolean = false;


  constructor() { }
  ngOnInit(): void {
    let counter = 0;
    let i = setInterval(() => {
      this.latBus = this.routeBus[counter].lat
      this.lngBus = this.routeBus[counter].lng
      this.distanceToPerson = this.routeBus[counter].speed
      this.calculateDistance();
      counter++;
      if (counter === 70) {
        clearInterval(i);
      }
    }, 1000);
  }

  calculateDistance() {
    if (this.latPerson && this.lngPerson) {
      const bus = new google.maps.LatLng(this.latBus, this.lngBus);
      const person = new google.maps.LatLng(this.latPerson, this.lngPerson);
      const distance = google.maps.geometry.spherical.computeDistanceBetween(bus, person);
      this.calculateTime(distance);
    }
  }

  calculateTime(distance: number) {
    this.time = distance / this.distanceToPerson
  }


  mapClicked($event: any) {
    this.latPerson = $event.coords.lat
    this.lngPerson = $event.coords.lng
  }

  show() {
    this.showInfo = !this.showInfo
  }

  clickedMarker() {
    this.showInfo = !this.showInfo
  }

}


interface marker {
  lat: number;
  lng: number;
  speed: number;
  label?: string;
  draggable?: boolean;
  icon?: string;
}


// import {} from '@types/googlemaps';
//






/*
4.809036, -75.735300
4.809517, -75.734566
4.809484, -75.733884
4.809334, -75.733337
4.809045, -75.732983
4.808799, -75.732844
4.808393, -75.732833
4.807901, -75.732661
4.807468, -75.732602
4.807218, -75.732179
4.807205, -75.731785
4.807305, -75.731458
4.807412, -75.731168
4.807597, -75.730762
4.807658, -75.730504
4.807781, -75.730139
4.807917, -75.729885
4.808027, -75.729612
4.808108, -75.729382
4.808228, -75.729045
4.808287, -75.728680
4.808324, -75.728294
4.808244, -75.727843
4.808137, -75.727414
4.808010, -75.727158
4.807931, -75.726840
4.807853, -75.726596
4.807789, -75.726395
4.807721, -75.726195
4.807636, -75.725865
4.807370, -75.724957
4.807263, -75.724309
4.807124, -75.723514
4.807203, -75.723337
4.807270, -75.723176
4.807283, -75.722886
4.807302, -75.722481
4.807262, -75.722135
4.807254, -75.721481
4.807243, -75.720934
4.807085, -75.720314
4.806979, -75.719866
4.806882, -75.719427
4.806775, -75.718931
4.806703, -75.718580
4.806604, -75.718266
4.806478, -75.718003
4.806342, -75.717764
4.806170, -75.717481
4.805996, -75.717148
4.805844, -75.716939
4.805729, -75.716732
4.805550, -75.716225
4.805462, -75.715978
4.805510, -75.715342
4.805670, -75.715042
4.805806, -75.714734
4.806052, -75.714243
4.806218, -75.713865
4.806304, -75.713734
4.806438, -75.713417
4.806666, -75.712996
4.806840, -75.712688
4.807027, -75.712358
4.807203, -75.712050
4.807393, -75.711748
4.807559, -75.711440
4.807733, -75.711110
4.807876, -75.710804
4.808009, -75.710089
4.808095, -75.709713





*/
