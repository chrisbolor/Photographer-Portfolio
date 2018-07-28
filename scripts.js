// SCRIPTS BY CHRIS BOLOR //



// ALL DOC-READY FUNCTIONS //
$(document).ready(function(){


  // the below line makes everything visible again, so that the user does not see the messiness of the page before the script has been able to correct the widths and heights, etc.

  // establishing universal variables //
  var rem = ($("html").css("font-size").replace("px",""));
  var remFactor = (estVars()[1]/rem);

  var topNavBar = "#topNavBar";
  var topNavItem = ".topNavItem";

  var mainSection = ".mainSection";
  var mainSections = document.getElementsByClassName("mainSection");
  var bodyParts = jQuery.makeArray(mainSections);

  var thumbnailWrappersA = bodyParts[1].getElementsByTagName("figure");
  var thumbnailImgsA = bodyParts[1].getElementsByTagName("img");
  var thumbnailWrappersB = bodyParts[2].getElementsByTagName("figure");
  var thumbnailImgsB = bodyParts[2].getElementsByTagName("img");

  var footer = "#footer";
  var footerTitle = ".footerTitle";
  var footerCol = ".footerCol";
  var footerListItem = ".footerListItem";

  var lightBox = "#lightBox";
  var lightBoxInner = "#lightBoxInner"
  var lightBoxExit = "#lightBoxExit";

    // these may be called in the future by array position
  function estVars(){
    var viewPortWidth = window.innerWidth;
    var viewPortHeight = window.innerHeight;
    // below gets the document's computed values
    var docWidth = $(document).width();
    var docHeight = $(document).height();
    // Below return statements all each variable to be accessible via estVars()[*] callback, where * = position in array below;
      // If you do not need to recapture the value, then establish the variables outside of the estVars function (right before it)
    var sendBack = new Array();
     sendBack[0] = viewPortWidth;
     sendBack[1] = viewPortHeight;
     sendBack[2] = docWidth;
     sendBack[3] = docHeight;

    return sendBack;
  }; // closes estVars()
  //estVars();



  // onload animation; hides and reveals the top nav/header
  $(topNavBar).slideUp(0001);
  setTimeout(function(){
    $("*").css("opacity", 1);
  }, 0250);
  setTimeout(function(){
    $(topNavBar).slideDown(1000);
  }, 1000);

  // onload / pre-scroll animations; hiding the footer content
  $(footer).css("visibility", 'hidden');

  setTimeout(function(){
    $(footerCol).slideUp();
  }, 0500);
  setTimeout(function(){
    $(footer).css("visibility", 'visible');
  }, 1000);


  // assigns ids to each figure //
  for(i=0; i<thumbnailWrappersA.length; i++){
    thumbnailWrappersA[i].id = "twa" + i;
    var temp = thumbnailWrappersA[i].id;
    thumbnailImgsA[i].alt + "-thumbnail.jpg')";
    thumbnailWrappersA[i].alt = thumbnailImgsA[i].alt;
  }
  for(i=0; i<thumbnailWrappersB.length; i++){
    thumbnailWrappersB[i].id = "twb" + i;
    var temp = thumbnailWrappersB[i].id;
    thumbnailImgsB[i].alt + "-thumbnail.jpg')";
    thumbnailWrappersB[i].alt = thumbnailImgsB[i].alt;
  }


//// REMEMBER TO ADD THE BELOW STATEMENTS INTO A FUNCTION THAT IS CALLED RIGHT AWAY AND ON RESIZE!!

  // establish initial widths & heights
  // log for debugging
  console.log("Viewport width: " + estVars()[0]);
  console.log("Viewport height: " + estVars()[1]);
  console.log("Document width: " + estVars()[2]);
  console.log("Document height: " + estVars()[3]);

  console.log(window.devicePixelRatio);
  // below adjusts the size of the .mainSection class to the size of the viewport/ATM
  //for(i=0; i < $(mainSection).length; i++){
    $(mainSection).css("width", "100%");
    $(mainSection).css("height", estVars()[1] +'px');


    $("#footer").css("min-height", estVars()[1] +'px');
    $("#contact").css("margin-bottom", estVars()[1] +'px');

    if(estVars()[0] < 991){
      $("#contact").css("margin-bottom", "2rem");
      $("#splashLeftCol").addClass("col-sm-8").removeClass("col-sm-4");
      $("#splashRightCol").addClass("col-sm-4").removeClass("col-sm-4");
      $(".mainContent").css("overflow", "auto");
      $("#lightBox").css("overflow", "hidden");
    }


    if(estVars()[0] > 576){

      // everything in this if statement is to reset the css to pre-orientation & pre-load state



      $("#contact .mainContent").css({
        "width": estVars()[0] + 'px',
        "margin-left": "auto",
        "margin-right": "auto",
        //"overflow-x": "hidden",
      })





      $(".scrollerFader").css({
        "width": $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4").width() + 'px',
        "display": "none",
      })
    }

    if(estVars()[0] < 576){


      // class css //
      $(".mainContent").css({
        "width": estVars()[0] + 'px',
        "overflow-x": "hidden",
      })
      $(".mainContent .col-sm-4, .mainContent .col-sm-8").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "padding": "2rem 2rem 1rem 0rem",
      })



      // #splash css //
      $("#splash").css({
        "padding": "0",
        "overflow-x": "hidden",
      })
      $("#splash content.mainContent").css({
        "padding": "4rem 0rem 1rem 1rem",
        "width": "103%",
        "margin-left": "auto",
        "margin-right": "auto",
      })
      $("#splash section#splashLeftCol").css({
        "left": "0",
        "margin": "0",
      })
      $("#splash section#splashLeftCol p, #splash section#splashLeftCol blockquote").css({
      }),



      // #speciality1 css //
      $("#speciality1").css({
        "overflow-y": "visible",
      })
      $("#speciality1 content.mainContent, #speciality2 content.mainContent").css({

        "padding": "0",
        "margin-left": "auto",
        "margin-right": "auto",
        "overflow-y": "scroll",
        "width": "100%",
      })

      $("#speciality1 content.mainContent article.col-sm-8, #speciality2 content.mainContent article.col-sm-8").css({
        "padding": "4rem 1rem 1rem 1rem",
        "margin": "0",
        "left": "0",
        "top": "0",
        "width": "100%",
      })
      $("#speciality1 div.thumbScrollWrapper, #speciality2 div.thumbScrollWrapper").css({
        //"background-color": "blue",
        "box-shadow": "0rem 1rem 1rem rgba(0,0,0,.5)",
        //"display": "none",
        "overflow-y": "auto",
        "overflow-x": "hidden",
        "width": "125%",
        "height": (estVars()[0]/3)*3 + 'px',
        "padding": "0",
        "left": "0rem",
        //"top": ((remFactor)*(remFactor-20)) + 'px',
        // MAYBE USE APPEND TO MOVE THESE SECTIONS TO THE BOTTOM OF THE COL-SM-8 WITH A SLIGHT MARGIN-TOP TO SPACE THEM FROM THE TEXT??
        "position": "absolute",
      })
      $("#speciality1 div.thumbScrollWrapper").appendTo($("#speciality1 article.col-sm-8"));
      $("#speciality2 div.thumbScrollWrapper").appendTo($("#speciality2 article.col-sm-8"));

      $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4, #speciality2 article#speciality2Scroller.thumbScroller.col-sm-4").css({
        //"background-color": "rgba(150,50,250,.5)",
        "top": "0",
        "left": "0",
        "margin": "0",
        "padding": "0",
        "float": "left",
        "overflow-y": "auto",
        "overflow-x": "hidden",
        "position": "absolute",
      });

      $("#speciality1 #speciality1Scroller.thumbScroller img, #speciality2 #speciality2Scroller.thumbScroller img").css({
        "margin": "0",
        "padding": "0",
        "top": "0",
        "right": "0",
        "bottom": "0",
        "float": "left",
        "display": "inline-block",
        "box-shadow": "0rem 1rem .5rem rgba(0,0,0,.5)",
      });

      $(".scrollerFader").css({
        "width": $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4").width() + 'px',
        "display": "block",
      })

      // the follow copies the img url into the containing figure to have the background-image. This helps to display all the images in a grid like pattern without distorting the image

      // this updates the #speciality1 scroller
      for(i=0; i<thumbnailWrappersA.length; i++){

        thumbnailImgsA[i].style.display = 'none';
        thumbnailWrappersA[i].id = "twa" + i;
        var temp = thumbnailWrappersA[i].id;
        thumbnailWrappersA[i].alt = thumbnailImgsA[i].alt;

        thumbnailWrappersA[i].style.backgroundImage = "url('img/events/" + thumbnailImgsA[i].alt + "-thumbnail.jpg')";

        $("#" + temp + "").css({
          "width": (estVars()[0]/3) + 'px',
          "height": (estVars()[0]/3) + 'px',
          "filter": "grayscale(65%)",
        })

      } // closes for function



      $("#contact .mainContent").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "position": "relative",
      });





      for(i=0; i<thumbnailWrappersB.length; i++){

        thumbnailImgsB[i].style.display = 'none';
        thumbnailWrappersB[i].id = "twb" + i;
        var temp = thumbnailWrappersB[i].id;
        thumbnailWrappersB[i].alt = thumbnailImgsB[i].alt;

        thumbnailWrappersB[i].style.backgroundImage = "url('img/products/" + thumbnailImgsB[i].alt + "-thumbnail.jpg')";

        $("#" + temp + "").css({
          "width": (estVars()[0]/3) + 'px',
          "height": (estVars()[0]/3) + 'px',
          "filter": "grayscale(65%)",
        })

      } // closes for function





      $("figure").on("click", function(event){
        //alert("clicked!");
        var temp = this.id;

        $("#" + temp).css({
          "filter": "grayscale(0%)",
        }).css({
          "filter": "grayscale(65%)",
        })
      }) // closes click function





    } // closes if(estVars()[0] < 576) //




