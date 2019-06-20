/**
 * Module: Remove Button
 */

import { Calculate } from '../modules/calculate';

module.exports.RemoveButton = class RemoveButton {

     constructor(opts) {

         // initialise
         this.init();

     }

     /**
      * initialise
      */
     init() {

         // EventListener for Remove button
         var span = document.querySelectorAll('.m-basket__products__row');
         span.forEach(function(item) {
             item.addEventListener('click', function (e) {

                 if (e.offsetX > item.offsetWidth) {
                   item.style.display = "none";
                 }

                 $(item).find('.m-basket__cost').attr('data-value', '0.0');

                 Calculate.calculateSubTotal();
                 Calculate.calculateVAT();
                 Calculate.calculateTotal();

             });
         });


     }

 }
