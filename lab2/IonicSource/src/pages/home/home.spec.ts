import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home';
import { LoginPage } from '../login/login';
import { HttpClient } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, NavController, ToastController } from 'ionic-angular';
import { AngularFireModule } from 'angularFire2';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';

describe('HomePage', () => {
    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    var config = {
      apiKey: "AIzaSyBWJcJcVCemLCwwDuudUg1YMMiOa1OoLd8",
      authDomain: "lab2-6d1cc.firebaseapp.com",
      databaseURL: "https://lab2-6d1cc.firebaseio.com",
      projectId: "lab2-6d1cc",
      storageBucket: "lab2-6d1cc.appspot.com",
      messagingSenderId: "278041191825"
    };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage,LoginPage],
            imports: [
                AngularFireModule,
                HttpClientModule,
                AngularFireModule.initializeApp(config),
                IonicModule.forRoot(HomePage)
            ],
            providers: [
                NavController,
                Camera,
                HttpClient,
                AngularFireDatabase,
                AngularFireStorage,
                ToastController
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        comp = fixture.componentInstance;
    });

    it('should create component', () => expect(comp).toBeDefined());

});
