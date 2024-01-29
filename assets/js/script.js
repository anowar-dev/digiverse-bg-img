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

  function updateCursorVisibility(e) {
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

    const isOverIconElement = $(".onLoad_body .icon, .onLoad_body .icon .dot")
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
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
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
  $(".seemore").each(function () {
    let current = $(this);

    current.click(() => {
      current.addClass("display_none");
      let closetParent = current.closest(".dobble_inner_text");
      closetParent.find(".values_halfContent").addClass("display_none");
      closetParent.find(".values_fullContent").removeClass("d-none");
      closetParent.find(".less").addClass("display_block");
      closetParent.addClass("width_100");
      closetParent
        .siblings(".dobble_inner_img")
        .addClass("display_none");
    });
  });

  // Go back click
  $(".less").each(function () {
    let current = $(this);

    current.click(() => {
      current.removeClass("display_block");
      let closetParent = current.closest(".dobble_inner_text");
      closetParent.find(".values_fullContent").addClass("d-none");
      closetParent.removeClass("width_100");
      closetParent
        .siblings(".dobble_inner_img")
        .removeClass("display_none");
      closetParent.find(".values_halfContent").removeClass("display_none");
      closetParent.find(".seemore").removeClass("display_none");
    });
  });

  //============ Our values section animation end ==========

  //============ OUR SERVICES section animation start ==========
  // see more click
  $(".bottom_seemore").each(function () {
    const current = $(this);
    let closetParent = current.closest(".service_bottom_content_text");
    let halfText = closetParent.find(".services_halfText");
    let fullText = closetParent.find(".services_fullText");
    let lessBtn = closetParent.find(".bottom_less");
    let imgDiv = closetParent.siblings(".service_bottom_content_img");
    current.click(() => {
      $(".bottom_seemore").each(function (mainIndex) {
        const currentSeemore = $(this);
        currentSeemore.click(function(){
          let closetParentInner = currentSeemore.closest(
            ".service_bottom_content_text"
          );
          let halfTextInner = closetParentInner.find(".services_halfText");
          let fullTextInner = closetParentInner.find(".services_fullText");
          let lessBtnInner = closetParentInner.find(".bottom_less");
          let imgDivInner = closetParentInner.siblings(
            ".service_bottom_content_img"
          );
          if (
            current.hasClass("display_none") &&
            halfText.hasClass("display_none") &&
            !fullText.hasClass("d-none")
          ) {
            current.removeClass("display_none");
            halfText.removeClass("display_none");
            fullText.addClass("d-none")
            currentSeemore.addClass("display_none");
            halfTextInner.addClass("display_none");
            fullTextInner.removeClass("d-none")
          }
          else {
            currentSeemore.addClass("display_none");
            halfTextInner.addClass("display_none");
            fullTextInner.addClass("d_none");
          }
        })
      });
    });
  });

  // Go back click
  // $(".go_back_bottom").each(function (gbackIndex) {
  //   const currentBack = $(this);
  //   currentBack.click(function () {
  //     $(".bottom_animation_single").each(function () {
  //       const curredoubleAnim = $(this);
  //       if (curredoubleAnim.hasClass("translate92")) {
  //         curredoubleAnim.removeClass("translate92");
  //       }
  //     });
  //     $(".bottom_animation_main").css({ transform: "translate(100%)" });
  //     $(".about_service_bottom_inner").css({ position: "relative" });
  //     $(".about_service_bottom_inner").css({ transform: "translate(0)" });
  //   });
  // });

  // Single Animation section
  // $(".bottom_animation_single").each(function (aIndex) {
  //   const currentBtn = $(this);
  //   currentBtn.click(function () {
  //     if (currentBtn.hasClass("translate92")) {
  //       $(".bottom_animation_single").each(function (index) {
  //         const currentElement = $(this);
  //         if (index <= aIndex) {
  //           currentElement.removeClass("translate92");
  //         }
  //       });
  //     } else {
  //       $(".bottom_animation_single").each(function (laterIndex) {
  //         if (aIndex < laterIndex) {
  //           $(this).addClass("translate92");
  //         }
  //       });
  //     }
  //   });
  // });

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

// let fullText = `In our commitment to revolutionize healthcare, we are at the
//                   forefront of innovation, leveraging cutting-edge AItechnology
//                   to create a seamless and efficient patient experience. By
//                   pioneering the integration of artificial intelligence into
//                   healthcare systems, we aim to enhance diagnostic accuracy,
//                   streamline administrative processes, and ultimately improve
//                   overall patient care. Our groundbreaking solutions are
//                   designed to empower healthcare professionals with advanced
//                   tools that not only optimize workflow but also contribute to
//                   better treatment outcomes. Through continuous research and
//                   development, we strive to redefine the standards of healthcare
//                   delivery, ensuring that patients receive the highest quality
//                   of care supported by the latest advancements in AItechnology.`;

// let defaultText = `In our commitment to revolutionize healthcare, we are at the
//                   forefront of innovation, leveraging cutting-edge AItechnology
//                   to create a seamless and efficient patient experience. By
//                   pioneering the integration of artificial intelligence into
//                   healthcare systems,`;
// $(".seemore").on("click", function () {
//   let zero = 0;
//   let text = document.querySelector("#text_id");
//   let textdiv = document.querySelector("#test_id");
//   textdiv.style.position = "absolute";
//   textdiv.style.top = zero;
//   textdiv.style.left = zero;
//   textdiv.style.height = "400px";
//   textdiv.style.width = "100%";
//   textdiv.style.zIndex = "99999999999";
//   textdiv.style.background = "#1A2D5A";
//   text.style.width = "100%";
//   text.innerHTML = fullText;
//   $(".seemore").style.display = "none";
//   $(".seemore").style.opacity = "hideen";
// });

// // resources
// let semorebtn = document.querySelector(".test_left_more");
// let testDiv = document.querySelector(".test_content_left");
// let testDiv2 = document.querySelector(".test_content_right");
// let testLeftText = document.querySelector("#left_text");
// let testLeftpara = document.querySelector(".left_pare");
// let testLeftparaimg = document.querySelector(".test_inner_img");
// let right_para = document.querySelector(".right_para");
// let right_img = document.querySelector(".right_img");
// let winBtn = document.querySelector(".winBtn");
// let winText = document.querySelector("#winText");
// let right_txt = document.querySelector(".right_txt");
// let goBackBtn = document.querySelector("#goBackBtn");
// let left_text = document.querySelector("#left_text");
// let goBackWin = document.querySelector("#goBackWin");
// let patientid = document.querySelector("#patientid");
// let patient_btn = document.querySelector("#patient_btn");



// // Seemore for patient
// semorebtn.addEventListener("click", function () {
//   $("#goBackBtn").show();
//   testDiv.style.width = "90%";
//   testDiv2.style.width = "10%";
//   testLeftText.style = "width: 90%; background: #1A2D5A;";
//   testLeftpara.innerHTML = fullText;
//   testLeftparaimg.style.width = "10%";
//   testLeftparaimg.style.background = "#7158e2";
//   testLeftparaimg.style.height = "100%";
//   right_para.style.display = "none";
//   right_img.style.display = "none";
//   right_txt.style = "width: 100%; background: #000;";
//   winText.style.display = "none";
//   winBtn.style = "display: block; height: 100%; line-height: 100%;";
//   semorebtn.style.display = "none";
// });

// // Go back for patient
// goBackBtn.addEventListener("click", function(){
//   testDiv.style.width = "50%";
//   testDiv2.style.width = "50%";
//   testLeftText.style = "width: 50%; background: rgba(0, 0, 0, .8);";
//   testLeftpara.innerHTML = defaultText;
//   testLeftparaimg.style.width = "50%";
//   testLeftparaimg.style.background = "transparent";
//   testLeftparaimg.style.height = "unset";
//   right_para.style.display = "block";
//   right_img.style.display = "block";
//   right_txt.style = "width: 50%; background: unset;";
//   winText.style.display = "block";
//   winBtn.style = "display: none;";
//   semorebtn.style.display = "block";
//   $("#goBackBtn").hide();
//   testDiv.addEventListener("mouseover", function(){
//     left_text.className.add("bgColorText");
//     console.log("mouse over")
//   });
//   testDiv.addEventListener("mouseout", function(){
//     left_text.classList.remove("bgColorText");
//     console.log("mouse out");
//   });
//   // console.log('test')
// });


// // Click event for win title
// winBtn.addEventListener("click", function(){
//   testDiv.style.width = "10%";
//   testDiv.style.height = "100%";
//   testLeftpara.style.display = "none";
//   testDiv.background = "";
//   testDiv2.style.width = "90%";
//   testDiv2.style.background = "#1A2D5A";
//   winBtn.style.display = "none";
//   winText.style.display = "block";
//   right_para.style.display = "block";
//   right_para.innerHTML = fullText;
//   right_txt.style.background = "#1A2D5A";
//   right_txt.style.width = "90%";
//   right_img.style.width = "10%";
//   right_img.style.height = "100%";
//   right_img.style.display = "block";
//   right_img.style.background = "#7158e2";
//   goBackWin.style.display = "block";
//   testLeftparaimg.style.display = "none";
//   patient_btn.style.display = "block";
//   patientid.style.display = "none";
//   testLeftText.style.width = "100%";
//   testLeftText.style.height = "100%";
//   testLeftText.style.background = "#000";
// });



