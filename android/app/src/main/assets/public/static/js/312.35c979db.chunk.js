"use strict";(self.webpackChunkmy_react_app_capacitor=self.webpackChunkmy_react_app_capacitor||[]).push([[312],{312:(e,a,t)=>{t.r(a),t.d(a,{Geolocation:()=>o,GeolocationWeb:()=>n});var i=t(403);class n extends i.E_{async getCurrentPosition(e){return new Promise(((a,t)=>{navigator.geolocation.getCurrentPosition((e=>{a(e)}),(e=>{t(e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))}))}async watchPosition(e,a){return`${navigator.geolocation.watchPosition((e=>{a(e)}),(e=>{a(null,e)}),Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0,minimumUpdateInterval:5e3},e))}`}async clearWatch(e){navigator.geolocation.clearWatch(parseInt(e.id,10))}async checkPermissions(){if("undefined"===typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");const e=await navigator.permissions.query({name:"geolocation"});return{location:e.state,coarseLocation:e.state}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const o=new n}}]);
//# sourceMappingURL=312.35c979db.chunk.js.map