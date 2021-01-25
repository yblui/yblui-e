var stl = "background-color:black;color:white;font-size:30pt;font-family:Microsoft Yahei;";
console.log("%cY B L U I - E", stl);
var gameover = false,
    tile = 2,
    tem;

function get(gev) {
    return document.getElementsByClassName(gev)[0];
}

function dch(dcv) {
    get(dcv).parentNode.removeChild(get(dcv));
}

function mge(mgv) {
    get(mgv).innerText = Number(get(mgv).innerText) * 2;
    document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Number(get(
        mgv).innerText);
}

function abc(event) {
    if (gameover == false) {
        switch (event.keyCode) {
            case 37:
                if (get("c-right-1").className.indexOf("visible") == -1) {
                    if (get("c-left-1").className.indexOf("visible") == -1 && get("a-1 b-1")) {
                        dch("a-1 b-1");
                    }
                    if (get("a-1 b-1")) {
                        if (get("a-1 b-2") && get("a-1 b-1").innerText == get("a-1 b-2").innerText) {
                            dch("a-1 b-1");
                            mge("a-1 b-2");
                            get("a-1 b-2").className = "a-1 b-1";
                        }
                    } else if (get("a-1 b-2")) {
                        get("a-1 b-2").className = "a-1 b-1";
                    }
                    if (get("a-1 b-2")) {
                        if (get("a-1 b-3") && get("a-1 b-2").innerText == get("a-1 b-3").innerText) {
                            dch("a-1 b-2");
                            mge("a-1 b-3");
                            get("a-1 b-3").className = "a-1 b-2";
                        }
                    } else if (get("a-1 b-3")) {
                        get("a-1 b-3").className = "a-1 b-2";
                    }
                    if (get("a-1 b-3")) {
                        if (get("a-1 b-4") && get("a-1 b-3").innerText == get("a-1 b-4").innerText) {
                            dch("a-1 b-3");
                            mge("a-1 b-4");
                            get("a-1 b-4").className = "a-1 b-3";
                        }
                    } else if (get("a-1 b-4")) {
                        get("a-1 b-4").className = "a-1 b-3";
                    }
                }
                if (get("c-right-2").className.indexOf("visible") == -1) {
                    if (get("c-left-2").className.indexOf("visible") == -1 && get("a-2 b-1")) {
                        dch("a-2 b-1");
                    }
                    if (get("a-2 b-1")) {
                        if (get("a-2 b-2") && get("a-2 b-1").innerText == get("a-2 b-2").innerText) {
                            dch("a-2 b-1");
                            mge("a-2 b-2");
                            get("a-2 b-2").className = "a-2 b-1";
                        }
                    } else if (get("a-2 b-2")) {
                        get("a-2 b-2").className = "a-2 b-1";
                    }
                    if (get("a-2 b-2")) {
                        if (get("a-2 b-3") && get("a-2 b-2").innerText == get("a-2 b-3").innerText) {
                            dch("a-2 b-2");
                            mge("a-2 b-3");
                            get("a-2 b-3").className = "a-2 b-2";
                        }
                    } else if (get("a-2 b-3")) {
                        get("a-2 b-3").className = "a-2 b-2";
                    }
                    if (get("a-2 b-3")) {
                        if (get("a-2 b-4") && get("a-2 b-3").innerText == get("a-2 b-4").innerText) {
                            dch("a-2 b-3");
                            mge("a-2 b-4");
                            get("a-2 b-4").className = "a-2 b-3";
                        }
                    } else if (get("a-2 b-4")) {
                        get("a-2 b-4").className = "a-2 b-3";
                    }
                }
                if (get("c-right-3").className.indexOf("visible") == -1) {
                    if (get("c-left-3").className.indexOf("visible") == -1 && get("a-3 b-1")) {
                        dch("a-3 b-1");
                    }
                    if (get("a-3 b-1")) {
                        if (get("a-3 b-2") && get("a-3 b-1").innerText == get("a-3 b-2").innerText) {
                            dch("a-3 b-1");
                            mge("a-3 b-2");
                            get("a-3 b-2").className = "a-3 b-1";
                        }
                    } else if (get("a-3 b-2")) {
                        get("a-3 b-2").className = "a-3 b-1"
                    }
                    if (get("a-3 b-2")) {
                        if (get("a-3 b-3") && get("a-3 b-2").innerText == get("a-3 b-3").innerText) {
                            dch("a-3 b-2");
                            mge("a-3 b-3");
                            get("a-3 b-3").className = "a-3 b-2";
                        }
                    } else if (get("a-3 b-3")) {
                        get("a-3 b-3").className = "a-3 b-2";
                    }
                    if (get("a-3 b-3")) {
                        if (get("a-3 b-4") && get("a-3 b-3").innerText == get("a-3 b-4").innerText) {
                            dch("a-3 b-3");
                            mge("a-3 b-4");
                            get("a-3 b-4").className = "a-3 b-3";
                        }
                    } else if (get("a-3 b-4")) {
                        get("a-3 b-4").className = "a-3 b-3";
                    }
                }
                if (get("c-right-4").className.indexOf("visible") == -1) {
                    if (get("c-left-4").className.indexOf("visible") == -1 && get("a-4 b-1")) {
                        dch("a-4 b-1")
                    }
                    if (get("a-4 b-1")) {
                        if (get("a-4 b-2") && get("a-4 b-1").innerText == get("a-4 b-2").innerText) {
                            dch("a-4 b-1");
                            mge("a-4 b-2");
                            get("a-4 b-2").className = "a-4 b-1";
                        }
                    } else if (get("a-4 b-2")) {
                        get("a-4 b-2").className = "a-4 b-1";
                    }
                    if (get("a-4 b-2")) {
                        if (get("a-4 b-3") && get("a-4 b-2").innerText == get("a-4 b-3").innerText) {
                            dch("a-4 b-2");
                            mge("a-4 b-3");
                            get("a-4 b-3").className = "a-4 b-2";
                        }
                    } else if (get(
                            "a-4 b-3")) {
                        get("a-4 b-3").className = "a-4 b-2";
                    }
                    if (get("a-4 b-3")) {
                        if (get("a-4 b-4") && get("a-4 b-3").innerText == get("a-4 b-4").innerText) {
                            dch("a-4 b-3");
                            mge("a-4 b-4");
                            get("a-4 b-4").className = "a-4 b-3";
                        }
                    } else if (get("a-4 b-4")) {
                        get("a-4 b-4").className = "a-4 b-3";
                    }
                }
                if (Boolean(get("a-1 b-4") && get("c-right-1").className.indexOf("visible") == -1 && get("c-left-1").classList
                        .contains("visible")) || Boolean(get("a-2 b-4") && get("c-right-2").className.indexOf("visible") ==
                        -1 && get("c-left-2").classList.contains("visible")) || Boolean(get("a-3 b-4") && get(
                        "c-right-3").className.indexOf("visible") == -1 && get("c-left-3").classList.contains(
                        "visible")) || Boolean(get("a-4 b-4") && get("c-right-4").className.indexOf("visible") == -1 &&
                        get("c-left-4").classList.contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "0.7"
                    break;
                }
                ati(tile, "left")
                break;
            case 38:
                if (get("c-down-1").className.indexOf("visible") == -1) {
                    if (get("c-up-1").className.indexOf("visible") == -1 && get("a-1 b-1")) {
                        dch("a-1 b-1")
                    }
                    if (get("a-1 b-1")) {
                        if (get("a-2 b-1") && get("a-1 b-1").innerText == get("a-2 b-1").innerText) {
                            dch("a-1 b-1");
                            mge("a-2 b-1");
                            get("a-2 b-1").className = "a-1 b-1";
                        }
                    } else if (get("a-2 b-1")) {
                        get("a-2 b-1").className = "a-1 b-1";
                    }
                    if (get("a-2 b-1")) {
                        if (get("a-3 b-1") && get("a-2 b-1").innerText == get("a-3 b-1").innerText) {
                            dch("a-2 b-1");
                            mge("a-3 b-1");
                            get("a-3 b-1").className = "a-2 b-1";
                        }
                    } else if (get("a-3 b-1")) {
                        get("a-3 b-1").className = "a-2 b-1";
                    }
                    if (get("a-3 b-1")) {
                        if (get("a-4 b-1") && get("a-3 b-1").innerText == get("a-4 b-1").innerText) {
                            dch("a-3 b-1");
                            mge("a-4 b-1");
                            get("a-4 b-1").className = "a-3 b-1";
                        }
                    } else if (get("a-4 b-1")) {
                        get("a-4 b-1").className = "a-3 b-1";
                    }
                }
                if (get("c-down-2").className.indexOf("visible") == -1) {
                    if (get("c-up-2").className.indexOf("visible") == -1 && get("a-1 b-2")) {
                        dch("a-1 b-2");
                    }
                    if (get("a-1 b-2")) {
                        if (get("a-2 b-2") && get("a-1 b-2").innerText == get("a-2 b-2").innerText) {
                            dch("a-1 b-2");
                            mge("a-2 b-2");
                            get("a-2 b-2").className = "a-1 b-2";
                        }
                    } else if (get("a-2 b-2")) {
                        get("a-2 b-2").className = "a-1 b-2";
                    }
                    if (get("a-2 b-2")) {
                        if (get("a-3 b-2") && get("a-2 b-2").innerText == get("a-3 b-2").innerText) {
                            dch("a-2 b-2");
                            mge("a-3 b-2");
                            get("a-3 b-2").className = "a-2 b-2";
                        }
                    } else if (get("a-3 b-2")) {
                        get("a-3 b-2").className = "a-2 b-2";
                    }
                    if (get("a-3 b-2")) {
                        if (get("a-4 b-2") && get("a-3 b-2").innerText == get("a-4 b-2").innerText) {
                            dch("a-3 b-2");
                            mge("a-4 b-2");
                            get("a-4 b-2").className = "a-3 b-2";
                        }
                    } else if (get("a-4 b-2")) {
                        get("a-4 b-2").className = "a-3 b-2";
                    }
                }
                if (get("c-down-3").className.indexOf("visible") == -1) {
                    if (get("c-up-3").className.indexOf("visible") == -1 && get("a-1 b-3")) {
                        dch("a-1 b-3")
                    }
                    if (get("a-1 b-3")) {
                        if (get("a-2 b-3") && get("a-1 b-3").innerText == get("a-2 b-3").innerText) {
                            dch("a-1 b-3");
                            mge("a-2 b-3");
                            get("a-2 b-3").className = "a-1 b-3";
                        }
                    } else if (get("a-2 b-3")) {
                        get("a-2 b-3").className = "a-1 b-3"
                    }
                    if (get("a-2 b-3")) {
                        if (get("a-3 b-3") && get("a-2 b-3").innerText == get("a-3 b-3").innerText) {
                            dch("a-2 b-3")
                            mge("a-3 b-3")
                            get("a-3 b-3").className = "a-2 b-3";
                        }
                    } else if (get("a-3 b-3")) {
                        get("a-3 b-3").className = "a-2 b-3"
                    }
                    if (get("a-3 b-3")) {
                        if (get("a-4 b-3") && get("a-3 b-3").innerText == get("a-4 b-3").innerText) {
                            dch("a-3 b-3")
                            mge("a-4 b-3")
                            get("a-4 b-3").className = "a-3 b-3";
                        }
                    } else if (get("a-4 b-3")) {
                        get("a-4 b-3").className = "a-3 b-3"
                    }
                }
                if (get("c-down-4").className.indexOf("visible") == -1) {
                    if (get("c-up-4").className.indexOf("visible") == -1 && get("a-1 b-4")) {
                        dch("a-1 b-4")
                    }
                    if (get("a-1 b-4")) {
                        if (get("a-2 b-4") && get("a-1 b-4").innerText == get("a-2 b-4").innerText) {
                            dch("a-1 b-4")
                            mge("a-2 b-4")
                            get("a-2 b-4").className = "a-1 b-4";
                        }
                    } else if (get("a-2 b-4")) {
                        get("a-2 b-4").className = "a-1 b-4"
                    }
                    if (get("a-2 b-4")) {
                        if (get("a-3 b-4") && get("a-2 b-4").innerText == get("a-3 b-4").innerText) {
                            dch("a-2 b-4")
                            mge("a-3 b-4")
                            get("a-3 b-4").className = "a-2 b-4";
                        }
                    } else if (get("a-3 b-4")) {
                        get("a-3 b-4").className = "a-2 b-4"
                    }
                    if (get("a-3 b-4")) {
                        if (get("a-4 b-4") && get("a-3 b-4").innerText == get("a-4 b-4").innerText) {
                            dch("a-3 b-4")
                            mge("a-4 b-4")
                            get("a-4 b-4").className = "a-3 b-4";
                        }
                    } else if (get("a-4 b-4")) {
                        get("a-4 b-4").className = "a-3 b-4"
                    }
                }
                if (Boolean(get("a-4 b-1") && get("c-down-1").className.indexOf("visible") == -1 && get("c-up-1").classList
                        .contains("visible")) || Boolean(get("a-4 b-2") && get("c-down-2").className.indexOf("visible") ==
                        -1 && get("c-up-2").classList.contains("visible")) || Boolean(get("a-4 b-3") && get("c-down-3")
                        .className.indexOf("visible") == -1 && get("c-up-3").classList.contains("visible")) || Boolean(
                        get("a-4 b-4") && get("c-down-4").className.indexOf("visible") == -1 && get("c-up-4").classList
                        .contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "0.7";
                    break;
                }
                ati(tile, "up")
                break;
            case 39:
                if (get("c-left-1").className.indexOf("visible") == -1) {
                    if (get("c-right-1").className.indexOf("visible") == -1 && get("a-1 b-4")) {
                        dch("a-1 b-4")
                    }
                    if (get("a-1 b-4")) {
                        if (get("a-1 b-3") && get("a-1 b-4").innerText == get("a-1 b-3").innerText) {
                            dch("a-1 b-4")
                            mge("a-1 b-3")
                            get("a-1 b-3").className = "a-1 b-4";
                        }
                    } else if (get("a-1 b-3")) {
                        get("a-1 b-3").className = "a-1 b-4";
                    }
                    if (get("a-1 b-3")) {
                        if (get("a-1 b-2") && get("a-1 b-3").innerText == get("a-1 b-2").innerText) {
                            dch("a-1 b-3");
                            mge("a-1 b-2");
                            get("a-1 b-2").className = "a-1 b-3";
                        }
                    } else if (get("a-1 b-2")) {
                        get("a-1 b-2").className = "a-1 b-3";
                    }
                    if (get("a-1 b-2")) {
                        if (get("a-1 b-1") && get("a-1 b-2").innerText == get("a-1 b-1").innerText) {
                            dch("a-1 b-2");
                            mge("a-1 b-1");
                            get("a-1 b-1").className = "a-1 b-2";
                        }
                    } else if (get("a-1 b-1")) {
                        get("a-1 b-1").className = "a-1 b-2";
                    }
                }
                if (get("c-left-2").className.indexOf("visible") == -1) {
                    if (get("c-right-2").className.indexOf("visible") == -1 && get("a-2 b-4")) {
                        dch("a-2 b-4");
                    }
                    if (get("a-2 b-4")) {
                        if (get("a-2 b-3") && get("a-2 b-4").innerText == get("a-2 b-3").innerText) {
                            dch("a-2 b-4");
                            mge("a-2 b-3");
                            get("a-2 b-3").className = "a-2 b-4";
                        }
                    } else if (get("a-2 b-3")) {
                        get("a-2 b-3").className = "a-2 b-4";
                    }
                    if (get("a-2 b-3")) {
                        if (get("a-2 b-2") && get("a-2 b-3").innerText == get("a-2 b-2").innerText) {
                            dch("a-2 b-3");
                            mge("a-2 b-2");
                            get("a-2 b-2").className = "a-2 b-3";
                        }
                    } else if (get("a-2 b-2")) {
                        get("a-2 b-2").className = "a-2 b-3";
                    }
                    if (get("a-2 b-2")) {
                        if (get("a-2 b-1") && get("a-2 b-2").innerText == get("a-2 b-1").innerText) {
                            dch("a-2 b-2");
                            mge("a-2 b-1");
                            get("a-2 b-1").className = "a-2 b-2";
                        }
                    } else if (get("a-2 b-1")) {
                        get("a-2 b-1").className = "a-2 b-2";
                    }
                }
                if (get("c-left-3").className.indexOf("visible") == -1) {
                    if (get("c-right-3").className.indexOf("visible") == -1 && get("a-3 b-4")) {
                        dch("a-3 b-4");
                    }
                    if (get("a-3 b-4")) {
                        if (get("a-3 b-3") && get("a-3 b-4").innerText == get("a-3 b-3").innerText) {
                            dch("a-3 b-4");
                            mge("a-3 b-3");
                            get("a-3 b-3").className = "a-3 b-4";
                        }
                    } else if (get("a-3 b-3")) {
                        get("a-3 b-3").className = "a-3 b-4";
                    }
                    if (get("a-3 b-3")) {
                        if (get("a-3 b-2") && get("a-3 b-3").innerText == get("a-3 b-2").innerText) {
                            dch("a-3 b-3");
                            mge("a-3 b-2")
                            get("a-3 b-2").className = "a-3 b-3";
                        }
                    } else if (get("a-3 b-2")) {
                        get("a-3 b-2").className = "a-3 b-3";
                    }
                    if (get("a-3 b-2")) {
                        if (get("a-3 b-1") && get("a-3 b-2").innerText == get("a-3 b-1").innerText) {
                            dch("a-3 b-2");
                            mge("a-3 b-1");
                            get("a-3 b-1").className = "a-3 b-2";
                        }
                    } else if (get("a-3 b-1")) {
                        get("a-3 b-1").className = "a-3 b-2"
                    }
                }
                if (get("c-left-4").className.indexOf("visible") == -1) {
                    if (get("c-right-4").className.indexOf("visible") == -1 && get("a-4 b-4")) {
                        dch("a-4 b-4");
                    }
                    if (get("a-4 b-4")) {
                        if (get("a-4 b-3") && get("a-4 b-4").innerText == get("a-4 b-3").innerText) {
                            dch("a-4 b-4");
                            mge("a-4 b-3");
                            get("a-4 b-3").className = "a-4 b-4";
                        }
                    } else if (get("a-4 b-3")) {
                        get("a-4 b-3").className = "a-4 b-4";
                    }
                    if (get("a-4 b-3")) {
                        if (get("a-4 b-2") && get("a-4 b-3").innerText == get("a-4 b-2").innerText) {
                            dch("a-4 b-3");
                            mge("a-4 b-2");
                            get("a-4 b-2").className = "a-4 b-3";
                        }
                    } else if (get("a-4 b-2")) {
                        get("a-4 b-2").className = "a-4 b-3";
                    }
                    if (get("a-4 b-2")) {
                        if (get("a-4 b-1") && get("a-4 b-2").innerText == get("a-4 b-1").innerText) {
                            dch("a-4 b-2");
                            mge("a-4 b-1");
                            get("a-4 b-1").className = "a-4 b-2";
                        }
                    } else if (get("a-4 b-1")) {
                        get("a-4 b-1").className = "a-4 b-2";
                    }
                }
                if (Boolean(get("a-1 b-1") && get("c-left-1").className.indexOf("visible") == -1 && get("c-right-1").classList
                        .contains("visible")) || Boolean(get("a-2 b-1") && get("c-left-2").className.indexOf("visible") ==
                        -1 && get("c-right-2").classList.contains("visible")) || Boolean(get("a-3 b-1") && get(
                        "c-left-3").className.indexOf("visible") == -1 && get("c-right-3").classList.contains(
                        "visible")) || Boolean(get("a-4 b-1") && get("c-left-4").className.indexOf("visible") == -1 &&
                        get("c-right-4").classList.contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "0.7";
                    break;
                }
                ati(tile, "right")
                break;
            case 40:
                if (get("c-up-1").className.indexOf("visible") == -1) {
                    if (get("c-down-1").className.indexOf("visible") == -1 && get("a-4 b-1")) {
                        dch("a-4 b-1");
                    }
                    if (get("a-4 b-1")) {
                        if (get("a-3 b-1") && get("a-4 b-1").innerText == get("a-3 b-1").innerText) {
                            dch("a-4 b-1");
                            mge("a-3 b-1");
                            get("a-3 b-1").className = "a-4 b-1";
                        }
                    } else if (get("a-3 b-1")) {
                        get("a-3 b-1").className = "a-4 b-1";
                    }
                    if (get("a-3 b-1")) {
                        if (get("a-2 b-1") && get("a-3 b-1").innerText == get("a-2 b-1").innerText) {
                            dch("a-3 b-1");
                            mge("a-2 b-1");
                            get("a-2 b-1").className = "a-3 b-1";
                        }
                    } else if (get("a-2 b-1")) {
                        get("a-2 b-1").className = "a-3 b-1";
                    }
                    if (get("a-2 b-1")) {
                        if (get("a-1 b-1") && get("a-2 b-1").innerText == get("a-1 b-1").innerText) {
                            dch("a-2 b-1");
                            mge("a-1 b-1");
                            get("a-1 b-1").className = "a-2 b-1";
                        }
                    } else if (get("a-1 b-1")) {
                        get("a-1 b-1").className = "a-2 b-1";
                    }
                }
                if (get("c-up-2").className.indexOf("visible") == -1) {
                    if (get("c-down-2").className.indexOf("visible") == -1 && get("a-4 b-2")) {
                        dch("a-4 b-2");
                    }
                    if (get("a-4 b-2")) {
                        if (get("a-3 b-2") && get("a-4 b-2").innerText == get("a-3 b-2").innerText) {
                            dch("a-4 b-2");
                            mge("a-3 b-2");
                            get("a-3 b-2").className = "a-4 b-2";
                        }
                    } else if (get("a-3 b-2")) {
                        get("a-3 b-2").className = "a-4 b-2";
                    }
                    if (get("a-3 b-2")) {
                        if (get("a-2 b-2") && get("a-3 b-2").innerText == get("a-2 b-2").innerText) {
                            dch("a-3 b-2");
                            mge("a-2 b-2");
                            get("a-2 b-2").className = "a-3 b-2";
                        }
                    } else if (get("a-2 b-2")) {
                        get("a-2 b-2").className = "a-3 b-2";
                    }
                    if (get("a-2 b-2")) {
                        if (get("a-1 b-2") && get("a-2 b-2").innerText == get("a-1 b-2").innerText) {
                            dch("a-2 b-2");
                            mge("a-1 b-2");
                            get("a-1 b-2").className = "a-2 b-2";
                        }
                    } else if (get("a-1 b-2")) {
                        get("a-1 b-2").className = "a-2 b-2";
                    }
                }
                if (get("c-up-3").className.indexOf("visible") == -1) {
                    if (get("c-down-3").className.indexOf("visible") == -1 && get("a-4 b-3")) {
                        dch("a-4 b-3");
                    }
                    if (get("a-4 b-3")) {
                        if (get("a-3 b-3") && get("a-4 b-3").innerText == get("a-3 b-3").innerText) {
                            dch("a-4 b-3");
                            mge("a-3 b-3");
                            get("a-3 b-3").className = "a-4 b-3";
                        }
                    } else if (get("a-3 b-3")) {
                        get("a-3 b-3").className = "a-4 b-3";
                    }
                    if (get("a-3 b-3")) {
                        if (get("a-2 b-3") && get("a-3 b-3").innerText == get("a-2 b-3").innerText) {
                            dch("a-3 b-3");
                            mge("a-2 b-3");
                            get("a-2 b-3").className = "a-3 b-3";
                        }
                    } else if (get("a-2 b-3")) {
                        get("a-2 b-3").className = "a-3 b-3";
                    }
                    if (get("a-2 b-3")) {
                        if (get("a-1 b-3") && get("a-2 b-3").innerText == get("a-1 b-3").innerText) {
                            dch("a-2 b-3");
                            mge("a-1 b-3");
                            get("a-1 b-3").className = "a-2 b-3";
                        }
                    } else if (get("a-1 b-3")) {
                        get("a-1 b-3").className = "a-2 b-3";
                    }
                }
                if (get("c-up-4").className.indexOf("visible") == -1) {
                    if (get("c-down-4").className.indexOf("visible") == -1 && get("a-4 b-4")) {
                        dch("a-4 b-4")
                    }
                    if (get("a-4 b-4")) {
                        if (get("a-3 b-4") && get("a-4 b-4").innerText == get("a-3 b-4").innerText) {
                            dch("a-4 b-4");
                            mge("a-3 b-4");
                            get("a-3 b-4").className = "a-4 b-4";
                        }
                    } else if (get("a-3 b-4")) {
                        get("a-3 b-4").className = "a-4 b-4";
                    }
                    if (get("a-3 b-4")) {
                        if (get("a-2 b-4") && get("a-3 b-4").innerText == get("a-2 b-4").innerText) {
                            dch("a-3 b-4");
                            mge("a-2 b-4");
                            get("a-2 b-4").className = "a-3 b-4";
                        }
                    } else if (get("a-2 b-4")) {
                        get("a-2 b-4").className = "a-3 b-4";
                    }
                    if (get("a-2 b-4")) {
                        if (get("a-1 b-4") && get("a-2 b-4").innerText == get("a-1 b-4").innerText) {
                            dch("a-2 b-4");
                            mge("a-1 b-4");
                            get("a-1 b-4").className = "a-2 b-4";
                        }
                    } else if (get("a-1 b-4")) {
                        get("a-1 b-4").className = "a-2 b-4";
                    }
                }
                if (Boolean(get("a-1 b-1") && get("c-up-1").className.indexOf("visible") == -1 && get("c-down-1").classList
                        .contains("visible")) || Boolean(get("a-1 b-2") && get("c-up-2").className.indexOf("visible") ==
                        -1 && get("c-down-2").classList.contains("visible")) || Boolean(get("a-1 b-3") && get("c-up-3")
                        .className.indexOf("visible") == -1 && get("c-down-3").classList.contains("visible")) ||
                    Boolean(get("a-1 b-4") && get("c-up-4").className.indexOf("visible") == -1 && get("c-down-4").classList
                        .contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "0.7";
                    break;
                }
                ati(tile, "down");
                break;
        }
    }
    if (gameover == false) {
        tile++;
        var list = ["c-up-1", "c-up-2", "c-up-3", "c-up-4", "c-down-1", "c-down-2", "c-down-3", "c-down-4", "c-left-1",
            "c-left-2", "c-left-3", "c-left-4", "c-right-1", "c-right-2", "c-right-3", "c-right-4"
        ]
        if (37 <= event.keyCode && event.keyCode <= 40) {
            cvi(get(list[Math.floor(Math.random() * 16)]));
        }
    }
    document.getElementById("tle").innerText=tile
}

function cvi(che) {
    if (che.classList.contains("visible")) {
        che.classList.remove("visible");
    } else {
        che.classList.add("visible");
    }
}

function refresh() {
    if (get("ntc").style.opacity == "0.7") {
        history.go(0)
    }
}

function ati(t, f) {
    if (f == "left") {
        for (var i = 1; i <= 4; i++) {
            if (get("c-right-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div")
                tem.className = "a-" + i + " b-4"
                tem.appendChild(document.createTextNode(tile))
                document.getElementsByTagName("body")[0].appendChild(tem)
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile
            }
        }
    } else if (f == "up") {
        for (var i = 1; i <= 4; i++) {
            if (get("c-down-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div")
                tem.className = "a-4 b-" + i
                tem.appendChild(document.createTextNode(tile))
                document.getElementsByTagName("body")[0].appendChild(tem)
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile
            }
        }
    } else if (f == "right") {
        for (var i = 1; i <= 4; i++) {
            if (get("c-left-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div")
                tem.className = "a-" + i + " b-1"
                tem.appendChild(document.createTextNode(tile))
                document.getElementsByTagName("body")[0].appendChild(tem)
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile
            }
        }
    } else {
        for (var i = 1; i <= 4; i++) {
            if (get("c-up-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div")
                tem.className = "a-1 b-" + i
                tem.appendChild(document.createTextNode(tile))
                document.getElementsByTagName("body")[0].appendChild(tem)
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile
            }
        }
    }
}
