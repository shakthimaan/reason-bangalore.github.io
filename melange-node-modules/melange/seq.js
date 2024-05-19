// Generated by Melange

import * as Caml_exceptions from "melange.js/caml_exceptions.js";
import * as Caml_option from "melange.js/caml_option.js";
import * as CamlinternalLazy from "./camlinternalLazy.js";
import * as Curry from "melange.js/curry.js";
import * as Stdlib__Atomic from "./atomic.js";

function empty(param) {
  return /* Nil */0;
}

function $$return(x, param) {
  return /* Cons */{
          _0: x,
          _1: empty
        };
}

function cons(x, next, param) {
  return /* Cons */{
          _0: x,
          _1: next
        };
}

function append(seq1, seq2, param) {
  var match = Curry._1(seq1, undefined);
  if (!match) {
    return Curry._1(seq2, undefined);
  }
  var next = match._1;
  return /* Cons */{
          _0: match._0,
          _1: (function (param) {
              return append(next, seq2, param);
            })
        };
}

function map(f, seq, param) {
  var match = Curry._1(seq, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var next = match._1;
  return /* Cons */{
          _0: Curry._1(f, match._0),
          _1: (function (param) {
              return map(f, next, param);
            })
        };
}

function filter_map(f, _seq, _param) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var next = match._1;
    var y = Curry._1(f, match._0);
    if (y !== undefined) {
      return /* Cons */{
              _0: Caml_option.valFromOption(y),
              _1: (function(next){
              return function (param) {
                return filter_map(f, next, param);
              }
              }(next))
            };
    }
    _param = undefined;
    _seq = next;
    continue ;
  };
}

function filter(f, _seq, _param) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var next = match._1;
    var x = match._0;
    if (Curry._1(f, x)) {
      return /* Cons */{
              _0: x,
              _1: (function(next){
              return function (param) {
                return filter(f, next, param);
              }
              }(next))
            };
    }
    _param = undefined;
    _seq = next;
    continue ;
  };
}

function concat(seq, param) {
  var match = Curry._1(seq, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var next = match._1;
  return append(match._0, (function (param) {
                return concat(next, param);
              }), undefined);
}

function flat_map(f, seq, param) {
  var match = Curry._1(seq, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var next = match._1;
  return append(Curry._1(f, match._0), (function (param) {
                return flat_map(f, next, param);
              }), undefined);
}

function fold_left(f, _acc, _seq) {
  while(true) {
    var seq = _seq;
    var acc = _acc;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return acc;
    }
    var acc$1 = Curry._2(f, acc, match._0);
    _seq = match._1;
    _acc = acc$1;
    continue ;
  };
}

function iter(f, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return ;
    }
    Curry._1(f, match._0);
    _seq = match._1;
    continue ;
  };
}

function unfold(f, u, param) {
  var match = Curry._1(f, u);
  if (match === undefined) {
    return /* Nil */0;
  }
  var u$p = match[1];
  return /* Cons */{
          _0: match[0],
          _1: (function (param) {
              return unfold(f, u$p, param);
            })
        };
}

function is_empty(xs) {
  var match = Curry._1(xs, undefined);
  if (match) {
    return false;
  } else {
    return true;
  }
}

function uncons(xs) {
  var match = Curry._1(xs, undefined);
  if (match) {
    return [
            match._0,
            match._1
          ];
  }
  
}

function length(xs) {
  var _accu = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var accu = _accu;
    var match = Curry._1(xs$1, undefined);
    if (!match) {
      return accu;
    }
    _xs = match._1;
    _accu = accu + 1 | 0;
    continue ;
  };
}

function iteri(f, xs) {
  var _i = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var i = _i;
    var match = Curry._1(xs$1, undefined);
    if (!match) {
      return ;
    }
    Curry._2(f, i, match._0);
    _xs = match._1;
    _i = i + 1 | 0;
    continue ;
  };
}

function fold_lefti(f, accu, xs) {
  var _accu = accu;
  var _i = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var i = _i;
    var accu$1 = _accu;
    var match = Curry._1(xs$1, undefined);
    if (!match) {
      return accu$1;
    }
    var accu$2 = Curry._3(f, accu$1, i, match._0);
    _xs = match._1;
    _i = i + 1 | 0;
    _accu = accu$2;
    continue ;
  };
}

