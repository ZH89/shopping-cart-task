/**
 * Module: Buy Now Button
 */

 module.exports.BuyNowButton = class BuyNowButton {

     constructor(opts) {

         // initialise
         this.init();

     }

     /**
      * initialise
      */
     init() {

         var buyNowBtn = document.querySelector('.m-button--buy-now');
         buyNowBtn.addEventListener('click', function (e) {
             console.log('Buy Now');
             alert('submit AJAX request');

             $.post("demo_test_post.asp",
             {
               name: "Donald Duck",
               city: "Duckburg"
             },
             function(data, status){
               alert("Data: " + data + "\nStatus: " + status);
             });

         });

     }

 }
