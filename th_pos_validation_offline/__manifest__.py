# -*- coding: utf-8 -*-
{
    'name': "tho_pos_validation_offline",

        'summary': """
        Stop Validate order in Offline Mode""",

    'description': """
        Long description of module's purpose
    """,
    'license': 'OPL-1',
    'author': "Thomas Edward",
    'website': "https://thomasedward.website/",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','point_of_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/pos_config.xml',
    ],
    # only loaded in demonstration mode
    'assets': {
        'point_of_sale.assets': [
            'th_pos_validation_offline/static/src/js/Screens/PaymentScreen.js',
        ],

    },
'price': 15.0,
    'currency': "EUR",
    'images': ['static/description/banner.gif'],
    'application': True,
}
