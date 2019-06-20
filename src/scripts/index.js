/**
 * Project controller
 */

import '../styles/index.scss';

// Using jQuery
var $ = require('jquery');
window.jQuery = $;
window.$ = $;


// application
import { Main } from './project/main';

$(document).ready(() => {
    new Main();
});



// EventListener for Remove button
var span = document.querySelectorAll('.m-basket__products__row');
span.forEach(function(item) {
    item.addEventListener('click', function (e) {

        if (e.offsetX > item.offsetWidth) {
          item.style.display = "none";
        }

        $(item).find('.m-basket__cost').attr('data-value', '0.0');

        calculateSubTotal();
        calculateVAT();
        calculateTotal();

    });
});


// Buy Now button
var buyNowBtn = document.querySelector('.m-button--buy-now');
buyNowBtn.addEventListener('click', function (e) {
    console.log('Buy Now');
    alert('submit AJAX request');
});


// Quantity increment/decrement initialised on pageload
$(function() {

    $(".m-basket .m-basket__quantity").append('<div class="m-basket__quantity__btns"><div class="inc qty-button">+</div><div class="dec qty-button">-</div></div>');

});


// Qunatity toggle
$(document).on('click', '.m-basket__quantity .qty-button', function(){

    let $button = $(this);
    let oldValue = $button.parents('.m-basket__quantity').find("input").val();
    let newVal;

    if ($button.text() == "+") {
      newVal = parseFloat(oldValue) + 1;
    } else {
    if (oldValue > 0) {
      newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
    }

    $button.parents('.m-basket__quantity').find("input").val(newVal);

    calculateCost(this);
    calculateSubTotal();
    calculateVAT();
    calculateTotal();

});


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
