import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { Camera } from '@ionic-native/camera';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'; 
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { VideosearchPage } from '../pages/videosearch/videosearch';
import { LogoutPageModule } from '../pages/logout/logout.module';
import { PopoverComponent } from '../components/popover/popover';

var config = {
  apiKey: "AIzaSyBWJcJcVCemLCwwDuudUg1YMMiOa1OoLd8",
  authDomain: "lab2-6d1cc.firebaseapp.com",
  databaseURL: "https://lab2-6d1cc.firebaseio.com",
  projectId: "lab2-6d1cc",
  storageBucket: "lab2-6d1cc.appspot.com",
  messagingSenderId: "278041191825"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    QrcodePage,
    VideosearchPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    LogoutPageModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    QrcodePage,
    VideosearchPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    BarcodeScanner,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
