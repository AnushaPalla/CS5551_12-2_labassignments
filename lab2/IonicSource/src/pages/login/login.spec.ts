import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login';
import { IonicModule, NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth,AngularFireAuthModule } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import {AngularFireModule} from 'angularFire2';

describe('LoginPage', () => {
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
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
      declarations: [LoginPage,HomePage],
      imports: [
        AngularFireModule,
        AngularFireModule.initializeApp(config),
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        NavController,
        AngularFireAuth,
        ToastController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());
 
});
