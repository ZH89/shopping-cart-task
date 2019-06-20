/**
 * Module: Calculate
 */


module.exports.Likes = class Likes {

     constructor(opts) {

         // initialise
         this.init();

     }

     /**
      * initialise
      */
     init() {

         // Calculate Cost
         function calculateCost(product) {

             let price = $(product).parents('.m-basket__products__row').find('.m-basket__price').data('value');
             let quantity = $(product).parents('.m-basket__products__row').find('.m-basket__quantity input').val();
             let sum = price * quantity;

             $(product).parents('.m-basket__products__row').find('.m-basket__cost').attr('data-value', sum);
             $(product).parents('.m-basket__products__row').find('.m-basket__cost').text('£'+sum.toFixed(2));

         }


         // Calculate SubTotal
         function calculateSubTotal() {

             let sum = $('.m-basket__subtotal').data('value');
             let dataValue = $(this).data('value');
             sum = parseFloat(sum);

             $(".m-basket__cost").each(function(){
                 let dataValue = $(this).attr('data-value');
                 dataValue = parseFloat(dataValue);
                 sum += dataValue;
             });

             $('.m-basket__subtotal').attr('data-value', sum);
             $('.m-basket__subtotal').text('£'+sum.toFixed(2));

         }


         // Calculate VAT
         function calculateVAT() {

             let subTotal = $('.m-basket__subtotal').attr('data-value');
             subTotal = parseFloat(subTotal);

             let sum = subTotal * 0.2;

             $('.m-basket__vat').attr('data-value', sum);
             $('.m-basket__vat').text('£'+sum.toFixed(2));

         }


         // Calculate Total
         function calculateTotal() {

             let subTotal = $('.m-basket__subtotal').attr('data-value');
             let vat = $('.m-basket__vat').attr('data-value');
             subTotal = parseFloat(subTotal);
             vat = parseFloat(vat);

             let total = subTotal + vat;
             $('.m-basket__total').attr('data-value', total);
             $('.m-basket__total').text('£'+total.toFixed(2));

         }

     }

 }
