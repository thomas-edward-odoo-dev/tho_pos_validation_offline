# -*- coding: utf-8 -*-

from odoo import api, fields, models, _
from odoo.exceptions import ValidationError

class posConfigInh(models.Model):
    _inherit = 'pos.config'


    module_pos_offline = fields.Boolean("Stop Validate offline")
