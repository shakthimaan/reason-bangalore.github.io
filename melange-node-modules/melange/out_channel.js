// Generated by Melange

import * as Caml_external_polyfill from "melange.js/caml_external_polyfill.js";
import * as Curry from "melange.js/curry.js";
import * as Stdlib from "./stdlib.js";
import * as Stdlib__Fun from "./fun.js";

function with_open(openfun, s, f) {
  var oc = Curry._1(openfun, s);
  return Stdlib__Fun.protect((function (param) {
                Stdlib.close_out_noerr(oc);
              }), (function (param) {
                return Curry._1(f, oc);
              }));
}

function with_open_bin(s, f) {
  return with_open(Stdlib.open_out_bin, s, f);
}

function with_open_text(s, f) {
  return with_open(Stdlib.open_out, s, f);
}

function with_open_gen(flags, perm, s, f) {
  return with_open((function (param) {
                return Stdlib.open_out_gen(flags, perm, param);
              }), s, f);
}

var seek = Stdlib.LargeFile.seek_out;

var pos = Stdlib.LargeFile.pos_out;

var length = Stdlib.LargeFile.out_channel_length;

var stdout = Stdlib.stdout;

var stderr = Stdlib.stderr;

var open_bin = Stdlib.open_out_bin;

var open_text = Stdlib.open_out;

var open_gen = Stdlib.open_out_gen;

var close = Stdlib.close_out;

var close_noerr = Stdlib.close_out_noerr;

var output_char = Stdlib.output_char;

var output_byte = Stdlib.output_byte;

var output_string = Stdlib.output_string;

var output_bytes = Stdlib.output_bytes;

var output = Stdlib.output;

var output_substring = Stdlib.output_substring;

var flush = Stdlib.flush;

var flush_all = Stdlib.flush_all;

var set_binary_mode = Stdlib.set_binary_mode_out;

function set_buffered(prim0, prim1) {
  return Caml_external_polyfill.resolve("caml_ml_set_buffered")(prim0, prim1);
}

function is_buffered(prim) {
  return Caml_external_polyfill.resolve("caml_ml_is_buffered")(prim);
}

function isatty(prim) {
  return Caml_external_polyfill.resolve("caml_sys_isatty")(prim);
}

export {
  stdout ,
  stderr ,
  open_bin ,
  open_text ,
  open_gen ,
  with_open_bin ,
  with_open_text ,
  with_open_gen ,
  close ,
  close_noerr ,
  output_char ,
  output_byte ,
  output_string ,
  output_bytes ,
  output ,
  output_substring ,
  flush ,
  flush_all ,
  seek ,
  pos ,
  length ,
  set_binary_mode ,
  set_buffered ,
  is_buffered ,
  isatty ,
}
/* Stdlib__Fun Not a pure module */
