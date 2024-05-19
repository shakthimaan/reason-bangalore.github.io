// Generated by Melange

import * as Caml_option from "melange.js/caml_option.js";
import * as Curry from "melange.js/curry.js";

function left(v) {
  return {
          TAG: /* Left */0,
          _0: v
        };
}

function right(v) {
  return {
          TAG: /* Right */1,
          _0: v
        };
}

function is_left(param) {
  if (param.TAG === /* Left */0) {
    return true;
  } else {
    return false;
  }
}

function is_right(param) {
  if (param.TAG === /* Left */0) {
    return false;
  } else {
    return true;
  }
}

function find_left(param) {
  if (param.TAG === /* Left */0) {
    return Caml_option.some(param._0);
  }
  
}

function find_right(param) {
  if (param.TAG === /* Left */0) {
    return ;
  } else {
    return Caml_option.some(param._0);
  }
}

function map_left(f, e) {
  if (e.TAG === /* Left */0) {
    return {
            TAG: /* Left */0,
            _0: Curry._1(f, e._0)
          };
  } else {
    return e;
  }
}

function map_right(f, e) {
  if (e.TAG === /* Left */0) {
    return e;
  } else {
    return {
            TAG: /* Right */1,
            _0: Curry._1(f, e._0)
          };
  }
}

function map(left, right, param) {
  if (param.TAG === /* Left */0) {
    return {
            TAG: /* Left */0,
            _0: Curry._1(left, param._0)
          };
  } else {
    return {
            TAG: /* Right */1,
            _0: Curry._1(right, param._0)
          };
  }
}

function fold(left, right, param) {
  if (param.TAG === /* Left */0) {
    return Curry._1(left, param._0);
  } else {
    return Curry._1(right, param._0);
  }
}

function equal(left, right, e1, e2) {
  if (e1.TAG === /* Left */0) {
    if (e2.TAG === /* Left */0) {
      return Curry._2(left, e1._0, e2._0);
    } else {
      return false;
    }
  } else if (e2.TAG === /* Left */0) {
    return false;
  } else {
    return Curry._2(right, e1._0, e2._0);
  }
}

function compare(left, right, e1, e2) {
  if (e1.TAG === /* Left */0) {
    if (e2.TAG === /* Left */0) {
      return Curry._2(left, e1._0, e2._0);
    } else {
      return -1;
    }
  } else if (e2.TAG === /* Left */0) {
    return 1;
  } else {
    return Curry._2(right, e1._0, e2._0);
  }
}

var iter = fold;

var for_all = fold;

export {
  left ,
  right ,
  is_left ,
  is_right ,
  find_left ,
  find_right ,
  map_left ,
  map_right ,
  map ,
  fold ,
  iter ,
  for_all ,
  equal ,
  compare ,
}
/* No side effect */