function for_all(p, _xs) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return true;
    }
    if (!Curry._1(p, match._0)) {
      return false;
    }
    _xs = match._1;
    continue ;
  };
}

function exists(p, _xs) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return false;
    }
    if (Curry._1(p, match._0)) {
      return true;
    }
    _xs = match._1;
    continue ;
  };
}

function find(p, _xs) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return ;
    }
    var x = match._0;
    if (Curry._1(p, x)) {
      return Caml_option.some(x);
    }
    _xs = match._1;
    continue ;
  };
}

function find_index(p, xs) {
  var _i = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var i = _i;
    var match = Curry._1(xs$1, undefined);
    if (!match) {
      return ;
    }
    if (Curry._1(p, match._0)) {
      return i;
    }
    _xs = match._1;
    _i = i + 1 | 0;
    continue ;
  };
}

function find_map(f, _xs) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return ;
    }
    var result = Curry._1(f, match._0);
    if (result !== undefined) {
      return result;
    }
    _xs = match._1;
    continue ;
  };
}

function find_mapi(f, xs) {
  var _i = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var i = _i;
    var match = Curry._1(xs$1, undefined);
    if (!match) {
      return ;
    }
    var result = Curry._2(f, i, match._0);
    if (result !== undefined) {
      return result;
    }
    _xs = match._1;
    _i = i + 1 | 0;
    continue ;
  };
}

function iter2(f, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return ;
    }
    var match$1 = Curry._1(ys, undefined);
    if (!match$1) {
      return ;
    }
    Curry._2(f, match._0, match$1._0);
    _ys = match$1._1;
    _xs = match._1;
    continue ;
  };
}

function fold_left2(f, _accu, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var accu = _accu;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return accu;
    }
    var match$1 = Curry._1(ys, undefined);
    if (!match$1) {
      return accu;
    }
    var accu$1 = Curry._3(f, accu, match._0, match$1._0);
    _ys = match$1._1;
    _xs = match._1;
    _accu = accu$1;
    continue ;
  };
}

function for_all2(f, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return true;
    }
    var match$1 = Curry._1(ys, undefined);
    if (!match$1) {
      return true;
    }
    if (!Curry._2(f, match._0, match$1._0)) {
      return false;
    }
    _ys = match$1._1;
    _xs = match._1;
    continue ;
  };
}

function exists2(f, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return false;
    }
    var match$1 = Curry._1(ys, undefined);
    if (!match$1) {
      return false;
    }
    if (Curry._2(f, match._0, match$1._0)) {
      return true;
    }
    _ys = match$1._1;
    _xs = match._1;
    continue ;
  };
}

function equal(eq, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    var match$1 = Curry._1(ys, undefined);
    if (!match) {
      if (match$1) {
        return false;
      } else {
        return true;
      }
    }
    if (!match$1) {
      return false;
    }
    if (!Curry._2(eq, match._0, match$1._0)) {
      return false;
    }
    _ys = match$1._1;
    _xs = match._1;
    continue ;
  };
}

function compare(cmp, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    var match$1 = Curry._1(ys, undefined);
    if (!match) {
      if (match$1) {
        return -1;
      } else {
        return 0;
      }
    }
    if (!match$1) {
      return 1;
    }
    var c = Curry._2(cmp, match._0, match$1._0);
    if (c !== 0) {
      return c;
    }
    _ys = match$1._1;
    _xs = match._1;
    continue ;
  };
}

function init_aux(f, i, j, param) {
  if (i >= j) {
    return /* Nil */0;
  }
  var partial_arg = i + 1 | 0;
  return /* Cons */{
          _0: Curry._1(f, i),
          _1: (function (param) {
              return init_aux(f, partial_arg, j, param);
            })
        };
}

function init(n, f) {
  if (n < 0) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Seq.init",
          Error: new Error()
        };
  }
  return function (param) {
    return init_aux(f, 0, n, param);
  };
}

function repeat(x, param) {
  return /* Cons */{
          _0: x,
          _1: (function (param) {
              return repeat(x, param);
            })
        };
}

function forever(f, param) {
  return /* Cons */{
          _0: Curry._1(f, undefined),
          _1: (function (param) {
              return forever(f, param);
            })
        };
}

function cycle_nonempty(xs, param) {
  return append(xs, (function (param) {
                return cycle_nonempty(xs, param);
              }), undefined);
}

