/**
 * Module: Buy Now Button
 */

export class BuyNowButton {

     constructor(opts) {

         // initialise
         this.init();

     }

     /**
      * initialise
      */
     init() {

         let buyNowBtn = document.querySelector('.m-button--buy-now');
         buyNowBtn.addEventListener('click', function (e) {

             e.preventDefault();
             alert('submitted AJAX request, see console for response details');

             let orderQuantity = [];
             let i = 0;

             $('.m-basket__quantity').each(function() {
                 //get values
                 orderQuantity[i] = $(this).find('input').val();
                 i += 1;
             });

             console.log('Order Quantity:', orderQuantity);

             // post request
             let data = [{
                 "product": $('.m-basket__product-name')[0].innerText,
                 "quantity": orderQuantity[0]
               },
               {
                 "product": $('.m-basket__product-name')[1].innerText,
                 "quantity": orderQuantity[1]
               },
               {
                 "product": $('.m-basket__product-name')[2].innerText,
                 "quantity": orderQuantity[2]
               }
             ];

             let url = window.location.href + 'api/';
             console.log('Data: ', data);
             console.log('Endpoint: ', url);

             $.ajax({
               type: "POST",
               url: url,
               data: JSON.stringify(data),
               contentType: "application/json; charset=utf-8",
               dataType: "json",
               error: function() {
                 console.log("AJAX response: Error");
               },
               success: function() {
                 console.log("AJAX response: Success");
               }
             });

         });

     }

 };
