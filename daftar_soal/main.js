let urlParam = new URLSearchParams(window.location.search);
let target = urlParam.get("target");
let id = urlParam.get("id");

console.log(target, id);