function cycle(xs, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$p = match._1;
  return /* Cons */{
          _0: match._0,
          _1: (function (param) {
              return append(xs$p, (function (param) {
                            return cycle_nonempty(xs, param);
                          }), param);
            })
        };
}

function iterate1(f, x, param) {
  var y = Curry._1(f, x);
  return /* Cons */{
          _0: y,
          _1: (function (param) {
              return iterate1(f, y, param);
            })
        };
}

function iterate(f, x) {
  return function (param) {
    return /* Cons */{
            _0: x,
            _1: (function (param) {
                return iterate1(f, x, param);
              })
          };
  };
}

function mapi_aux(f, i, xs, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var partial_arg = i + 1 | 0;
  return /* Cons */{
          _0: Curry._2(f, i, match._0),
          _1: (function (param) {
              return mapi_aux(f, partial_arg, xs$1, param);
            })
        };
}

function mapi(f, xs) {
  return function (param) {
    return mapi_aux(f, 0, xs, param);
  };
}

function tail_scan(f, s, xs, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var s$1 = Curry._2(f, s, match._0);
  return /* Cons */{
          _0: s$1,
          _1: (function (param) {
              return tail_scan(f, s$1, xs$1, param);
            })
        };
}

function scan(f, s, xs) {
  return function (param) {
    return /* Cons */{
            _0: s,
            _1: (function (param) {
                return tail_scan(f, s, xs, param);
              })
          };
  };
}

function take_aux(n, xs) {
  if (n === 0) {
    return empty;
  } else {
    return function (param) {
      var match = Curry._1(xs, undefined);
      if (match) {
        return /* Cons */{
                _0: match._0,
                _1: take_aux(n - 1 | 0, match._1)
              };
      } else {
        return /* Nil */0;
      }
    };
  }
}

function take(n, xs) {
  if (n < 0) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Seq.take",
          Error: new Error()
        };
  }
  return take_aux(n, xs);
}

function drop(n, xs) {
  if (n < 0) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Seq.drop",
          Error: new Error()
        };
  }
  if (n === 0) {
    return xs;
  } else {
    return function (param) {
      var _n = n;
      var _xs = xs;
      while(true) {
        var xs$1 = _xs;
        var n$1 = _n;
        var match = Curry._1(xs$1, undefined);
        if (!match) {
          return /* Nil */0;
        }
        var xs$2 = match._1;
        var n$2 = n$1 - 1 | 0;
        if (n$2 === 0) {
          return Curry._1(xs$2, undefined);
        }
        _xs = xs$2;
        _n = n$2;
        continue ;
      };
    };
  }
}

function take_while(p, xs, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var x = match._0;
  if (Curry._1(p, x)) {
    return /* Cons */{
            _0: x,
            _1: (function (param) {
                return take_while(p, xs$1, param);
              })
          };
  } else {
    return /* Nil */0;
  }
}

function drop_while(p, _xs, _param) {
  while(true) {
    var xs = _xs;
    var node = Curry._1(xs, undefined);
    if (!node) {
      return /* Nil */0;
    }
    if (!Curry._1(p, node._0)) {
      return node;
    }
    _param = undefined;
    _xs = node._1;
    continue ;
  };
}

function group(eq, xs, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var x = match._0;
  var partial_arg = Curry._1(eq, x);
  var partial_arg$1 = function (param) {
    return take_while(partial_arg, xs$1, param);
  };
  var partial_arg$2 = Curry._1(eq, x);
  var partial_arg$3 = function (param) {
    return drop_while(partial_arg$2, xs$1, param);
  };
  return /* Cons */{
          _0: (function (param) {
              return /* Cons */{
                      _0: x,
                      _1: partial_arg$1
                    };
            }),
          _1: (function (param) {
              return group(eq, partial_arg$3, param);
            })
        };
}

var Forced_twice = /* @__PURE__ */Caml_exceptions.create("Stdlib.Seq.Forced_twice");

function failure(param) {
  throw {
        RE_EXN_ID: Forced_twice,
        Error: new Error()
      };
}

function memoize(xs) {
  var partial_arg = {
    LAZY_DONE: false,
    VAL: (function () {
        var match = Curry._1(xs, undefined);
        if (match) {
          return /* Cons */{
                  _0: match._0,
                  _1: memoize(match._1)
                };
        } else {
          return /* Nil */0;
        }
      })
  };
  return function (param) {
    return CamlinternalLazy.force(partial_arg);
  };
}

