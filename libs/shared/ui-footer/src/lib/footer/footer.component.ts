import { Component, OnInit } from '@angular/core';
import {environment} from '@bandmember/shared/environments';
import * as data from '../../../../../../package.json';

@Component({
  selector: 'bandmember-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  {
  packageJson: {
    name: string; version: string; license: string; scripts: { ng: string; postinstall: string; start: string; build: string; test: string; }; private: boolean; dependencies: {
      "@angular-architects/ddd": string;
      // environment = environment.appVersion;
      //let packageJson = data
      "@angular/animations": string; "@angular/cdk": string; "@angular/common": string; "@angular/compiler": string; "@angular/core": string; "@angular/flex-layout": string; "@angular/forms": string; "@angular/material" //let packageJson = data
      : string; "@angular/platform-browser": string; "@angular/platform-browser-dynamic": string; "@angular/router": string; "@fortawesome/angular-fontawesome": string; "@fortawesome/fontawesome-svg-core": string; "@fortawesome/free-brands-svg-icons": string; "@nestjs/common": string; "@nestjs/core": string; "@nestjs/platform-express": string; "@nrwl/angular": string; "reflect-metadata": string; rxjs: string; tslib: string; "zone.js": string;
    }; devDependencies: { "@angular-devkit/build-angular": string; "@angular-eslint/eslint-plugin": string; "@angular-eslint/eslint-plugin-template": string; "@angular-eslint/template-parser": string; "@angular/cli": string; "@angular/compiler-cli": string; "@angular/language-service": string; "@nestjs/schematics": string; "@nestjs/testing": string; "@nrwl/cli": string; "@nrwl/cypress": string; "@nrwl/eslint-plugin-nx": string; "@nrwl/jest": string; "@nrwl/linter": string; "@nrwl/nest": string; "@nrwl/node": string; "@nrwl/nx-cloud": string; "@nrwl/workspace": string; "@types/jest": string; "@types/node": string; "@typescript-eslint/eslint-plugin": string; "@typescript-eslint/parser": string; cypress: string; eslint: string; "eslint-config-prettier": string; "eslint-plugin-cypress": string; jest: string; "jest-environment-jsdom": string; "jest-preset-angular": string; nx: string; prettier: string; "ts-jest": string; "ts-node": string; typescript: string; };
  };
  
  
  environment = environment.appVersion;
  //let packageJson = data
  
  constructor() {
    this.packageJson = data;
  }

  get version() {
    //let packageJson = data
    if (this.packageJson.version) {
      return this.packageJson.version;
    }
    return '';
  }
}
