// router/modules/home.js
const webview = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/webview/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'webview',
        meta: {
	        title: ''
	    },
    }
]
export default webview;