//// REMEMBER TO ADD THE ABOVE STATEMENTS INTO A FUNCTION THAT IS CALLED RIGHT AWAY AND ON RESIZE!!




  // on-resize widths/heights recapture
  $(window).resize(function(){


    setTimeout(function(){

      // recapture initial widths & heights
      // log for debugging
      console.log("Viewport width resized: " + estVars()[0]);
      console.log("Viewport height resized: " + estVars()[1]);
      console.log("Document width: " + estVars()[2]);
      console.log("Document height: " + estVars()[3]);

      // below adjusts the main sections to the same height as the viewport/ATM
      $(mainSection).css("width", "100%");
      $(mainSection).css("min-height", estVars()[1] +'px');
      $("#footer").css("min-height", estVars()[1] +'px');
      $("#contact").css("margin-bottom", estVars()[1] +'px');




      if(estVars()[0] < 991){
        $("#contact").css("margin-bottom", "2rem");
        $("#splashLeftCol").addClass("col-sm-8").removeClass("col-sm-4");
        $("#splashRightCol").addClass("col-sm-4").removeClass("col-sm-4");
        $(".mainContent").css("overflow", "auto");
      }
      if(estVars()[0] > 576){
          // resetting the page back to the landscape/pre-orientation css settings (the default settings);

          //$("#splash").css("background-size", 'auto');
          $("#contact .mainContent").css({
            "width": estVars()[0] + 'px',
            //"overflow-x": "hidden",
          })
          $("article#speciality1Scroller").appendTo($("#speciality1 div.thumbScrollWrapper"));
          $("article#speciality2Scroller").appendTo($("#speciality2 div.thumbScrollWrapper"));



// RESET THE FOLLOWING CSS!!!



          $(".mainContent .col-sm-4, .mainContent .col-sm-8").css({
            "padding": "2rem",
          });




          // #speciality1 & 2 css //

          $("#speciality1 div.thumbScrollWrapper").appendTo($("#speciality1 content.mainContent"));

          $("#speciality1 div.thumbScrollWrapper").removeAttr('style');

          $("#speciality1 div.thumbScrollWrapper").attr('style');

          $("#speciality2 div.thumbScrollWrapper").prependTo($("#speciality2 content.mainContent"));

          $("#speciality2 div.thumbScrollWrapper").removeAttr('style');

          $("#speciality2 div.thumbScrollWrapper").attr('style');

          $("#speciality1 content.mainContent article.col-sm-8").css({
            "padding": "4rem 1rem 1rem 1rem",
            "margin": "0",
            "left": "0",
            "top": "0",
            "width": "",
            "float": "left",

            "position": "absolute",
            "clear": 'none',
          })
          $("#speciality2 content.mainContent article.col-sm-8").css({
            "padding": "4rem 1rem 1rem 1rem",
            "margin": "0",

            "width": "",
            "float": "right",

            "position": "absolute",
            "left": "33.33%",
            "top": "0",
            "clear": 'none',
          });
  /*
          $("#speciality1 div.thumbScrollWrapper, #speciality2 div.thumbScrollWrapper").css({
            //"background-color": "blue",
            "box-shadow": "0rem 1rem 1rem rgba(0,0,0,.5)",
            //"display": "none",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "width": "125%",
            "height": (estVars()[0]/3)*3 + 'px',
            "padding": "0",
            "left": "0rem",
            "top": ((remFactor)*(remFactor-20)) + 'px',
            "position": "absolute",
          })
*/



          $("#speciality1 div.thumbScrollWrapper").css({
            "visibility": "visible",
            "opacity": "1",
            "z-index": "500",
            "top": "0",
            "right": "2rem",
            "position": "absolute",
            "height": "100%",
            "overflow": "hidden",

            "padding": "0",
            "margin": "0",
            "float": "right",
          })
          $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4").css({
            "position": "relative",
            "display": "block",
            "top": "0",
            "right": "0",
            "height": "100%",
            "margin": "0",
            "padding": "0 0 0 7%",
            "float": "right",
            "overflow-y": "scroll",
            "z-index": "500",
            //"width": '100',
          });






          $("#speciality2 div.thumbScrollWrapper").css({
            "visibility": "visible",
            "opacity": "1",
            "z-index": "500",
            "top": "0",
            "left": "2rem",
            "position": "absolute",
            "height": "100%",
            "overflow": "hidden",

            "padding": "0",
            "margin": "0",
            "float": "left",
          })

          $("#speciality2 article#speciality2Scroller.thumbScroller.col-sm-4").css({
            "position": "relative",
            "display": "block",
            "top": "0",
            "left": "0",
            "height": "100%",
            "margin": "0",
            "padding": "0 7% 0 0%",
            "float": "left",
            "overflow-y": "scroll",
            "z-index": "500",
          });



          $("#speciality1 #speciality1Scroller.thumbScroller img, #speciality2 #speciality2Scroller.thumbScroller img").css({
            "margin": "0",
            "padding": "0",
            "top": "0",
            "display": "inline-block",
            "opacity": "1",
            "width": "100%",
            "position": "relative",
            "filter": "grayscale(50%)",
          });

          $("#speciality1 #speciality1Scroller.thumbScroller img").css({
            "float": "right",
            "left": "0",
            "box-shadow": "-.5rem .5rem .5rem rgba(0,0,0,.5)",
            "animation-name": "thumbnailHoverOff",
            "animation-duration": ".5s",
          });

          $("#speciality2 #speciality2Scroller.thumbScroller img").css({
            "float": "left",
            "left": "0",

            "box-shadow": ".5rem .5rem .5rem rgba(0,0,0,.5)",
            "animation-name": "thumbnailLeftHoverOff",
            "animation-duration": ".5s",
          });



// REVERSE THIS (except for the id's); make the figures z-index behind the img z-index, make the img visible //


          // this updates the #speciality1 scroller
          for(i=0; i<thumbnailWrappersA.length; i++){
            var temp = thumbnailWrappersA[i].id;
            thumbnailWrappersA[i].style.backgroundImage = "";

            $("#" + temp + "").css({
              "width": "100%",
              "height": '',
            })

          } // closes for function


          // this updates the #speciality2 scroller
          for(i=0; i<thumbnailWrappersB.length; i++){
            var temp = thumbnailWrappersB[i].id;
            thumbnailWrappersB[i].style.backgroundImage = "";

            $("#" + temp + "").css({
              "width": '100%',
              "height": '',
            })

          } // closes for function












// END RESET CSS



          $(".scrollerFader").css({
            "display": "none",
          })








          // BELOW MAY RESET THE CSS
          /*
          $.get("http://chrisbolor.info/work/websites/photographer-portfolio/styles.css", function() {
            // reload stylesheet
            $("head").append($("<link/>", { rel: "stylesheet", href: "http://chrisbolor.info/work/websites/photographer-portfolio/styles.css", type: "text/css" }));
                // add the new html
                //$(".preview-section").html(html);
          });
          */











      } // closes estVars()[0] > 576 RESETS

      if(estVars()[0] < 576){
        //alert(estVars()[0]);

        // class css //
        $(".mainContent").css({
          "width": estVars()[0] + 'px',
          "overflow-x": "hidden",
        })
        $(".mainContent .col-sm-4, .mainContent .col-sm-8").css({
          "margin-left": "auto",
          "margin-right": "auto",
          "padding": "2rem 2rem 1rem 0rem",
        })



        // #splash css //
        $("#splash").css({
          "padding": "0",
          "overflow-x": "hidden",
        })
        $("#splash content.mainContent").css({
          "padding": "4rem 0rem 1rem 1rem",
          "width": "103%",
          "margin-left": "auto",
          "margin-right": "auto",
        })
        $("#splash section#splashLeftCol").css({
          "left": "0",
          "margin": "0",
        })
        $("#splash section#splashLeftCol p, #splash section#splashLeftCol blockquote").css({
        }),



        // #speciality1 css //
        $("#speciality1, #speciality2").css({
          "overflow-y": "visible",
        })
        $("#speciality1 content.mainContent, #speciality2 content.mainContent").css({

          "padding": "0",
          "margin-left": "auto",
          "margin-right": "auto",
          "overflow-y": "scroll",
          "width": "100%",
          "height": estVars()[1] + estVars()[0] + 'px',
        })

        $("#speciality1 content.mainContent article.col-sm-8, #speciality2 content.mainContent article.col-sm-8").css({
          "padding": "4rem 1rem 1rem 1rem",
          "margin": "0",
          "left": "0",
          "top": "0",
          "width": "100%",
        })

        $("#speciality1 div.thumbScrollWrapper, #speciality2 div.thumbScrollWrapper").css({
          //"background-color": "blue",
          "box-shadow": "0rem 1rem 1rem rgba(0,0,0,.5)",
          //"display": "none",
          "overflow-y": "auto",
          "overflow-x": "hidden",
          "width": "125%",
          "height": (estVars()[0]/3)*3 + 'px',
          "padding": "0",
          "left": "0rem",
          //"top": ((remFactor)*(remFactor-20)) + 'px',
          "top": (estVars()[1]) + (remFactor*3) + 'px',
          "position": "absolute",
        })

        $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4, #speciality2 article#speciality2Scroller.thumbScroller.col-sm-4").css({
          //"background-color": "rgba(150,50,250,.5)",
          "top": "0",
          "left": "0",
          "margin": "0",
          "padding": "0",
          "float": "left",
          "overflow-y": "auto",
          "overflow-x": "hidden",
          "position": "absolute",
        });

        $("#speciality1 #speciality1Scroller.thumbScroller img, #speciality2 #speciality2Scroller.thumbScroller img").css({
          "margin": "0",
          "padding": "0",
          "top": "0",
          "right": "0",
          "bottom": "0",
          "float": "left",
          "display": "inline-block",
          "box-shadow": "0rem 1rem .5rem rgba(0,0,0,.5)",
        });

        $(".scrollerFader").css({
          "width": $("#speciality1 article#speciality1Scroller.thumbScroller.col-sm-4").width() + 'px',
          "display": "block",
        })

        // the follow copies the img url into the containing figure to have the background-image. This helps to display all the images in a grid like pattern without distorting the image

        // this updates the #speciality1 scroller
        for(i=0; i<thumbnailWrappersA.length; i++){

          thumbnailImgsA[i].style.display = 'none';
          thumbnailWrappersA[i].id = "twa" + i;
          var temp = thumbnailWrappersA[i].id;
          thumbnailWrappersA[i].alt = thumbnailImgsA[i].alt;

          thumbnailWrappersA[i].style.backgroundImage = "url('img/events/" + thumbnailImgsA[i].alt + "-thumbnail.jpg')";

          $("#" + temp + "").css({
            "width": (estVars()[0]/3) + 'px',
            "height": (estVars()[0]/3) + 'px',
            "filter": "grayscale(65%)",
          })

        } // closes for function
        // this updates the #speciality2 scroller
        for(i=0; i<thumbnailWrappersB.length; i++){

          thumbnailImgsB[i].style.display = 'none';
          thumbnailWrappersB[i].id = "twb" + i;
          var temp = thumbnailWrappersB[i].id;
          thumbnailWrappersB[i].alt = thumbnailImgsB[i].alt;

          thumbnailWrappersB[i].style.backgroundImage = "url('img/products/" + thumbnailImgsB[i].alt + "-thumbnail.jpg')";

          $("#" + temp + "").css({
            "width": (estVars()[0]/3) + 'px',
            "height": (estVars()[0]/3) + 'px',
            "filter": "grayscale(65%)",
          })

        } // closes for function















      } // closes if(estVars()[0] < 576) //





  }, 0150); // closes timeout
}); // closes resize functions
















  // pre-scroll variables & function
  var scrollTarget = document.getElementById('splash');
  var currentYPos = window.getComputedStyle(scrollTarget, null).getPropertyValue("background-position-y");
  console.log("#splash starting/Pre-Animation bg-position-y: " + currentYPos);
  console.log("ONLOAD/Pre-Animation Y-POS: " + parseFloat(currentYPos.replace("px", '')));

  function scrollVars() {
    var currentYPos = window.getComputedStyle(scrollTarget, null).getPropertyValue("background-position-y");

    var capScrollVars = new Array();
        capScrollVars[0] = currentYPos;

    return capScrollVars;
  }







  $(window).scroll(function(){
      setTimeout(function(){
        scrollVars();
      }, 0025);

      // following variables capture the current scroll position and maximum scroll in px (post-load/computed)
      var scroll = $(window).scrollTop();
      var scrollMax = $(document).height() - $(window).height();
      var scrollPercent = ((scroll/scrollMax)*100).toFixed(2);

      // below establishes the target and computed height for the offset scrolling

        var scrollTarget = document.getElementById('splash');
        var currentYPos = window.getComputedStyle(scrollTarget, null).getPropertyValue("background-position-y");

        var bgHeight = window.getComputedStyle(scrollTarget, null).getPropertyValue("height").replace("px", '');

        console.log("$%^&: " + scrollVars()[0]);
        console.log("Scroll Position: " + scroll);
        console.log("BG Height: " + bgHeight + 'px');
        console.log("Maximum Scroll: " + scrollMax);
        console.log("Scroll Percentage: " + scrollPercent + '%')


        console.log(100 - scrollPercent);
        console.log("scrollVars()[0]: " + scrollVars()[0]);

        $("#splash").css("background-position-y", 100 + (scroll/4) + '%');
        $("#speciality1").css("background-position-y", ((bgHeight*(1/4)) - (scroll/4)) + 'px');
        $("#speciality2").css("background-position-y", (((bgHeight)-(bgHeight*(2/4))) - (scroll/4))+ 'px');
        $("#contact").css("background-position-y", (((bgHeight)-(bgHeight*(1/4))) - (scroll/4)) + 'px');

        console.log("SplashBG-Position-Y: " + $("#splash").css("background-position-y"));
        console.log("Speciality1BG-Position-Y: " + $("#speciality1").css("background-position-y"));



      if(scrollPercent <= 25){
        console.log("less than 25% scroll!");
      }
      if(scrollPercent > 12.5) {
        $("#speciality1 .mainContent article").css({
          "animation-name": "mainContentFadeIn",
          "animation-duration": ".8s",
          "visibility": "visible",
        });
      }
      if(scrollPercent > 25 && scrollPercent <= 50){
        console.log("between 25-50% scroll!");
        console.log("Speciality1BG-Position-Y: " + $("#speciality1").css("background-position-y"));

      }
      if(scrollPercent > 32.5) {
        $("#speciality2 .mainContent article").css({
          "animation-name": "mainContentFadeIn",
          "animation-duration": ".8s",
          "visibility": "visible",
        });
      }
      if(scrollPercent > 50 && scrollPercent <= 75){
        console.log("between 50-75% scroll!");
        console.log("Speciality2BG-Position-Y: " + $("#speciality2").css("background-position-y"));
      }
      if(scrollPercent > 62.5) {
        $("#contact .mainContent h4, #contact .mainContent button").css({
          "animation-name": "mainContentFadeIn",
          "animation-duration": ".8s",
          "visibility": "visible",
        });

        // begin textSwap functions for #contact section

        function swapText(){
          var textSwap = $("#textSwap");
          var newText = new Array();
          newText[0] = 'captivating';
          newText[1] = 'astonishing';
          newText[2] = 'awe-inspiring';
          newText[3] = 'memorable';

          setTimeout(function(){
            textSwap.text(newText[0]);
            textSwap.css({
              "animation-name": "textSwapOn",
              "animation-duration": "1.5s",
              "filter": "opacity(0%)",
            });
          }, 1000);

          setTimeout(function(){
            textSwap.text(newText[1]);
            textSwap.css({
              "animation-name": "textSwapOff",
              "animation-duration": "1.5s",
              "filter": "opacity(100%)",
            });
          }, 2500);

          setTimeout(function(){
            textSwap.css({
              "animation-name": "textSwapOn",
              "animation-duration": "1.5s",
              "filter": "opacity(0%)",
            });
          }, 4000);

          setTimeout(function(){
            textSwap.text(newText[2]);
            textSwap.css({
              "animation-name": "textSwapOff",
              "animation-duration": "1.5s",
              "filter": "opacity(100%)",
            });
          }, 5500);

          setTimeout(function(){
            textSwap.css({
              "animation-name": "textSwapOn",
              "animation-duration": "1.5s",
              "filter": "opacity(0%)",
            });
          }, 7000);

          setTimeout(function(){
            textSwap.text(newText[3]);
            textSwap.css({
              "animation-name": "textSwapOff",
              "animation-duration": "1.5s",
              "filter": "opacity(100%)",
            });
          }, 8500);
        }
        setTimeout(swapText, 1000);
        // end textSwap functions
      }


      if(scrollPercent > 75 && scrollPercent <= 100){
        console.log("greater than 75% scroll!");
        console.log("ContactBG-Position-Y: " + $("#contact").css("background-position-y"));
      }
      if(scrollPercent == 100){
        console.log("MAXIMUM SCROLL ACHIEVED!!!");
      }

      //below animates the appearance of the footer cols


      if(scrollPercent > 94 & scrollPercent <=100){
        $("#footerCol1").slideDown(1200);
        $("#footerCol2").slideDown(1200);
        $("#footerCol3").slideDown(1200);
        $("#footerCol4").slideDown(1200);
      }


  }); // closes Scrolling Functions like bg offset







