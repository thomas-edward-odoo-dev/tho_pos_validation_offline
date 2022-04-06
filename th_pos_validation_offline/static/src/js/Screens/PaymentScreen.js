// BiProductScreen js
odoo.define('tho_pos_validation_offline.PaymentScreen', function(require) {
	"use strict";

	const Registries = require('point_of_sale.Registries');
	const PaymentScreen = require('point_of_sale.PaymentScreen');

	const BiPaymentScreen = (PaymentScreen) =>
		class extends PaymentScreen {
			constructor() {
				super(...arguments);
			}
        async validateOrder(isForceValidate) {
                        console.log("module_pos_offline :",this.env.pos.config.module_pos_offline)

        		var ifConnected = window.navigator.onLine;
    			var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                //var type = connection.effectiveType;
                var type ='4g'
                console.log("navigator.onLine 2 :",navigator.connection)
                console.log("navigator.onLine 2 :",navigator.onLine)
                console.log("connection 2 :",connection)
                if (this.env.pos.config.module_pos_offline)
                {
                if(type== '4g')
                {
                console.log("type test :",type)
                if(this.env.pos.config.cash_rounding) {
                    if(!this.env.pos.get_order().check_paymentlines_rounding()) {
                        this.showPopup('ErrorPopup', {
                            title: this.env._t('Rounding error in payment lines'),
                            body: this.env._t("The amount of your payment lines must be rounded to validate the transaction."),
                        });
                        return;
                    }
                }
                if (await this._isOrderValid(isForceValidate)) {
                    // remove pending payments before finalizing the validation
                    for (let line of this.paymentLines) {
                        if (!line.is_done()) this.currentOrder.remove_paymentline(line);
                    }
                    await this._finalizeValidation();
                }
                }
                else{
                console.log("type test 3  offline :",type)
                    this.showPopup('ErrorPopup', {
                        title: this.env._t('Offline'),
                        body: this.env._t('The process cannot be completed.'),
                    });
                }
                }
                else{
                                if(this.env.pos.config.cash_rounding) {
                    if(!this.env.pos.get_order().check_paymentlines_rounding()) {
                        this.showPopup('ErrorPopup', {
                            title: this.env._t('Rounding error in payment lines'),
                            body: this.env._t("The amount of your payment lines must be rounded to validate the transaction."),
                        });
                        return;
                    }
                }
                if (await this._isOrderValid(isForceValidate)) {
                    // remove pending payments before finalizing the validation
                    for (let line of this.paymentLines) {
                        if (!line.is_done()) this.currentOrder.remove_paymentline(line);
                    }
                    await this._finalizeValidation();
                }
                }

        }

		};

	Registries.Component.extend(PaymentScreen, BiPaymentScreen);

	return PaymentScreen;

});