function once(xs) {
  var f = function (param) {
    var match = Curry._1(xs, undefined);
    if (match) {
      return /* Cons */{
              _0: match._0,
              _1: once(match._1)
            };
    } else {
      return /* Nil */0;
    }
  };
  var action = Stdlib__Atomic.make(f);
  return function (param) {
    var f = Stdlib__Atomic.exchange(action, failure);
    return Curry._1(f, undefined);
  };
}

function zip(xs, ys, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var match$1 = Curry._1(ys, undefined);
  if (!match$1) {
    return /* Nil */0;
  }
  var ys$1 = match$1._1;
  return /* Cons */{
          _0: [
            match._0,
            match$1._0
          ],
          _1: (function (param) {
              return zip(xs$1, ys$1, param);
            })
        };
}

function map2(f, xs, ys, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xs$1 = match._1;
  var match$1 = Curry._1(ys, undefined);
  if (!match$1) {
    return /* Nil */0;
  }
  var ys$1 = match$1._1;
  return /* Cons */{
          _0: Curry._2(f, match._0, match$1._0),
          _1: (function (param) {
              return map2(f, xs$1, ys$1, param);
            })
        };
}

function interleave(xs, ys, param) {
  var match = Curry._1(xs, undefined);
  if (!match) {
    return Curry._1(ys, undefined);
  }
  var xs$1 = match._1;
  return /* Cons */{
          _0: match._0,
          _1: (function (param) {
              return interleave(ys, xs$1, param);
            })
        };
}

function sorted_merge1(cmp, x, xs, y, ys) {
  if (Curry._2(cmp, x, y) <= 0) {
    return /* Cons */{
            _0: x,
            _1: (function (param) {
                var match = Curry._1(xs, undefined);
                if (match) {
                  return sorted_merge1(cmp, match._0, match._1, y, ys);
                } else {
                  return /* Cons */{
                          _0: y,
                          _1: ys
                        };
                }
              })
          };
  } else {
    return /* Cons */{
            _0: y,
            _1: (function (param) {
                var match = Curry._1(ys, undefined);
                if (match) {
                  return sorted_merge1(cmp, x, xs, match._0, match._1);
                } else {
                  return /* Cons */{
                          _0: x,
                          _1: xs
                        };
                }
              })
          };
  }
}

function sorted_merge(cmp, xs, ys, param) {
  var match = Curry._1(xs, undefined);
  var match$1 = Curry._1(ys, undefined);
  if (match) {
    if (match$1) {
      return sorted_merge1(cmp, match._0, match._1, match$1._0, match$1._1);
    } else {
      return match;
    }
  } else if (match$1) {
    return match$1;
  } else {
    return /* Nil */0;
  }
}

function map_fst(xys, param) {
  var match = Curry._1(xys, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xys$1 = match._1;
  return /* Cons */{
          _0: match._0[0],
          _1: (function (param) {
              return map_fst(xys$1, param);
            })
        };
}

function map_snd(xys, param) {
  var match = Curry._1(xys, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var xys$1 = match._1;
  return /* Cons */{
          _0: match._0[1],
          _1: (function (param) {
              return map_snd(xys$1, param);
            })
        };
}

function unzip(xys) {
  return [
          (function (param) {
              return map_fst(xys, param);
            }),
          (function (param) {
              return map_snd(xys, param);
            })
        ];
}

function filter_map_find_left_map(f, _xs, _param) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var xs$1 = match._1;
    var y = Curry._1(f, match._0);
    if (y.TAG === /* Left */0) {
      return /* Cons */{
              _0: y._0,
              _1: (function(xs$1){
              return function (param) {
                return filter_map_find_left_map(f, xs$1, param);
              }
              }(xs$1))
            };
    }
    _param = undefined;
    _xs = xs$1;
    continue ;
  };
}

