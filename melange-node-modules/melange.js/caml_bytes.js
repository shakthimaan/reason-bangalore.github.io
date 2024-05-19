// Generated by Melange

import * as Js__Caml_int64 from "./caml_int64.js";

function set(s, i, ch) {
  if (i < 0 || i >= s.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  s[i] = ch;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  return s[i];
}

function caml_fill_bytes(s, i, l, c) {
  if (l <= 0) {
    return ;
  }
  for(var k = i ,k_finish = l + i | 0; k < k_finish; ++k){
    s[k] = c;
  }
}

function caml_create_bytes(len) {
  if (len < 0) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.create",
          Error: new Error()
        };
  }
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = /* '\000' */0;
  }
  return result;
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len <= 0) {
    return ;
  }
  if (s1 === s2) {
    if (i1 < i2) {
      var range_a = (s1.length - i2 | 0) - 1 | 0;
      var range_b = len - 1 | 0;
      var range = range_a > range_b ? range_b : range_a;
      for(var j = range; j >= 0; --j){
        s1[i2 + j | 0] = s1[i1 + j | 0];
      }
      return ;
    }
    if (i1 <= i2) {
      return ;
    }
    var range_a$1 = (s1.length - i1 | 0) - 1 | 0;
    var range_b$1 = len - 1 | 0;
    var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
    for(var k = 0; k <= range$1; ++k){
      s1[i2 + k | 0] = s1[i1 + k | 0];
    }
    return ;
  }
  var off1 = s1.length - i1 | 0;
  if (len <= off1) {
    for(var i = 0; i < len; ++i){
      s2[i2 + i | 0] = s1[i1 + i | 0];
    }
    return ;
  }
  for(var i$1 = 0; i$1 < off1; ++i$1){
    s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
  }
  for(var i$2 = off1; i$2 < len; ++i$2){
    s2[i2 + i$2 | 0] = /* '\000' */0;
  }
}

function bytes_to_string(a) {
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === a.length) {
    return String.fromCharCode.apply(null, a);
  }
  var offset = 0;
  while(s_len > 0) {
    var next = s_len < 1024 ? s_len : 1024;
    var tmp_bytes = new Array(next);
    for(var k = 0; k < next; ++k){
      tmp_bytes[k] = a[k + offset | 0];
    }
    s = s + String.fromCharCode.apply(null, tmp_bytes);
    s_len = s_len - next | 0;
    offset = offset + next | 0;
  };
  return s;
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len <= 0) {
    return ;
  }
  var off1 = s1.length - i1 | 0;
  if (len <= off1) {
    for(var i = 0; i < len; ++i){
      s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
    }
    return ;
  }
  for(var i$1 = 0; i$1 < off1; ++i$1){
    s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
  }
  for(var i$2 = off1; i$2 < len; ++i$2){
    s2[i2 + i$2 | 0] = /* '\000' */0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0; i < len; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function caml_bytes_compare_aux(s1, s2, _off, len, def) {
  while(true) {
    var off = _off;
    if (off >= len) {
      return def;
    }
    var a = s1[off];
    var b = s2[off];
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    _off = off + 1 | 0;
    continue ;
  };
}

function caml_bytes_compare(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
  } else if (len1 < len2) {
    return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
  } else {
    return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
  }
}

function caml_bytes_equal(s1, s2) {
  var len1 = s1.length;
  var len2 = s2.length;
  if (len1 === len2) {
    var _off = 0;
    while(true) {
      var off = _off;
      if (off === len1) {
        return true;
      }
      var a = s1[off];
      var b = s2[off];
      if (a !== b) {
        return false;
      }
      _off = off + 1 | 0;
      continue ;
    };
  } else {
    return false;
  }
}

function caml_bytes_greaterthan(s1, s2) {
  return caml_bytes_compare(s1, s2) > 0;
}

function caml_bytes_greaterequal(s1, s2) {
  return caml_bytes_compare(s1, s2) >= 0;
}

function caml_bytes_lessthan(s1, s2) {
  return caml_bytes_compare(s1, s2) < 0;
}

function caml_bytes_lessequal(s1, s2) {
  return caml_bytes_compare(s1, s2) <= 0;
}

function bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function bswap32(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & -16777216) >>> 24);
}

function bswap64(x) {
  return Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
                                              0,
                                              255
                                            ]), 56), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
                                              0,
                                              65280
                                            ]), 40)), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
                                          0,
                                          16711680
                                        ]), 24)), Js__Caml_int64.lsl_(Js__Caml_int64.and_(x, [
                                      0,
                                      4278190080
                                    ]), 8)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
                                  255,
                                  0
                                ]), 8)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
                              65280,
                              0
                            ]), 24)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
                          16711680,
                          0
                        ]), 40)), Js__Caml_int64.lsr_(Js__Caml_int64.and_(x, [
                      -16777216,
                      0
                    ]), 56));
}

