function operator(proxies) {
  var p1 = "US-VLESS-Reality-BWG";
  var p2 = "\u843d\u5730";
  var n1 = "";
  var n2 = "";
  for (var i = 0; i < proxies.length; i++) {
    if (proxies[i].name.indexOf(p1) !== -1) n1 = proxies[i].name;
    if (proxies[i].name.indexOf(p2) !== -1) n2 = proxies[i].name;
  }
  if (n1 && n2) {
    var g = {
      name: "ChatGPT-Relay",
      type: "relay",
      proxies: [n1, n2]
    };
    return { proxies: proxies, groups: [g] };
  }
  return proxies;
}
