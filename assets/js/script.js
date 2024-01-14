// Onload before view the website

var okbtn = document.querySelector(".onLoad_body .icon");
var onLoadMain = document.querySelector(".onLoad");
var stopprelod = document.querySelector(".onLoad_body");
console.log(stopprelod)
$(window).on('load', function(){
  setTimeout(function(){
    stopprelod.classList.add("onLoad_disable");
  }, 2000)
    setTimeout(function(){
        okbtn.classList.add("ok_bdb");
    }, 2000)
    okbtn.addEventListener('click', function(){
        onLoadMain.classList.add('onLoadNone')
    })
})


// main slider
let slideshowElements = document.querySelectorAll(".slider_box");
let count = 1;
setInterval(() => {
  count++;
  let curentElement = document.querySelector(".current");
  curentElement.classList.remove("current");
  if (count > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    count = 1;
  } else {
    curentElement.nextElementSibling.classList.add("current");
  }
}, 4000);



// Cursor

$(document).ready(function () {
  const cursor = $(".cursor");

  $(document).mousemove(function (e) {
    cursor.css({
      left: e.pageX + "px",
      top: e.pageY + "px"
    });

    

    cursor.css("display", "block");

    const isOverInteractiveElement = $("a, button, input, textarea, select")
      .toArray()
      .some(function (element) {
        const rect = element.getBoundingClientRect();
        return (
          e.pageX >= rect.left &&
          e.pageX <= rect.right &&
          e.pageY >= rect.top &&
          e.pageY <= rect.bottom
        );
      });

    const isOverIconElement = $(".onLoad_body .icon, .onLoad_body .icon .dot")
      .toArray()
      .some(function (element) {
        const rect = element.getBoundingClientRect();
        return (
          e.pageX >= rect.left &&
          e.pageX <= rect.right &&
          e.pageY >= rect.top &&
          e.pageY <= rect.bottom
        );
      });

    if (isOverInteractiveElement || isOverIconElement) {
      cursor.css("display", "none");
    } else if (isOverScrollbar) {
      cursor.css("display", "block");
    } else {
      cursor.css("display", "block");
    }
  });

  $(document).mouseover(function () {
    cursor.css("display", "block");
  });

  $(document).mouseout(function () {
    cursor.css("display", "none");
  });
});

 


// Pass word vissible
function viewPass() {
  let passwords = document.getElementById("pass");
  if (passwords.type === "password") {
    passwords.type = "text";
  } else {
    passwords.type = "password";
  }
}