function get16u(str, idx) {
  var b1 = str[idx];
  var b2 = str[idx + 1 | 0];
  return (b2 << 8) | b1;
}

function get16(str, idx) {
  if (idx < 0 || (idx + 1 | 0) >= str.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  return get16u(str, idx);
}

function get32(str, idx) {
  if (idx < 0 || (idx + 3 | 0) >= str.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  var b1 = str[idx];
  var b2 = str[idx + 1 | 0];
  var b3 = str[idx + 2 | 0];
  var b4 = str[idx + 3 | 0];
  return (b4 << 24) | (b3 << 16) | (b2 << 8) | b1;
}

function get64(str, idx) {
  if (idx < 0 || (idx + 7 | 0) >= str.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  var b1 = str[idx];
  var b2 = str[idx + 1 | 0];
  var b3 = str[idx + 2 | 0];
  var b4 = str[idx + 3 | 0];
  var b5 = str[idx + 4 | 0];
  var b6 = str[idx + 5 | 0];
  var b7 = str[idx + 6 | 0];
  var b8 = str[idx + 7 | 0];
  return Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.or_(Js__Caml_int64.lsl_(Js__Caml_int64.of_int32(b8), 56), Js__Caml_int64.of_int32(b7)), 48), Js__Caml_int64.of_int32(b6)), 40), Js__Caml_int64.of_int32(b5)), 32), Js__Caml_int64.of_int32(b4)), 24), Js__Caml_int64.of_int32(b3)), 16), Js__Caml_int64.of_int32(b2)), 8), Js__Caml_int64.of_int32(b1));
}

function set16u(b, idx, newval) {
  var b2 = 255 & (newval >>> 8);
  var b1 = 255 & newval;
  b[idx] = b1;
  b[idx + 1 | 0] = b2;
}

function set16(b, idx, newval) {
  if (idx < 0 || (idx + 1 | 0) >= b.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  set16u(b, idx, newval);
}

function set32u(str, idx, newval) {
  var b4 = 255 & (newval >>> 24);
  var b3 = 255 & (newval >>> 16);
  var b2 = 255 & (newval >>> 8);
  var b1 = 255 & newval;
  str[idx] = b1;
  str[idx + 1 | 0] = b2;
  str[idx + 2 | 0] = b3;
  str[idx + 3 | 0] = b4;
}

function set32(str, idx, newval) {
  if (idx < 0 || (idx + 3 | 0) >= str.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  set32u(str, idx, newval);
}

function set64u(str, idx, newval) {
  var x = Js__Caml_int64.lsr_(newval, 56);
  var b8 = 255 & (x[1] | 0);
  var x$1 = Js__Caml_int64.lsr_(newval, 48);
  var b7 = 255 & (x$1[1] | 0);
  var x$2 = Js__Caml_int64.lsr_(newval, 40);
  var b6 = 255 & (x$2[1] | 0);
  var x$3 = Js__Caml_int64.lsr_(newval, 32);
  var b5 = 255 & (x$3[1] | 0);
  var x$4 = Js__Caml_int64.lsr_(newval, 24);
  var b4 = 255 & (x$4[1] | 0);
  var x$5 = Js__Caml_int64.lsr_(newval, 16);
  var b3 = 255 & (x$5[1] | 0);
  var x$6 = Js__Caml_int64.lsr_(newval, 8);
  var b2 = 255 & (x$6[1] | 0);
  var b1 = 255 & (newval[1] | 0);
  str[idx] = b1;
  str[idx + 1 | 0] = b2;
  str[idx + 2 | 0] = b3;
  str[idx + 3 | 0] = b4;
  str[idx + 4 | 0] = b5;
  str[idx + 5 | 0] = b6;
  str[idx + 6 | 0] = b7;
  str[idx + 7 | 0] = b8;
}

function set64(str, idx, newval) {
  if (idx < 0 || (idx + 7 | 0) >= str.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  set64u(str, idx, newval);
}

export {
  caml_create_bytes ,
  caml_fill_bytes ,
  get ,
  set ,
  bytes_to_string ,
  caml_blit_bytes ,
  caml_blit_string ,
  bytes_of_string ,
  caml_bytes_compare ,
  caml_bytes_greaterthan ,
  caml_bytes_greaterequal ,
  caml_bytes_lessthan ,
  caml_bytes_lessequal ,
  caml_bytes_equal ,
  bswap16 ,
  bswap32 ,
  bswap64 ,
  get16u ,
  get16 ,
  get32 ,
  get64 ,
  set16u ,
  set16 ,
  set32u ,
  set32 ,
  set64u ,
  set64 ,
}
/* No side effect */
