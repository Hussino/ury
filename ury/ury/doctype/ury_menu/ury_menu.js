//  Copyright (c) 2023, Tridz Technologies Pvt. Ltd. and contributors
//  For license information, please see license.txt

frappe.ui.form.on('URY Menu', {
	setup: function (frm) {
		frm.add_fetch('item', 'standard_rate', 'rate');
	},
});
