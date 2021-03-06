var $ = require('jquery');
var Calculator = require('./Calculator');

$(document).ready(function () {

  $('[name="calculator_form"]').on('submit', function (e) {
    e.preventDefault();

    var ages = [], experiences = [];

    $('[name="driver_experiences"]').each(function () {
      if ($(this).val()) {
        experiences.push($(this).val());
      }
    });
    $('[name="driver_ages"]').each(function () {
      if ($(this).val()) {
        ages.push($(this).val());
      }
    });

    var calculator = new Calculator(
      $('[name="insurance_type"]:checked').val(),
      $('[name="discount_kv"]').val(),
      $('[name="region"]').val(),
      $('[name="model"]').val(),
      $('[name="year"]').val(),
      $('[name="insurance_money"]').val(),
      $('[name="gap"]').is(':checked'),
      $('[name="is_new"]').is(':checked'),
      $('[name="no_pss"]').is(':checked'),
      $('[name="franchise"]').val(),
      $('[name="is_multidrive"]').is(':checked'),
      $('[name="drivers_num"]').val(),
      experiences,
      ages,
      $('[name="installments"]').val(),
      $('[name="trailer"]').is(':checked'),
      $('[name="is_car_loan"]').is(':checked'),
      $('[name="insurance_money_dsago"]').val()
    );

    try {
      $('.insurance_tariff').html(calculator.getTariffPercent());
      $('.insurance_premium').html(calculator.getPremium());
      $('.insurance_premium_dsago').html(calculator.getPremiumDsago());
      $('.insurance_premium_total').html(calculator.getPremiumTotal());
    } catch (e) {
      alert(e);
    }
  });




});
