module.exports = {
    plugins: {
        'postcss-mobile-forever': {
            rootSelector: '#root .app', // 根元素，用于设置居中
            viewportWidth: 750, // 窗口宽度: UI设计稿给的手机的窗口宽度 （xx/750*100vw）
            maxDisplayWidth: 560, // 最大宽度
            disableLandscape: true, // 禁止生成横屏媒体查询
            disableDesktop: true, // 禁止生成桌面端媒体查询
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            mobileUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            valueBlackList: ['1px solid'], // 指定不用转换的值
            exclude: [/node_modules/] // 设置忽略文件，用正则做目录名匹配
        }
    }
};
