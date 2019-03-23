<<<<<<< HEAD
import ImagePreview from '../../components/ImagePreview';
import { Link } from 'dva/router';
import moment from 'moment';
import appLocaleName from '../../common/Locale.tool';

const menuData = {
  menuName: '用户应用程序',
  menuFor: 'userApp',
  subItems: [
    {
      name: 'listAccessList',
      displayName: '访问列表',
      icon: 'list',
      readPermission: false,
      createPermission: false,
      deletePermission: false,
      updatePermission: false,
      executionPermission: false,
    },
    {
      name: 'objectAccessList',
      displayName: '对象访问',
      icon: 'accessible-icon',
      readPermission: false,
      createPermission: false,
      deletePermission: false,
      updatePermission: false,
      executionPermission: false,
    },
  ],
};

const renderTextCell = (value, record) => {
  const userContext = null;
  if (!value) {
    return '';
  }
  if (value == null) {
    return '';
  }
  if (value.length > 15) {
    return (
      value.substring(0, 15) + '...(' + value.length + appLocaleName(userContext, 'Chars') + ')'
    );
  }
  return value;
};

const renderIdentifier = (value, record, targtObjectType) => {
  return <Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>;
};

const renderDateCell = (value, record) => {
  return moment(value).format('YYYY-MM-DD');
};
const renderDateTimeCell = (value, record) => {
  return moment(value).format('YYYY-MM-DD HH:mm');
};

const renderImageCell = (value, record, title) => {
  return <ImagePreview imageTitle={title} imageLocation={value} />;
};

const formatMoney = amount => {
  const options = { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const moneyFormat = new Intl.NumberFormat('en-US', options);
  return moneyFormat.format(amount);
};

const renderMoneyCell = (value, record) => {
  const userContext = null;
  if (!value) {
    return appLocaleName(userContext, 'Empty');
  }
  if (value == null) {
    return appLocaleName(userContext, 'Empty');
  }
  return `${appLocaleName(userContext, 'Currency')}${formatMoney(value)}`;
};

const renderBooleanCell = (value, record) => {
  const userContext = null;

  return value ? appLocaleName(userContext, 'Yes') : appLocaleName(userContext, 'No');
};

const renderReferenceCell = (value, record) => {
  const userContext = null;
  return value ? value.displayName : appLocaleName(userContext, 'NotAssigned');
};

const displayColumns = [
  {
    title: 'ID',
    debugtype: 'string',
    dataIndex: 'id',
    width: '20',
    render: (text, record) => renderTextCell(text, record, 'userApp'),
  },
  {
    title: '标题',
    debugtype: 'string',
    dataIndex: 'title',
    width: '8',
    render: (text, record) => renderTextCell(text, record),
  },
  {
    title: '安全用户',
    dataIndex: 'secUser',
    render: (text, record) => renderReferenceCell(text, record),
  },
  {
    title: '应用程序图标',
    debugtype: 'string',
    dataIndex: 'appIcon',
    width: '13',
    render: (text, record) => renderTextCell(text, record),
  },
  {
    title: '完全访问',
    dataIndex: 'fullAccess',
    render: (text, record) => renderBooleanCell(text, record),
  },
  {
    title: '许可',
    debugtype: 'string',
    dataIndex: 'permission',
    width: '8',
    render: (text, record) => renderTextCell(text, record),
  },
  {
    title: '访问对象类型',
    debugtype: 'string',
    dataIndex: 'objectType',
    width: '31',
    render: (text, record) => renderTextCell(text, record),
  },
  {
    title: '对象ID',
    debugtype: 'string',
    dataIndex: 'objectId',
    width: '14',
    render: (text, record) => renderTextCell(text, record),
  },
  {
    title: '位置',
    debugtype: 'string',
    dataIndex: 'location',
    width: '16',
    render: (text, record) => renderTextCell(text, record),
  },
];
=======

import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'
import appLocaleName from '../../common/Locale.tool'



const menuData = {menuName:"用户应用程序", menuFor: "userApp",
  		subItems: [
  {name: 'listAccessList', displayName:'访问列表', icon:'list',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false},
  {name: 'objectAccessList', displayName:'对象访问', icon:'accessible-icon',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false},
  
  		],
}

const renderTextCell=(value, record)=>{
	const userContext = null
	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+appLocaleName(userContext,"Chars")+")"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	const userContext = null
	if(!value){
		return appLocaleName(userContext,"Empty")
	}
	if(value == null){
		return appLocaleName(userContext,"Empty")
	}
	return (`${appLocaleName(userContext,"Currency")}${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{
	const userContext = null

	return  (value? appLocaleName(userContext,"Yes") : appLocaleName(userContext,"No"))

}

const renderReferenceCell=(value, record)=>{
	const userContext = null
	return (value ? value.displayName : appLocaleName(userContext,"NotAssigned")) 

}

const displayColumns = [
  { title: 'ID', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'userApp') },
  { title: '标题', debugtype: 'string', dataIndex: 'title', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '安全用户', dataIndex: 'secUser', render: (text, record) => renderReferenceCell(text, record)},
  { title: '应用程序图标', debugtype: 'string', dataIndex: 'appIcon', width: '13',render: (text, record)=>renderTextCell(text,record) },
  { title: '完全访问', dataIndex: 'fullAccess', render: (text, record) =>renderBooleanCell(text, record) },
  { title: '许可', debugtype: 'string', dataIndex: 'permission', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '访问对象类型', debugtype: 'string', dataIndex: 'objectType', width: '31',render: (text, record)=>renderTextCell(text,record) },
  { title: '对象ID', debugtype: 'string', dataIndex: 'objectId', width: '14',render: (text, record)=>renderTextCell(text,record) },
  { title: '位置', debugtype: 'string', dataIndex: 'location', width: '16',render: (text, record)=>renderTextCell(text,record) },

]
>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89

const fieldLabels = {
  id: 'ID',
  title: '标题',
  secUser: '安全用户',
  appIcon: '应用程序图标',
  fullAccess: '完全访问',
  permission: '许可',
  objectType: '访问对象类型',
  objectId: '对象ID',
  location: '位置',
<<<<<<< HEAD
};

const UserAppBase = { menuData, displayColumns, fieldLabels };
export default UserAppBase;
=======

}


const UserAppBase={menuData,displayColumns,fieldLabels}
export default UserAppBase



>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89
