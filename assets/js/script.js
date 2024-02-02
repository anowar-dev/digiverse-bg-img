// Onload before view the website

var okbtn = document.querySelector(".onLoad_body .icon");
var onLoadMain = document.querySelector(".onLoad");
var stopprelod = document.querySelector(".onLoad_body");

$(window).on("load", function () {
  // setTimeout(function () {
  //   stopprelod.classList.add("onLoad_disable");
  // }, 2000);
  // setTimeout(function () {
  //   okbtn.classList.add("ok_bdb");
  // }, 2000);
  okbtn.addEventListener("click", function () {
    onLoadMain.classList.add("onLoadNone");
  });
});

// main slider
// let slideshowElements = document.querySelectorAll(".slider_box");
// let count = 1;
// setInterval(() => {
//   count++;
//   let curentElement = document.querySelector(".current");
//   curentElement.classList.remove("current");
//   if (count > slideshowElements.length) {
//     slideshowElements[0].classList.add("current");
//     count = 1;
//   } else {
//     curentElement.nextElementSibling.classList.add("current");
//   }
// }, 4000);

// ===========Custom Cursor start here =============
$(document).ready(function () {
     const cursor = $(".cursor");
     let rightClickFlag = false; // Flag to track right mouse button click

     function updateScrollbar() {
       const documentHeight = $(document).height();
       const viewportHeight = $(window).height();
       const documentWidth = $(document).width();
       const viewportWidth = $(window).width();

       // Check if the document height is greater than the viewport height
       if (documentHeight > viewportHeight) {
         $("body").css("overflow-y", "auto");
       } else {
         $("body").css("overflow-y", "hidden");
       }

       // Check if the document width is greater than the viewport width
       if (documentWidth > viewportWidth) {
         $("body").css("overflow-x", "auto");
       } else {
         $("body").css("overflow-x", "hidden");
       }
     }

     function isTouchDevice() {
       return navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
     }

     function updateCursorVisibility(e) {
       if (rightClickFlag) {
         cursor.css("display", "none");
         // Reset the flag after a delay (e.g., 1000 milliseconds)
         setTimeout(function () {
           rightClickFlag = false;
         }, 1000);
         return;
       }

       if (isTouchDevice()) {
         // Show the custom cursor only on touch devices
         cursor.css("display", "block");
       }

       const isOverInteractiveElement = $("a, button, input, textarea, select")
         .toArray()
         .some(function (element) {
           const rect = element.getBoundingClientRect();
           return (
             e.clientX >= rect.left &&
             e.clientX <= rect.right &&
             e.clientY >= rect.top &&
             e.clientY <= rect.bottom
           );
         });

       const isOverIconElement = $(
         ".onLoad_body .icon, .onLoad_body .icon .dot"
       )
         .toArray()
         .some(function (element) {
           const rect = element.getBoundingClientRect();
           return (
             e.clientX >= rect.left &&
             e.clientX <= rect.right &&
             e.clientY >= rect.top &&
             e.clientY <= rect.bottom
           );
         });

       if (isOverInteractiveElement || isOverIconElement) {
         cursor.css("display", "none");
       } else {
         cursor.css("display", "block");
       }
     }

     // Initial update when the page loads
     updateScrollbar();

     $(document).mousemove(function (e) {
       const scrollX =
         window.pageXOffset || document.documentElement.scrollLeft;
       const scrollY = window.pageYOffset || document.documentElement.scrollTop;

       cursor.css({
         left: e.clientX + scrollX + "px",
         top: e.clientY + scrollY + "px",
       });

       updateCursorVisibility(e);
     });

     $(document).scroll(function () {
       updateCursorVisibility(); // Update cursor visibility on scroll
       updateScrollbar(); // Update scrollbar on scroll
     });

     $(document).mousedown(function (e) {
       if (e.which === 3) {
         // Right mouse button clicked
         rightClickFlag = true;
         cursor.css("display", "none");
         // Reset the flag after a delay (e.g., 1000 milliseconds)
         setTimeout(function () {
           rightClickFlag = false;
         }, 1000);
       }
     });

     $(document).mouseout(function () {
       cursor.css("display", "none");
     });

     // Update scrollbar and cursor visibility on window resize
     $(window).resize(function () {
       updateCursorVisibility();
       updateScrollbar();
     });

  //=============== Custom Cursor end here ==========
  

  //============ Our values section animation start ==========

  // see more click

  $(".seemore").each(function (seeMoreIndex) {
    const currentSeeMore = $(this);
    currentSeeMore.click(function () {
      $(".seemore").each(function (newSeeMoreIndex) {
        const newSeeMoreBtn = $(this);
        if (seeMoreIndex != newSeeMoreIndex) {
          
          const newClosetParentInner =
            newSeeMoreBtn.closest(".dobble_inner_text");

          const newHalfTextInner = newClosetParentInner.find(
            ".values_halfContent"
          );

          const newFullTextInner = newClosetParentInner.find(
            ".values_fullContent"
          );
          const newLessBtnInner = newClosetParentInner.find(".less");

          const newImgDivInner =
            newClosetParentInner.siblings(".dobble_inner_img");

          newHalfTextInner.removeClass("display_none");
          newSeeMoreBtn.removeClass("display_none");
          newFullTextInner.addClass("d-none");
          newLessBtnInner.addClass("d-none");
          newImgDivInner.removeClass("display_none");
          newClosetParentInner.removeClass("width_100");
        } else {
          const closetParentInner = newSeeMoreBtn.closest(".dobble_inner_text");
          const halfText = closetParentInner.find(".values_halfContent");
          const fullText = closetParentInner.find(".values_fullContent");
          const lessBtnInner = closetParentInner.find(".less");
          const imgDivInner = closetParentInner.siblings(".dobble_inner_img");

          fullText.removeClass("d-none");
          lessBtnInner.removeClass("d-none");
          halfText.addClass("display_none");
          newSeeMoreBtn.addClass("display_none");
          imgDivInner.addClass("display_none");
          closetParentInner.addClass("width_100");
        }
      });
    });
  });

  // Less button click
  $(".less").each(function (lessIndex) {
    const currentLessBtn = $(this);
    currentLessBtn.click(function () {
      $(".less").each(function (newLessIndex) {
        const newLessBtn = $(this);
        if (newLessIndex != lessIndex) {
          const closetParentInner = newLessBtn.closest(".dobble_inner_text");
          const halfText = closetParentInner.find(".values_halfContent");
          const fullText = closetParentInner.find(".values_fullContent");
          const lessBtnInner = closetParentInner.find(".bottom_less");
          const imgDivInner = closetParentInner.siblings(".dobble_inner_img");

          // fullText.removeClass("d-none");
          // lessBtnInner.removeClass("d-none");
          // halfText.addClass("display_none");
          // newLessBtn.addClass("display_none");
          // imgDivInner.addClass("display_none");
          // closetParentInner.addClass("bottom_width");
          closetParentInner.removeClass("bbg_blue");
        } else {
          const newClosetParentInner = newLessBtn.closest(".dobble_inner_text");
          const newHalfTextInner = newClosetParentInner.find(
            ".values_halfContent"
          );

          const newFullTextInner = newClosetParentInner.find(
            ".values_fullContent"
          );
          const newLessBtnInner = newClosetParentInner.find(".less");

          const newImgDivInner =
            newClosetParentInner.siblings(".dobble_inner_img");
          const semore = newClosetParentInner.find(".seemore");

          newHalfTextInner.removeClass("display_none");
          newLessBtn.removeClass("display_none");
          newFullTextInner.addClass("d-none");
          newLessBtnInner.addClass("d-none");
          newImgDivInner.removeClass("display_none");
          newClosetParentInner.removeClass("width_100");
          newClosetParentInner.removeClass("bbg_blue");
          semore.removeClass("display_none");
        }
      });
    });
  });

  //============ Our values section animation end ==========

  //============ OUR SERVICES section animation start ==========
  // see more click

  $(".bottom_seemore").each(function (seeMoreIndex) {
    const currentSeeMore = $(this);
    currentSeeMore.click(function () {
      $(".bottom_seemore").each(function (newSeeMoreIndex) {
        const newSeeMoreBtn = $(this);
        if (seeMoreIndex != newSeeMoreIndex) {
          const newClosetParentInner = newSeeMoreBtn.closest(
            ".service_bottom_content_text"
          );
          const newHalfTextInner =
            newClosetParentInner.find(".services_halfText");

          const newFullTextInner =
            newClosetParentInner.find(".services_fullText");
          const newLessBtnInner = newClosetParentInner.find(".bottom_less");

          const newImgDivInner = newClosetParentInner.siblings(
            ".service_bottom_content_img"
          );

          newHalfTextInner.removeClass("display_none");
          newSeeMoreBtn.removeClass("display_none");
          newFullTextInner.addClass("d-none");
          newLessBtnInner.addClass("d-none");
          newImgDivInner.removeClass("display_none");
          newClosetParentInner.removeClass("bottom_width");
        } else {
          const closetParentInner = newSeeMoreBtn.closest(
            ".service_bottom_content_text"
          );
          const halfText = closetParentInner.find(".services_halfText");
          const fullText = closetParentInner.find(".services_fullText");
          const lessBtnInner = closetParentInner.find(".bottom_less");
          const imgDivInner = closetParentInner.siblings(
            ".service_bottom_content_img"
          );

          fullText.removeClass("d-none");
          lessBtnInner.removeClass("d-none");
          halfText.addClass("display_none");
          newSeeMoreBtn.addClass("display_none");
          imgDivInner.addClass("display_none");
          closetParentInner.addClass("bottom_width");
        }
      });
    });
  });

  // Less button click
  $(".bottom_less").each(function (lessIndex) {
    const currentLessBtn = $(this);
    currentLessBtn.click(function () {
      $(".bottom_less").each(function (newLessIndex) {
        const newLessBtn = $(this);
        if (newLessIndex != lessIndex) {
          const closetParentInner = newLessBtn.closest(
            ".service_bottom_content_text"
          );
          const halfText = closetParentInner.find(".services_halfText");
          const fullText = closetParentInner.find(".services_fullText");
          const lessBtnInner = closetParentInner.find(".bottom_less");
          const imgDivInner = closetParentInner.siblings(
            ".service_bottom_content_img"
          );

          // fullText.removeClass("d-none");
          // lessBtnInner.removeClass("d-none");
          // halfText.addClass("display_none");
          // newLessBtn.addClass("display_none");
          // imgDivInner.addClass("display_none");
          // closetParentInner.addClass("bottom_width");
          closetParentInner.removeClass("bbg_blue");
        } else {
          const newClosetParentInner = newLessBtn.closest(
            ".service_bottom_content_text"
          );
          const newHalfTextInner =
            newClosetParentInner.find(".services_halfText");

          const newFullTextInner =
            newClosetParentInner.find(".services_fullText");
          const newLessBtnInner = newClosetParentInner.find(".bottom_less");

          const newImgDivInner = newClosetParentInner.siblings(
            ".service_bottom_content_img"
          );
          const semore = newClosetParentInner.find(".bottom_seemore");

          newHalfTextInner.removeClass("display_none");
          newLessBtn.removeClass("display_none");
          newFullTextInner.addClass("d-none");
          newLessBtnInner.addClass("d-none");
          newImgDivInner.removeClass("display_none");
          newClosetParentInner.removeClass("bottom_width");
          newClosetParentInner.removeClass("bbg_blue");
          semore.removeClass("display_none");
        }
      });
    });
  });

  //============ OUR SERVICES section animation end ==========
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

// // Chatboot
// $(document).ready(function () {
//   $(".chat_bot_button").on("click", function () {
//     $(".chat_bot_body").toggle("display_block");
//   });
// });




