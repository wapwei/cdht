webpackJsonp([34],{262:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(489),o=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var n=a(878),d=a.n(n),l=a(3),r=l(o.a,d.a,!1,null,null,null);r.options.__file="src/views/privileges/roles/list.vue",t.default=r.exports},489:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(26),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){var e=this;return{modalHeadImage:{show:!1,url:null},loading:!1,search:{name:null},addEditRoleModal:{show:!1,saveLoading:!1},permissionModal:{id:0,allPermissions:[],hasPermissions:[],show:!1,saveLoading:!1,listStyle:{width:"400px",height:"400px"}},ruleAddEditRole:{name:[{required:!0,message:"请填写角色限名称",trigger:"blur"}],guard_name:[{required:!0,message:"请填写看守器",trigger:"blur"}]},addEditRoleForm:{id:0,name:"",guard_name:"",description:""},dataList:[],columns:[{title:"ID",key:"id",sortable:!0,width:100},{title:"角色限名称",key:"name"},{title:"角色看守器",key:"guard_name"},{title:"角色描述",key:"description"},{title:"创建时间",key:"created_at",sortable:!0},{title:"更新时间",key:"created_at"},{title:"操作",render:function(t,a){var i=e;return t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.addEditRoleForm=i.dataList[a.index],i.addEditRoleModal.show=!0}}},"Edit"),t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){i.getRolePermissions(a.row.id),i.permissionModal.show=!0,i.permissionModal.id=a.row.id}}},"权限"),t("Poptip",{props:{confirm:!0,title:"您确定要删除「"+a.row.name+"」角色？",transfer:!0},on:{"on-ok":function(){i.deleteBtn(a.row.id,a.index)}}},[t("Button",{style:{margin:"0 5px"},props:{type:"error",size:"small",placement:"top"}},"删除")])])}}]}},created:function(){var e=this;e.getList(),e.getAllPermission()},methods:{renderFormat:function(e){return e.label+"「"+e.description+"」"},handleSubmitPermission:function(){var e=this;e.$util.ajax.post("/admin/give/"+e.permissionModal.id+"/permissions",{permission:e.permissionModal.hasPermissions}).then(function(t){var a=t.data;e.$Notice.success({title:a.message}),e.permissionModal.show=!1},function(t){e.$Notice.warning({title:"出错了",desc:t.message})})},cancelPermissionModal:function(){var e=this;e.permissionModal.show=!1,e.permissionModal.saveLoading=!1},getAllPermission:function(){var e=this;e.$util.ajax.get("/admin/all_permissions").then(function(t){var a=t.data;e.permissionModal.allPermissions=a.data},function(t){e.$Notice.warning({title:"出错了",desc:t.message})})},handleTransferChange:function(e){this.permissionModal.hasPermissions=e},getRolePermissions:function(e){var t=this;t.$util.ajax.get("/admin/roles/"+e+"/permissions").then(function(e){var a=e.data;t.permissionModal.hasPermissions=a.data},function(e){t.$Notice.warning({title:"出错了",desc:e.message})})},handleSubmit:function(){var e=this;e.$refs.addEditRoleForm.validate(function(t){t&&(e.addEditRoleModal.saveLoading=!0,e.$util.ajax.post("/admin/roles",e.addEditRoleForm).then(function(t){var a=t.data;e.$Notice.success({title:a.message}),e.getList(),e.addEditRoleModal.saveLoading=!1,e.addEditRoleModal.show=!1},function(t){e.$Notice.warning({title:"出错了",desc:t.message}),e.addEditRoleModal.saveLoading=!1}))})},cancelEditPass:function(){var e=this;e.addEditRoleModal.show=!1,e.addEditRoleModal.saveLoading=!1,e.cleanModal()},cleanModal:function(){this.addEditRoleForm={id:0,name:"",guard_name:"",description:""}},addBtn:function(){this.cleanModal(),this.addEditRoleModal.show=!0},getList:function(){var e=this;e.loading=!0,e.$util.ajax.get("/admin/roles?search_data="+(0,o.default)(e.search)).then(function(t){var a=t.data;e.dataList=a.data,e.loading=!1},function(t){e.$Notice.warning({title:"出错了",desc:t.message}),e.loading=!1})},deleteBtn:function(e,t){var a=this;a.$util.ajax.delete("/admin/roles/"+e).then(function(e){var i=e.data;a.dataList.splice(t,1),a.$Notice.success({title:i.message})},function(e){a.$Notice.warning({title:"出错了",desc:e.message})})}}}},878:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"privileges-users-list"}},[a("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end",gutter:16}},[a("Col",{attrs:{span:"3"}},[a("Input",{attrs:{icon:"search",placeholder:"请输入角色名称..."},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"primary",icon:"ios-search"},on:{click:function(t){e.getList()}}},[e._v("Search")])],1),e._v(" "),a("Col",{attrs:{span:"2"}},[a("Button",{attrs:{type:"success",icon:"plus"},on:{click:function(t){e.addBtn()}}},[e._v("Add")])],1)],1),e._v(" "),a("br"),e._v(" "),a("Row",[a("Table",{attrs:{border:"",columns:e.columns,data:e.dataList,loading:e.loading}})],1),e._v(" "),a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:500},model:{value:e.addEditRoleModal.show,callback:function(t){e.$set(e.addEditRoleModal,"show",t)},expression:"addEditRoleModal.show"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("编辑角色")]),e._v(" "),a("Form",{ref:"addEditRoleForm",attrs:{model:e.addEditRoleForm,"label-width":100,"label-position":"right",rules:e.ruleAddEditRole}},[a("FormItem",{attrs:{label:"角色名称",prop:"name"}},[a("Input",{attrs:{placeholder:"请输角色名称"},model:{value:e.addEditRoleForm.name,callback:function(t){e.$set(e.addEditRoleForm,"name",t)},expression:"addEditRoleForm.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"看守器",prop:"guard_name"}},[a("Input",{attrs:{placeholder:"请输入看守器"},model:{value:e.addEditRoleForm.guard_name,callback:function(t){e.$set(e.addEditRoleForm,"guard_name",t)},expression:"addEditRoleForm.guard_name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"角色描述",prop:"description"}},[a("Input",{attrs:{placeholder:"请输入角色描述"},model:{value:e.addEditRoleForm.description,callback:function(t){e.$set(e.addEditRoleForm,"description",t)},expression:"addEditRoleForm.description"}})],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancelEditPass}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"primary",loading:e.addEditRoleModal.saveLoading},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1),e._v(" "),a("Modal",{attrs:{closable:!1,"mask-closable":!1,width:"1000"},model:{value:e.permissionModal.show,callback:function(t){e.$set(e.permissionModal,"show",t)},expression:"permissionModal.show"}},[a("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("分配权限")]),e._v(" "),e.permissionModal.show?a("Transfer",{attrs:{data:e.permissionModal.allPermissions,"target-keys":e.permissionModal.hasPermissions,"render-format":e.renderFormat,operations:["移除权限","添加权限"],"list-style":e.permissionModal.listStyle,filterable:""},on:{"on-change":e.handleTransferChange}}):e._e(),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"text"},on:{click:e.cancelPermissionModal}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"primary"},on:{click:e.handleSubmitPermission}},[e._v("保存\n            ")])],1)],1)],1)},o=[];i._withStripped=!0;var s={render:i,staticRenderFns:o};t.default=s}});