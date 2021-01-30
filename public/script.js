var colors = ["indigo","pink","red","green","purple","blue"];
var i = Math.floor(Math.random() * colors.length); 
document.body.classList.add(`bg-${colors[i]}-600`);
document.querySelector(".nav").classList.add(`bg-${colors[i]}-600`);
document.querySelector("html").classList.add(`bg-${colors[i]}-600`);
console.log(colors[i])
$.get("https://Would-you-rather-api.abaanshanid.repl.co", function (data) {
    console.log(data);
    if(data){
    $("h3").html(data.data);
    }else{    
    $("h3").html(`Would you rather be an extra in an Oscar-winning movie or the lead in a box office bomb?`);
    }
});