// Begin Light Box Functions //

  // below is for thumbnail to lightbox

  $("img, figure").on('click', function(event) {
    console.log(this.alt);
    // this below if statement stops the rest of this function if user clicks on the picture of Dinora //
    if(this.alt == "DiNora"){
      return;
    }

    console.log("img/events/" + this.alt + "-fullscreen.jpg");

    // opens the lightbox
    console.log("Opening the light box!");

    $(lightBox).css({
      "display": "grid",
      "animation-name": "lightBoxOn",
      "animation-duration": ".5s",
    })
    $(bodyParts).css({
      "animation-name": "lightBoxDocBlurOn",
      "animation-duration": ".5s",
      "filter": "blur(10px)",
    })
    $(topNavBar).css({
      "animation-name": "lightBoxDocBlurOn",
      "animation-duration": ".5s",
      "filter": "blur(10px)",
    })
    $("#contactForm").css("display", "none");

    // this detects if what is clicked is an img and if it's parent is the #speciality2Scroller, so it changes the folder where the fullscreen image is
    if($(this).parent().is("#speciality2Scroller") == true){
      console.log("#speciality2Scroller / product image seleced");
      $("#lightBoxInner").css({
        "background-image": "url(" + "img/products/" + this.alt + "-fullscreen.jpg" + ")",
        "animation-name": "lightBoxInnerOn",
        "animation-duration": "1s",
      })
    };
    // this detects if what is clicked is an img and if it's parent is the #speciality2Scroller, so it changes the folder where the fullscreen image is
    if($(this).parent().is("#speciality2Scroller") == false){
      console.log("#speciality1Scroller / event image selected");
      $("#lightBoxInner").css({
        "background-image": "url(" + "img/events/" + this.alt + "-fullscreen.jpg" + ")",
        "animation-name": "lightBoxInnerOn",
        "animation-duration": "1s",
      })
    }

    setTimeout(function(){
      $("#lightBoxInner").css({
        "background-size": "115%",
        "filter": "blur(0px)",
        "filter": "opacity(100%)",
      })
    }, 1000);
  });

  // end thumbnail to lightbox



  //begin contact to lightbox
  $("#contact button").on('click', function(event) {
    $("#contactForm").css("display", "");
    // opens the lightbox
    console.log("Opening the light box!");
    $(lightBoxInner).css("background-image",''),
    $(lightBox).css({
      "display": "grid",
      "animation-name": "lightBoxOn",
      "animation-duration": ".5s",
    })
    $(bodyParts).css({
      "animation-name": "lightBoxDocBlurOn",
      "animation-duration": ".5s",
      "filter": "blur(10px)",
    })
    $(topNavBar).css({
      "animation-name": "lightBoxDocBlurOn",
      "animation-duration": ".5s",
      "filter": "blur(10px)",
    })



    //if($(this).parent().is("#speciality2Scroller") == false){
      $("#lightBox").css("overflow", "auto");
      $("#lightBoxInner").css({
        "animation-name": "lightBoxInnerOn",
        "animation-duration": "1s",
      });
      $("#contactForm").css({
        "display": "",
        "animation-name": "contactFormOn",
        "animation-duration": "1s",
      });
  //  }

    setTimeout(function(){
      $("#lightBoxInner").css({
        "filter": "blur(0px)",
        "filter": "opacity(100%)",
      });
      $("#contactForm").css({
        "filter": "blur(0px)",
        "filter": "opacity(100%)",
      });
    }, 1000);
  });

  // end contact light box





  // closes the light box
  $(lightBoxExit).click(function(){
    console.log("Hiding the light box!");

    $("#lightBoxInner").css({
      "animation-name": "lightBoxInnerOff",
      "animation-duration": ".5s",
    })
    $("#contactForm").css({
      "animation-name": "contactFormOff",
      "animation-duration": ".5s",
    })
    $("#lightBox").css("overflow", "hidden");
    setTimeout(function(){
      $("#lightBoxInner").css({
        "background-size": "130%",
        "filter": "blur(500px)",
        "filter": "opacity(0%)",
      });
      $("#contactForm").css({
        "filter": "blur(500px)",
        "filter": "opacity(0%)",
      });
    }, 0500);
    setTimeout(function(){
      $(lightBox).css({
        "animation-name": "lightBoxOff",
        "animation-duration": ".5s",
      })
      $(bodyParts).css({
        "animation-name": "lightBoxDocBlurOff",
        "animation-duration": ".5s",
        "filter": "blur(0px)",
      })
      $(topNavBar).css({
        "animation-name": "lightBoxDocBlurOff",
        "animation-duration": ".5s",
        "filter": "blur(0px)",
      })
    }, 0500)


    // this will completely hide the light box after the animation above is finished
    setTimeout(function(){
      $(lightBox).css("display", "none");
      $("#contactForm").css("display", "none");
    }, 0500);
  }) // closes lightBoxExit()

// End Light Box Funtions //








// following from: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll //
// Add smooth scrolling to all links
  $("a").on('click', function(event) {
    //console.log(this);
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  }); // CLOSES smooth scrolling











});
// END ALL DOC-READY FUNCTIONS //







// ALL CODE UNLESS OTHERWISE SPECIFIED, HAS BEEN DONE BY CHRIS BOLOR //
