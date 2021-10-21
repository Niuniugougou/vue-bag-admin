// createTime: "2019-11-08 09:35:53"
// icon: "icon-log"
// id: 48
// isShow: 1
// keepAlive: 1
// name: "文档"
// orderNum: 0
// parentId: "47"
// perms: null
// router: "/tutorial/doc"
// type: 1
// updateTime: "2021-03-03 11:03:21"
// viewPath: "https://www.vipbic.com"

import {addUniqueId} from '@/utils/lodash';

/**
 * tabHidden 是否显示tab栏
 * tabFix 是否固定 tab栏
 */
const arr = [
    {
        name: '首页',
        path: '/home',
        icon: 'HomeFilled',
        isShow: 1,
        tabHidden: false,
        tabFix: true
    },
    {
        name: '系统管理',
        router: '',
        icon: 'HomeFilled',
        isShow: 1,
        children: [
            {
                name: '菜单列表',
                path: '/sys/menu',
                icon: '',
                isShow: 1,
                tabHidden: false,
                tabFix: true
            }
        ]
    },
    {
        name: '组件库',
        router: '',
        isShow: 1,
        children: [
            {
                name: 'Markdown编辑器',
                path: '/module/markdown',
                icon: 'HomeFilled',
                isShow: 1,
                tabHidden: true,
                tabFix: false
            },
            {
                name: '文件上传',
                path: '',
                icon: 'UploadOutlined',
                isShow: 1,
                children: [
                    {
                        name: '图片上传',
                        path: '/module/fileUploadImg',
                        icon: 'UploadOutlined',
                        isShow: 1,
                        tabHidden: false,
                        tabFix: false
                    }
                ]
            },
        ]
    },
    {
        name: '关于',
        path: '/about',
        icon: 'UserOutlined',
        isShow: 1,
        tabHidden: false,
        tabFix: false
    },
]
const defaultMenu = addUniqueId(arr)
export {
    defaultMenu
}