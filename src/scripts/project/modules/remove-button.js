/**
 * Module: Remove Button
 */

import { Calculate } from '../modules/calculate';

export class RemoveButton {

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
                   $(item).find('.m-basket__cost').attr('data-value', '0.0');
                   $(item).find('.m-basket__quantity input').val(0);
                   this.newCalculate = new Calculate();
                   this.newCalculate.calculateSubTotal();
                   this.newCalculate.calculateVAT();
                   this.newCalculate.calculateTotal();
                 }

             });
         });


     }

 };
