// Generated by Melange

import * as Caml_option from "melange.js/caml_option.js";
import * as Curry from "melange.js/curry.js";
import * as Stdlib__Seq from "./seq.js";

function some(v) {
  return Caml_option.some(v);
}

function value(o, $$default) {
  if (o !== undefined) {
    return Caml_option.valFromOption(o);
  } else {
    return $$default;
  }
}

function get(param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "option is None",
        Error: new Error()
      };
}

function bind(o, f) {
  if (o !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(o));
  }
  
}

function join(param) {
  if (param !== undefined) {
    return Caml_option.valFromOption(param);
  }
  
}

function map(f, o) {
  if (o !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(o)));
  }
  
}

function fold(none, some, param) {
  if (param !== undefined) {
    return Curry._1(some, Caml_option.valFromOption(param));
  } else {
    return none;
  }
}

function iter(f, param) {
  if (param !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(param));
  }
  
}

function is_none(param) {
  return param === undefined;
}

function is_some(param) {
  return param !== undefined;
}

function equal(eq, o0, o1) {
  if (o0 !== undefined) {
    if (o1 !== undefined) {
      return Curry._2(eq, Caml_option.valFromOption(o0), Caml_option.valFromOption(o1));
    } else {
      return false;
    }
  } else {
    return o1 === undefined;
  }
}

function compare(cmp, o0, o1) {
  if (o0 !== undefined) {
    if (o1 !== undefined) {
      return Curry._2(cmp, Caml_option.valFromOption(o0), Caml_option.valFromOption(o1));
    } else {
      return 1;
    }
  } else if (o1 !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function to_result(none, param) {
  if (param !== undefined) {
    return {
            TAG: /* Ok */0,
            _0: Caml_option.valFromOption(param)
          };
  } else {
    return {
            TAG: /* Error */1,
            _0: none
          };
  }
}

function to_list(param) {
  if (param !== undefined) {
    return {
            hd: Caml_option.valFromOption(param),
            tl: /* [] */0
          };
  } else {
    return /* [] */0;
  }
}

function to_seq(param) {
  if (param === undefined) {
    return Stdlib__Seq.empty;
  }
  var partial_arg = Caml_option.valFromOption(param);
  return function (param) {
    return Stdlib__Seq.$$return(partial_arg, param);
  };
}

var none;

export {
  none ,
  some ,
  value ,
  get ,
  bind ,
  join ,
  map ,
  fold ,
  iter ,
  is_none ,
  is_some ,
  equal ,
  compare ,
  to_result ,
  to_list ,
  to_seq ,
}
/* No side effect */
