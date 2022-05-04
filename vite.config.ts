import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";

const { uniPostcssPlugin } = require("@dcloudio/uni-cli-shared");
import WindiCSS from "vite-plugin-windicss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        dirs: ["."], // 当前目录下所有文件
        fileExtensions: ["vue", "js", "ts"], // 同时启用扫描vue/js/ts
      },
    }),
    uni(),
  ],
  css: {
    postcss: {
      plugins: [
        /* ******* */
        uniPostcssPlugin(),
        require("postcss-px-to-viewport")({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          // viewportHeight:1080, // UI设计高度可以不写
          unitPrecision: 5, // 转换后的精度，即小数点位数
          propList: ["width", "height"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          // landscapeUnit: 'vh',// 横屏时使用的单位 手机横屏使用
          // landscapeWidth: 667,// 横屏时使用的视口宽度
          selectorBlackList: [], // 指定不转换为视窗单位的类名
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // landscape: false, // 是否处理横屏情况
          exclude: /(\/|\\)(node_modules)(\/|\\)/, // 设置忽略文件，用正则做目录名匹配
        }),
        require("postcss-pxtorem")({
          rootValue: 16,
          unitPrecision: 6,
          propList: ["font", "font-size", "line-height", "letter-spacing"],
          selectorBlackList: [],
          replace: true,
          mediaQuery: true,
          minPixelValue: 4,
          exclude: /node_modules/i,
        }),
      ],
    },
    preprocessorOptions: {
      scss: {
        // 引入 uni.scss 这样就可以在全局中使用 uni.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        additionalData: '@import "./src/uni.scss";',
      },
    },
  },
});
