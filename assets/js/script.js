// Onload before view the website

var okbtn = document.querySelector(".onLoad_body .icon");
var onLoadMain = document.querySelector(".onLoad");
var stopprelod = document.querySelector(".onLoad_body");
console.log(stopprelod);
$(window).on("load", function () {
  setTimeout(function () {
    stopprelod.classList.add("onLoad_disable");
  }, 2000);
  setTimeout(function () {
    okbtn.classList.add("ok_bdb");
  }, 2000);
  okbtn.addEventListener("click", function () {
    onLoadMain.classList.add("onLoadNone");
  });
});

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
      top: e.pageY + "px",
    });

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
    } else {
      cursor.css("display", "block");
    }
  });

  $(document).mouseout(function () {
    cursor.css("display", "none");
  });
});

// const cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (e) => {
//   const adjustedX = e.pageX - cursor.clientWidth / 2;
//   const adjustedY = e.pageY - cursor.clientHeight / 2;

//   const maxX = window.innerWidth - cursor.clientWidth;
//   const maxY = window.innerHeight - cursor.clientHeight;

//   const clampedX = Math.min(maxX, Math.max(0, adjustedX));
//   const clampedY = Math.min(maxY, Math.max(0, adjustedY));

//   cursor.style.top = `${clampedY}px`;
//   cursor.style.left = `${clampedX}px`;

//   if (
//     e.pageX >= 0 &&
//     e.pageX <= window.innerWidth &&
//     e.pageY >= 0 &&
//     e.pageY <= window.innerHeight
//   ) {
//     cursor.style.display = "block";

//     // Check if cursor is close to the right edge
//     const scrollbarWidth =
//       window.innerWidth - document.documentElement.clientWidth;
//     if (e.pageX > window.innerWidth - scrollbarWidth - 10) {
//       cursor.style.display = "none";
//     } else {
//       cursor.style.display = "block"; // Ensure the cursor is displayed when not close to the right edge
//     }
//   } else {
//     cursor.style.display = "none";
//   }
// });

// document.addEventListener("mouseout", () => {
//   cursor.style.display = "none";
// });

// Pass word vissible
function viewPass() {
  let passwords = document.getElementById("pass");
  if (passwords.type === "password") {
    passwords.type = "text";
  } else {
    passwords.type = "password";
  }
}
