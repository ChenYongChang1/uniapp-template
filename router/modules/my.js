// router/modules/home.js
const my = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/my/index',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'my',
        meta: {
	        title: '我的'
	    },
    }
]
export default my;
