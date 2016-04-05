/// <reference path="typings/angular2-meteor/angular2-meteor.d.ts" />

import 'reflect-metadata'
import 'zone.js/dist/zone'
import {Component} from 'angular2/core'
import {bootstrap} from 'angular2/bootstrap'

@Component({
    selector: 'app',
    templateUrl: 'client/app.html'
})

class Socially {}

bootstrap(Socially)