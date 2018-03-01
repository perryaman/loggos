var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupDesigner2Page } from '../signup-designer2/signup-designer2';
var SignupDesigner1Page = (function () {
    function SignupDesigner1Page(navCtrl, navParams, db, afAuth, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        //   user: Object;
        this.user = firebase.auth().currentUser;
        this.userProfileForm = formBuilder.group({
            name: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            phoneNumber: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            email: [''],
        });
    }
    SignupDesigner1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientQtnPage');
    };
    SignupDesigner1Page.prototype.getClientInfo = function () {
    };
    SignupDesigner1Page.prototype.saveUserProfile = function () {
        var _this = this;
        if (!this.userProfileForm.valid) {
            var toast = this.toastCtrl.create({
                message: 'Some of your input is invalid. Please try again.',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            // save the user's profile into the database so we can list users,
            // use them in Security and Firebase Rules, and show profiles
            return this.db.object('users/' + this.afAuth.auth.currentUser.uid).update({
                'name': this.userProfileForm.value.name,
                'role': 'designer',
                'tel': this.userProfileForm.value.phoneNumber,
                'email': this.afAuth.auth.currentUser.email
                //TO DO: Add details to firebase auth user as well
            }).then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Details saved successfully',
                    duration: 1000,
                    position: 'middle'
                });
                toast.present();
            }).then(function () {
                _this.navCtrl.setRoot(SignupDesigner2Page);
            });
        }
    };
    return SignupDesigner1Page;
}());
SignupDesigner1Page = __decorate([
    IonicPage(),
    Component({
        selector: 'signup-designer1',
        templateUrl: 'signup-designer1.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams,
        AngularFireDatabase, AngularFireAuth,
        FormBuilder, ToastController])
], SignupDesigner1Page);
export { SignupDesigner1Page };
//# sourceMappingURL=signup-designer1.js.map