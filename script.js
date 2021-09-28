var stl = "background-color: black;color: white;font-size: 30pt;font-family: Microsoft Yahei;";
console.log("%cY B L U I - E", stl);
var gameover = false, tile = 2, tem, fxi = ["top", "right", "down", "left"], win = false, jm = false, i;
var get = (gev) => document.getElementsByClassName(gev)[0];
var dch = (dcv) => get(dcv).parentNode.removeChild(get(dcv));

function mge(mgv) {
    get(mgv).innerText = Number(get(mgv).innerText) * 2;
    document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Number(get(mgv).innerText);
}

if (!document.cookie) document.cookie = "record=0;expires=Thu, 18 Dec 2043 12:00:00 GMT";
document.getElementById("bet").innerText = Number(document.cookie.replace("record=", "").replace(";expires=Thu, 31 Dec 2099 23:59:59 GMT", ""));

function abc(event) {
    if (event.keyCode == 32) refresh();
    else if (event.keyCode == 89) location.href = "/..";
    event.preventDefault();
    if (!gameover && 37 <= event.keyCode && event.keyCode <= 40) {
        switch (event.keyCode) {
            case 37:
                for (i = 1; i <= 4; i++) {
                    if (get("c-right-" + i).className.indexOf("visible") == -1) {
                        if (get("c-left-" + i).className.indexOf("visible") == -1 && get("a-" + i + " b-1")) dch("a-" + i + " b-1");
                        for (let s = 1; s < 4; s++) {
                            if (get("a-" + i + " b-" + s)) {
                                if (get("a-" + i + " b-" + (s + 1)) && get("a-" + i + " b-" + s).innerText == get("a-" + i + " b-" + (s + 1)).innerText) {
                                    dch("a-" + i + " b-" + s);
                                    mge("a-" + i + " b-" + (s + 1));
                                    get("a-" + i + " b-" + (s + 1)).className = "a-" + i + " b-" + s;
                                }
                            } else if (get("a-" + i + " b-" + (s + 1))) get("a-" + i + " b-" + (s + 1)).className = "a-" + i + " b-" + s;
                        }
                    }
                }
                if (Boolean(get("a-1 b-4") && get("c-right-1").className.indexOf("visible") == -1 && get("c-left-1").classList
                    .contains("visible")) || Boolean(get("a-2 b-4") && get("c-right-2").className.indexOf("visible") ==
                        -1 && get("c-left-2").classList.contains("visible")) || Boolean(get("a-3 b-4") && get(
                            "c-right-3").className.indexOf("visible") == -1 && get("c-left-3").classList.contains(
                                "visible")) || Boolean(get("a-4 b-4") && get("c-right-4").className.indexOf("visible") == -1 &&
                                    get("c-left-4").classList.contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "1";
                    get("ntc").style.visibility = "visible";
                    break;
                }
                ati(tile, "left");
                break;
            case 38:
                for (var a = 1; a <= 4; a++) {
                    if (get("c-down-" + a).className.indexOf("visible") == -1) {
                        if (get("c-up-" + a).className.indexOf("visible") == -1 && get("a-1 b-" + a)) dch("a-1 b-" + a);
                        if (get("a-1 b-" + a)) {
                            if (get("a-2 b-" + a) && get("a-1 b-" + a).innerText == get("a-2 b-" + a).innerText) {
                                dch("a-1 b-" + a);
                                mge("a-2 b-" + a);
                                get("a-2 b-" + a).className = "a-1 b-" + a;
                            }
                        } else if (get("a-2 b-" + a)) get("a-2 b-" + a).className = "a-1 b-" + a;
                        if (get("a-2 b-" + a)) {
                            if (get("a-3 b-" + a) && get("a-2 b-" + a).innerText == get("a-3 b-" + a).innerText) {
                                dch("a-2 b-" + a);
                                mge("a-3 b-" + a);
                                get("a-3 b-" + a).className = "a-2 b-" + a;
                            }
                        } else if (get("a-3 b-" + a)) {
                            get("a-3 b-" + a).className = "a-2 b-" + a;
                        }
                        if (get("a-3 b-" + a)) {
                            if (get("a-4 b-" + a) && get("a-3 b-" + a).innerText == get("a-4 b-" + a).innerText) {
                                dch("a-3 b-" + a);
                                mge("a-4 b-" + a);
                                get("a-4 b-" + a).className = "a-3 b-" + a;
                            }
                        } else if (get("a-4 b-" + a)) {
                            get("a-4 b-" + a).className = "a-3 b-" + a;
                        }
                    }
                }
                if (Boolean(get("a-4 b-1") && get("c-down-1").className.indexOf("visible") == -1 && get("c-up-1").classList
                    .contains("visible")) || Boolean(get("a-4 b-2") && get("c-down-2").className.indexOf("visible") ==
                        -1 && get("c-up-2").classList.contains("visible")) || Boolean(get("a-4 b-3") && get("c-down-3")
                            .className.indexOf("visible") == -1 && get("c-up-3").classList.contains("visible")) || Boolean(
                                get("a-4 b-4") && get("c-down-4").className.indexOf("visible") == -1 && get("c-up-4").classList
                                    .contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "1";
                    get("ntc").style.visibility = "visible";
                    break;
                }
                ati(tile, "up");
                break;
            case 39:
                for (var b = 1; b <= 4; b++) {
                    if (get("c-left-" + b).className.indexOf("visible") == -1) {
                        if (get("c-right-" + b).className.indexOf("visible") == -1 && get("a-" + b + " b-4")) {
                            dch("a-" + b + " b-4");
                        }
                        if (get("a-" + b + " b-4")) {
                            if (get("a-" + b + " b-3") && get("a-" + b + " b-4").innerText == get("a-" + b + " b-3").innerText) {
                                dch("a-" + b + " b-4");
                                mge("a-" + b + " b-3");
                                get("a-" + b + " b-3").className = "a-" + b + " b-4";
                            }
                        } else if (get("a-" + b + " b-3")) {
                            get("a-" + b + " b-3").className = "a-" + b + " b-4";
                        }
                        if (get("a-" + b + " b-3")) {
                            if (get("a-" + b + " b-2") && get("a-" + b + " b-3").innerText == get("a-" + b + " b-2").innerText) {
                                dch("a-" + b + " b-3");
                                mge("a-" + b + " b-2");
                                get("a-" + b + " b-2").className = "a-" + b + " b-3";
                            }
                        } else if (get("a-" + b + " b-2")) {
                            get("a-" + b + " b-2").className = "a-" + b + " b-3";
                        }
                        if (get("a-" + b + " b-2")) {
                            if (get("a-" + b + " b-1") && get("a-" + b + " b-2").innerText == get("a-" + b + " b-1").innerText) {
                                dch("a-" + b + " b-2");
                                mge("a-" + b + " b-1");
                                get("a-" + b + " b-1").className = "a-" + b + " b-2";
                            }
                        } else if (get("a-" + b + " b-1")) {
                            get("a-" + b + " b-1").className = "a-" + b + " b-2";
                        }
                    }
                }
                if (Boolean(get("a-1 b-1") && get("c-left-1").className.indexOf("visible") == -1 && get("c-right-1").classList
                    .contains("visible")) || Boolean(get("a-2 b-1") && get("c-left-2").className.indexOf("visible") ==
                        -1 && get("c-right-2").classList.contains("visible")) || Boolean(get("a-3 b-1") && get(
                            "c-left-3").className.indexOf("visible") == -1 && get("c-right-3").classList.contains(
                                "visible")) || Boolean(get("a-4 b-1") && get("c-left-4").className.indexOf("visible") == -1 &&
                                    get("c-right-4").classList.contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "1";
                    get("ntc").style.visibility = "visible";
                    break;
                }
                ati(tile, "right");
                break;
            case 40:
                for (var d = 1; d <= 4; d++) {
                    if (get("c-up-" + d).className.indexOf("visible") == -1) {
                        if (get("c-down-" + d).className.indexOf("visible") == -1 && get("a-4 b-" + d)) {
                            dch("a-4 b-" + d);
                        }
                        if (get("a-4 b-" + d)) {
                            if (get("a-3 b-" + d) && get("a-4 b-" + d).innerText == get("a-3 b-" + d).innerText) {
                                dch("a-4 b-" + d);
                                mge("a-3 b-" + d);
                                get("a-3 b-" + d).className = "a-4 b-" + d;
                            }
                        } else if (get("a-3 b-" + d)) {
                            get("a-3 b-" + d).className = "a-4 b-" + d;
                        }
                        if (get("a-3 b-" + d)) {
                            if (get("a-2 b-" + d) && get("a-3 b-" + d).innerText == get("a-2 b-" + d).innerText) {
                                dch("a-3 b-" + d);
                                mge("a-2 b-" + d);
                                get("a-2 b-" + d).className = "a-3 b-" + d;
                            }
                        } else if (get("a-2 b-" + d)) {
                            get("a-2 b-" + d).className = "a-3 b-" + d;
                        }
                        if (get("a-2 b-" + d)) {
                            if (get("a-1 b-" + d) && get("a-2 b-" + d).innerText == get("a-1 b-" + d).innerText) {
                                dch("a-2 b-" + d);
                                mge("a-1 b-" + d);
                                get("a-1 b-" + d).className = "a-2 b-" + d;
                            }
                        } else if (get("a-1 b-" + d)) {
                            get("a-1 b-" + d).className = "a-2 b-" + d;
                        }
                    }
                }
                if (Boolean(get("a-1 b-1") && get("c-up-1").className.indexOf("visible") == -1 && get("c-down-1").classList
                    .contains("visible")) || Boolean(get("a-1 b-2") && get("c-up-2").className.indexOf("visible") ==
                        -1 && get("c-down-2").classList.contains("visible")) || Boolean(get("a-1 b-3") && get("c-up-3")
                            .className.indexOf("visible") == -1 && get("c-down-3").classList.contains("visible")) ||
                    Boolean(get("a-1 b-4") && get("c-up-4").className.indexOf("visible") == -1 && get("c-down-4").classList
                        .contains("visible"))) {
                    gameover = true;
                    get("ntc").style.opacity = "1";
                    get("ntc").style.visibility = "visible";
                    break;
                }
                ati(tile, "down");
                break;
        }
    }
    if (!gameover && 37 <= event.keyCode && event.keyCode <= 40) {
        if (jm) {
            tile++;
            jm = false;
        } else jm = true;
        var list = ["c-up-1", "c-up-2", "c-up-3", "c-up-4", "c-down-1", "c-down-2", "c-down-3", "c-down-4", "c-left-1",
            "c-left-2", "c-left-3", "c-left-4", "c-right-1", "c-right-2", "c-right-3", "c-right-4"
        ]
        cvi(get(list[Math.floor(Math.random() * 16)]));
    }
    document.getElementById("tle").innerText = tile;
}

function cvi(che) {
    if (che.classList.contains("visible")) che.classList.remove("visible");
    else che.classList.add("visible");
}

function refresh() {
    document.getElementsByClassName("container")[0].innerHTML = '<div class="a-1 b-1">1</div><div class="a-1 b-3">1</div><div class="a-2 b-2">1</div>' +
        '<div class="a-2 b-4">1</div><div class="a-3 b-1">1</div><div class="a-3 b-3">1</div><div class="a-4 b-2">1</div><div class="a-4 b-4">1</div><div class="c-up c-up-1 visible"></div>' +
        '<div class="c-up c-up-2"></div><div class="c-up c-up-3 visible"></div><div class="c-up c-up-4"></div><div class="c-down c-down-1 visible"></div>' +
        '<div class="c-down c-down-2 "></div><div class="c-down c-down-3 visible"></div><div class="c-down c-down-4 "></div><div class="c-left c-left-1 visible"></div>' +
        '<div class="c-left c-left-2"></div><div class="c-left c-left-3 visible"></div><div class="c-left c-left-4"></div><div class="c-right c-right-1 visible"></div>' +
        '<div class="c-right c-right-2"></div><div class="c-right c-right-3 visible"></div><div class="c-right c-right-4"></div><div class="ntc"><div id="itx">Game Over!</div>' +
        '<button onclick="refresh();"><span class="lit">space</span> Try Again</button></div><div class="ntc gld"><div id="itx">You win!</div><button ' +
        'onclick="kgo();"><span class="lit">enter</span> Keep going</button><button onclick="refresh();"><span class="lit">space</span> Try Again</button></div>';
    gameover = false;
    get("ntc").style.opacity = "0";
    get("ntc").style.visibility = "hidden";
    tile = 2;
    document.getElementById("score").innerText = "0";
    document.getElementById("tle").innerText = "2";
}

function ati(t, f) {
    if (f == "left") {
        for (i = 1; i <= 4; i++) {
            if (get("c-right-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div");
                tem.className = "a-" + i + " b-4";
                tem.appendChild(document.createTextNode(tile));
                get("container").appendChild(tem);
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile;
            }
        }
    } else if (f == "up") {
        for (i = 1; i <= 4; i++) {
            if (get("c-down-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div");
                tem.className = "a-4 b-" + i;
                tem.appendChild(document.createTextNode(tile));
                get("container").appendChild(tem);
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile;
            }
        }
    } else if (f == "right") {
        for (i = 1; i <= 4; i++) {
            if (get("c-left-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div");
                tem.className = "a-" + i + " b-1";
                tem.appendChild(document.createTextNode(tile));
                get("container").appendChild(tem);
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile;
            }
        }
    } else {
        for (i = 1; i <= 4; i++) {
            if (get("c-up-" + i).className.indexOf("visible") == -1) {
                tem = document.createElement("div");
                tem.className = "a-1 b-" + i;
                tem.appendChild(document.createTextNode(tile));
                get("container").appendChild(tem);
                document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + tile;
            }
        }
    }
    if (Number(document.getElementById("score").innerHTML) >= 1000 && !win) {
        get("gld").style.opacity = "1";
        get("gld").style.visibility = "visible";
        win = true;
    }
    if (Number(document.getElementById("score").innerHTML) > Number(document.cookie.replace("record=", "").replace(";expires=Thu, 31 Dec 2099 23:59:59 GMT", ""))) {
        document.cookie = "record=" + document.getElementById("score").innerHTML + ";expires=Thu, 31 Dec 2099 23:59:59 GMT";
        document.getElementById("bet").innerText = document.getElementById("score").innerHTML;
    }
}

function kgo() {
    get("gld").style.opacity = "0";
    get("gld").style.visibility = "hidden";
}