function filter_map_find_right_map(f, _xs, _param) {
  while(true) {
    var xs = _xs;
    var match = Curry._1(xs, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var xs$1 = match._1;
    var z = Curry._1(f, match._0);
    if (z.TAG !== /* Left */0) {
      return /* Cons */{
              _0: z._0,
              _1: (function(xs$1){
              return function (param) {
                return filter_map_find_right_map(f, xs$1, param);
              }
              }(xs$1))
            };
    }
    _param = undefined;
    _xs = xs$1;
    continue ;
  };
}

function partition_map(f, xs) {
  return [
          (function (param) {
              return filter_map_find_left_map(f, xs, param);
            }),
          (function (param) {
              return filter_map_find_right_map(f, xs, param);
            })
        ];
}

function partition(p, xs) {
  return [
          (function (param) {
              return filter(p, xs, param);
            }),
          (function (param) {
              return filter((function (x) {
                            return !Curry._1(p, x);
                          }), xs, param);
            })
        ];
}

function transpose(xss, param) {
  var match = unzip(function (param) {
        return filter_map(uncons, xss, param);
      });
  var tails = match[1];
  var heads = match[0];
  if (!is_empty(heads)) {
    return /* Cons */{
            _0: heads,
            _1: (function (param) {
                return transpose(tails, param);
              })
          };
  }
  if (!is_empty(tails)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "jscomp/stdlib/seq.ml",
            616,
            4
          ],
          Error: new Error()
        };
  }
  return /* Nil */0;
}

function diagonals(remainders, xss, param) {
  var match = Curry._1(xss, undefined);
  if (!match) {
    return transpose(remainders, undefined);
  }
  var xss$1 = match._1;
  var match$1 = Curry._1(match._0, undefined);
  if (match$1) {
    var xs = match$1._1;
    var x = match$1._0;
    var match$2 = unzip(function (param) {
          return filter_map(uncons, remainders, param);
        });
    var tails = match$2[1];
    var heads = match$2[0];
    return /* Cons */{
            _0: (function (param) {
                return /* Cons */{
                        _0: x,
                        _1: heads
                      };
              }),
            _1: (function (param) {
                return diagonals((function (param) {
                              return /* Cons */{
                                      _0: xs,
                                      _1: tails
                                    };
                            }), xss$1, param);
              })
          };
  }
  var match$3 = unzip(function (param) {
        return filter_map(uncons, remainders, param);
      });
  var tails$1 = match$3[1];
  return /* Cons */{
          _0: match$3[0],
          _1: (function (param) {
              return diagonals(tails$1, xss$1, param);
            })
        };
}

function map_product(f, xs, ys) {
  return function (param) {
    return concat((function (param) {
                  return diagonals(empty, (function (param) {
                                return map((function (x) {
                                              return function (param) {
                                                return map((function (y) {
                                                              return Curry._2(f, x, y);
                                                            }), ys, param);
                                              };
                                            }), xs, param);
                              }), param);
                }), param);
  };
}

function product(xs, ys) {
  return map_product((function (x, y) {
                return [
                        x,
                        y
                      ];
              }), xs, ys);
}

function of_dispenser(it) {
  var c = function (param) {
    var x = Curry._1(it, undefined);
    if (x !== undefined) {
      return /* Cons */{
              _0: Caml_option.valFromOption(x),
              _1: c
            };
    } else {
      return /* Nil */0;
    }
  };
  return c;
}

function to_dispenser(xs) {
  var s = {
    contents: xs
  };
  return function (param) {
    var match = Curry._1(s.contents, undefined);
    if (match) {
      s.contents = match._1;
      return Caml_option.some(match._0);
    }
    
  };
}

function ints(i, param) {
  var partial_arg = i + 1 | 0;
  return /* Cons */{
          _0: i,
          _1: (function (param) {
              return ints(partial_arg, param);
            })
        };
}

var concat_map = flat_map;

var split = unzip;

export {
  is_empty ,
  uncons ,
  length ,
  iter ,
  fold_left ,
  iteri ,
  fold_lefti ,
  for_all ,
  exists ,
  find ,
  find_index ,
  find_map ,
  find_mapi ,
  iter2 ,
  fold_left2 ,
  for_all2 ,
  exists2 ,
  equal ,
  compare ,
  empty ,
  $$return ,
  cons ,
  init ,
  unfold ,
  repeat ,
  forever ,
  cycle ,
  iterate ,
  map ,
  mapi ,
  filter ,
  filter_map ,
  scan ,
  take ,
  drop ,
  take_while ,
  drop_while ,
  group ,
  memoize ,
  Forced_twice ,
  once ,
  transpose ,
  append ,
  concat ,
  flat_map ,
  concat_map ,
  zip ,
  map2 ,
  interleave ,
  sorted_merge ,
  product ,
  map_product ,
  unzip ,
  split ,
  partition_map ,
  partition ,
  of_dispenser ,
  to_dispenser ,
  ints ,
}
/* No side effect */
