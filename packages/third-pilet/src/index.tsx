import { PiletApi } from "app-shell";
import '@angular/common';
import '@angular/core';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';
import { fromNg } from "piral-ng/convert";
import { Tile } from "./Tile";

export function setup(app: PiletApi) {
  app.registerTile(fromNg(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
