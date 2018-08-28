var page = "https://aderhall.github.io/i.html";
var header = "";
var content = "";
var footer = "";
var doc = ""
function getHeader () {
  header = this.responseText;
}
function getContent () {
  content = this.responseText;
}
function getFooter () {
  footer = this.responseText;
  doc = header + content + footer;
  console.log(doc);
  document.write(doc);
}
function loadPage(page) {
  var hoReq = new XMLHttpRequest();
  hoReq.addEventListener("load", getHeader);
  hoReq.open("GET", "https://aderhall.github.io/header.html");
  hoReq.send();

  var coReq = new XMLHttpRequest();
  coReq.addEventListener("load", getContent);
  coReq.open("GET", page);
  coReq.send();

  var foReq = new XMLHttpRequest();
  foReq.addEventListener("load", getFooter);
  foReq.open("GET", "https://aderhall.github.io/footer.html");
  foReq.send();
}
