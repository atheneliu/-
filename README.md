
> rainie vue project

## Build Setup

``` bash
# install dependencies
npm install
#可能出现的错误 Failed at the phantomjs-prebuilt@2.1.13 install script 'node install.js'
解决：npm install phantomjs-prebuilt@2.1.13 --ignore-scripts
     npm install
# serve with hot reload at localhost:9856
npm run start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目说明

用到的东西有`vue`, `vue-router`, `vuex`, 除此之外还包括:

 - `ress` https://github.com/filipelinhares/ress 用于reset css
 - `animation.css` https://github.com/daneden/animate.css 配合vue的动画
 - `fastclick` https://github.com/ftlabs/fastclick 
 - `sass` https://github.com/sass/sass
 - `rem` http://vue.ydui.org/docs/#/flexible 请看这个链接

## 一些说明

- 支持多页面入口
 >1. 在`./webpack/pages.js`文件中加入对应的项目名称
 >2. 添加`./src/xxx`目录
 >3. 对应的router中每个router都要加`xxx`前缀, 例如`xxx/home`
 >4. 如果需要特殊的`template-html`, 请注意`webpack/utils`里的`generateHtmlWebpackPlugin`方法, 需要在wepack的配置文件中做一些处理

- 支持跳转动画

>支持push, pop和replace的动画, 但必须是`vm.$cRouter().push()` `vm.$cRouter().pop()` `vm.$cRouter().replace()`, 原始的vue-router方式也可以跳转, 但是没有动画, 浏览器的后退键会被认为成pop

>所以`<Link />`标签也不支持动画, 尽量使用函数来进行跳转, 例如ydui中的cell支持link方式的路由跳转(原理可能是用哪个history的pushState), 这样也是没有动画的, 所以请使用`@click.native`来绑定方法来实现跳转

- sass的问题
>在加入sass之后, production的 vue-loader里的css extract如果设置为true, build后页面会报错, 这个问题暂时不知道如何解决, 目前production也不extract, 这意味着页面里写的style会跟着页面走, 不会被提取成单独css文件
>
>多入口导致无法使用sass-resources-loader

- rem的配置
>直接使用的ydui的rem, ydui中的组件都是以设计稿750px来做的, 如果自己的设计稿是375px, 那么只需要在对应项目的`theme.sass`文件中将`$docWidth`改为375即可, 页面中直接使用`rem(16)`就对应着375px的设计图中的16px值
>如果使用ydui, `main.js`中不用引`import 'vue-ydui/dist/ydui.rem.css'`

