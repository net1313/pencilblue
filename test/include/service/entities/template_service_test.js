/**
 * cache_test.js
 * 
 * @author Brian Hyder <brianhyder@gmail.com>
 * @copyright PencilBlue 2014, All Rights Reserved
 */

//requires
require('../../../base_test');

module.exports = {
	
	setUp: function(cb){
		cb();
	},

	tearDown: function(cb){
		cb();
	},
	
	testValidateValidDetailsJSONFile: function(test) {
		
		var TemplateService = require(path.join(DOCUMENT_ROOT, 'include', 'service', 'entities', 'template_service.js'));
		var tservice = new TemplateService();
		
		var content = '^tmp_admin=head^ <div class="col-md-9"> ^error_success^ ^tmp_admin=elements=sub_nav^ ^tmp_admin=elements=tab_nav^ <form id="edit_user_form" method="post" action="^site_root^/actions/admin/users/edit_user?id=^user_id^"> <fieldset> <div class="tab-content"> <div class="tab-pane active" id="account_info"> <div class="form-group"> <label>^loc_USERNAME^</label> <input type="text" id="username" name="username" class="form-control" value="{{user.username}}"></input> </div> <div class="form-group"> <label>^loc_EMAIL^</label> <input type="email" id="email" name="email" class="form-control" value="{{user.email}}"></input> </div> <div class="form-group"> <label>^loc_USER_TYPE^</label> <select id="admin" name="admin" class="form-control"> <option value="{{adminOption.value}}" ng-repeat="adminOption in adminOptions" ng-selected="user.admin == adminOption.value" ng-cloak>{{adminOption.name}}</option> </select> </div> </div> <div class="tab-pane" id="personal_info"> <div class="form-group"> <label>^loc_FIRST_NAME^</label> <input type="text" id="first_name" name="first_name" class="form-control" value="{{user.first_name}}"></input> </div> <div class="form-group"> <label>^loc_LAST_NAME^</label> <input type="text" id="last_name" name="last_name" class="form-control" value="{{user.last_name}}"></input> </div> <div class="form-group"> <label>^loc_POSITION^</label> <input type="text" id="position" name="position" class="form-control" value="{{user.position}}"></input> </div> ^tmp_admin=elements=upload_and_link_photo^ </div> <button type="button" class="btn btn-default" onclick="window.location = \'^site_root^/admin/users\';"> <i class="fa fa-ban"></i>&nbsp;^loc_CANCEL^ </button> <button type="submit" class="btn btn-primary"> <i class="fa fa-save"></i>&nbsp;^loc_SAVE^ </button> </div> </fieldset> </form> </div> <script type="text/javascript" src="^site_root^/js/jquery.validate.min.js"></script> <script type="text/javascript" src="^site_root^/js/admin/users/edit_user.js"></script> ^tmp_admin=footer^ ';
		tservice.process(content, function(err, template) {
			test.equals(null, err);
			test.done();
		});
	}
};
