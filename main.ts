import * as angular from "angular";
import {Module1} from "./module1";

angular.module("mainModule", [Module1.name]);
angular.bootstrap(document.querySelector("body"), ["mainModule"]);

console.log("loaded!!");