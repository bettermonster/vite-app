/**
 * @created by helin3 2019-04-11
 * @description 静态数据字典
 */

export default {
  WHDW_TYPE: [
    { key: '0', value: '子户转入主户' },
    { key: '1', value: '主户转入结算账户' },
  ],
  MATT_TYPE: [
    { key: '立案', value: '立案' },
    { key: '开庭', value: '开庭' },
    { key: '裁决', value: '裁决' },
    { key: '外聘律师', value: '外聘律师' },
    { key: '诉前保全', value: '诉前保全' },
  ],
  CUST_TYPE: [
    { key: '1', value: '个体工商户' },
    { key: '2', value: '小微企业主' },
    { key: '3', value: '其他自然人' },
  ],
  CUST_STATUS: [
    { key: '1', value: '正式客户(草稿)' },
    { key: '2', value: '临时客户' },
    { key: '3', value: '非标客户(草稿)' },
    { key: '4', value: '正式客户(提交)' },
    { key: '5', value: '非标客户(提交)' },
    { key: '6', value: '注销' },
  ],
  CRUD_TYPE: [
    { key: 'ADD', value: '新增' },
    { key: 'EDIT', value: '修改' },
    { key: 'DETAIL', value: '详情' },
  ],
  GENDER: [
    { key: '01', value: '男' },
    { key: '02', value: '女' },
  ],
  YESNO: [
    { key: 'Y', value: '是' },
    { key: 'N', value: '否' },
  ],
  HASNO: [
    { key: '01', value: '有' },
    { key: '02', value: '无' },
  ],
  OBJECT_TYPE: [
    { key: 'R', value: '角色' },
    { key: 'U', value: '用户' },
    { key: 'D', value: '部门' },
    { key: 'G', value: '机构' },
  ],
  RESOURCE_TYPE: [
    { key: 'M', value: '菜单' },
    { key: 'C', value: '控制点' },
    { key: 'D', value: '数据权限' },
  ],
  RECIVE_TYPE: [
    { key: 'R', value: '角色' },
    { key: 'G', value: '机构' },
  ],
  PUB_STS: [
    { key: 'O', value: '已发布' },
    { key: 'C', value: '未发布' },
  ],
  NOTICE_LEVEL: [
    { key: 'I', value: '重要' },
    { key: 'N', value: '一般' },
  ],
  TOP_FLAG: [
    { key: 'I', value: '是' },
    { key: 'N', value: '否' },
  ],
  MENU_TYPE: [
    { key: '', value: '正常模式' },
    { key: 'YUXP', value: 'YUXP' },
  ],
  TEXT_LOCATION: [
    { key: 'left', value: '居左' },
    { key: 'center', value: '居中' },
    { key: 'right', value: '居右' },
  ],
  TEXT_TYPE: [
    { key: '文本框', value: '文本框' },
    // {key: '数字框', value: '数字框'},
    { key: '下拉框', value: '下拉框' },
    { key: '勾选框', value: '勾选框' },
    { key: '单选框', value: '单选框' },
    { key: '复选框', value: '复选框' },
    { key: '日历', value: '日历' },
    { key: '多行文本框', value: '多行文本框' },
    { key: '列表参照', value: '列表参照' },
    { key: '树型参照', value: '树型参照' },
    { key: '列表购物车参照', value: '列表购物车参照' },
    { key: '树型购物车参照', value: '树型购物车参照' },
    { key: '树表参照', value: '树表参照' },
    { key: '双表参照', value: '双表参照' },
    { key: '自定义参照', value: '自定义参照' },
    { key: '图片上传', value: '图片上传' },
    { key: '文件上传', value: '文件上传' },
    { key: '开关', value: '开关' },
    { key: '日期时间', value: '日期时间' },
    { key: '时间', value: '时间' },
    { key: '评分', value: '评分' },
    // {key: '引用子表', value: '引用子表'},
    { key: '自定义组件', value: '自定义组件' },
    { key: '图标选择', value: '图标选择' },
    { key: '颜色选择', value: '颜色选择' },
    { key: '下拉联动', value: '下拉联动' },
  ],
  COL_SPAN: [
    { key: '2', value: '2' },
    { key: '4', value: '4' },
    { key: '6', value: '6' },
    { key: '8', value: '8' },
    { key: '10', value: '10' },
    { key: '12', value: '12' },
    { key: '14', value: '14' },
    { key: '16', value: '16' },
    { key: '18', value: '18' },
    { key: '20', value: '20' },
    { key: '22', value: '22' },
    { key: '24', value: '24' },
  ],
  QUERY_COMPARE_TYPE: [
    { key: 'default', value: '默认机制' },
    { key: '=', value: '等于机制' },
    { key: 'in', value: 'In机制' },
    { key: 'like', value: 'Like机制' },
    { key: 'likeor', value: 'LikeOr机制' },
    { key: 'likeand', value: 'LikeAnd机制' },
    { key: 'between', value: 'Between机制' },
    { key: 'subquery', value: '子查询' },
    { key: 'custom', value: '自定义SQL' },
  ],
  QUERY_TEXT_TYPE: [
    { key: '文本框', value: '文本框' },
    // {key: '数字框', value: '数字框'},
    { key: '下拉框', value: '下拉框' },
    { key: '勾选框', value: '勾选框' },
    { key: '单选框', value: '单选框' },
    { key: '复选框', value: '复选框' },
    { key: '日历', value: '日历' },
    { key: '日历区间', value: '日历区间' },
    { key: '列表参照', value: '列表参照' },
    { key: '树型参照', value: '树型参照' },
    { key: '列表购物车参照', value: '列表购物车参照' },
    { key: '树型购物车参照', value: '树型购物车参照' },
    { key: '树表参照', value: '树表参照' },
    { key: '双表参照', value: '双表参照' },
    { key: '自定义参照', value: '自定义参照' },
    { key: '开关', value: '开关' },
    { key: '日期时间', value: '日期时间' },
    { key: '日期时间区间', value: '日期时间区间' },
    { key: '时间', value: '时间' },
    { key: '评分', value: '评分' },
    { key: '自定义组件', value: '自定义组件' },
  ],
  OP_TYPE: [
    { key: 'O-0', value: '拿回' },
    { key: 'O-1', value: '打回' },
    { key: 'O-2', value: '退回' },
    { key: 'O-3', value: '挂起' },
    { key: 'O-4', value: '唤醒' },
    { key: 'O-5', value: '催办' },
    { key: 'O-6', value: '转办' },
    { key: 'O-7', value: '协办' },
    { key: 'O-8', value: '否决' },
    { key: 'O-9', value: '跳转' },
    { key: 'O-10', value: '委托' },
    { key: 'O-11', value: '抄送' },
    { key: 'O-12', value: '同意' },
    { key: 'O-13', value: '自动提交' },
    { key: 'O-14', value: '正常结束' },
    { key: 'O-15', value: '撤回' },
    { key: 'O-16', value: '发起' },
  ],
  TITLE_STYLE: [
    { key: '小号字', value: '小号字' },
    { key: '大号字', value: '大号字' },
    { key: '正常', value: '正常' },
    { key: '隐藏', value: '隐藏' },
  ],
  TREE_MODEL: [
    { key: 'parent', value: 'parent' },
    { key: 'group', value: 'group' },
  ],
  ROW_STYLE: [
    { key: '单选带行号带图标', value: '单选带行号带图标' },
    { key: '单选带行号', value: '单选带行号' },
    { key: '单选带图标', value: '单选带图标' },
    { key: '单选', value: '单选' },
    { key: '多选带行号', value: '多选带行号' },
    { key: '多选', value: '多选' },
  ],
  ORG_TYPE_TYPE: [
    { key: '法人机构类型', value: '法人机构类型' },
    { key: '行级机构类型', value: '行级机构类型' },
    { key: '部门级机构类型', value: '部门级机构类型' },
    { key: '机构扩展类型', value: '机构扩展类型' },
    { key: '动态机构类型', value: '动态机构类型' },
  ],
  DATABASE_TYPE: [
    { key: 'MYSQL', value: 'MySql' },
    { key: 'ORACLE', value: 'Oracle' },
    { key: 'DB2', value: 'DB2' },
    { key: 'SQLSERVER', value: 'SqlServer' },
    { key: 'others', value: '其他' },
  ],
};
