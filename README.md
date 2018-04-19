### 使用 Vue + WebPack 高仿饿了么APP

#### Web App 的模块划分  

* 商品 goods.vue
* 评价 ratings.vue
* 商家 seller.vue

### 项目详情

APP.vue

* 头部组件: header.vue

    * 星星组件: star.vue
    
* tab划分, 定义路由: route-link标签

* 路由切换页面: route-view标签

    * goods.vue
    
        * 购物车控制组件: cartcontrol.vue
        * 商品详情: food.vue
            * 间隔组件: split.vue  
            * 购物车控制组件: cartcontrol.vue
            * 评价切换组件: ratingselect.vue
        * 购物车组件: shopcart.vue 
            * 购物车控制组件: cartcontrol.vue
    * ratings.vue

        * 评价切换组件: ratingselect.vue 
        * 间隔组件: split.vue 
        * 星星组件: star.vue
    * seller.vue    
    
        * 间隔组件: split.vue  
        * 星星组件: star.vue
        
## 主要依赖
- 基于vue@2.0
- 使用vue-cli@2.0搭建项目框架
- 使用vue-router@2.1进行页面路由切换
- 使用vue-resource@1.0.1进行http请求获取数据
- mock假数据存储在本地
- 使用stylus编写样式
- 使用eslint进行js代码的规范
- 使用[better-scroll](https://github.com/ustbhuangyi/better-scroll)进行联动滑动

## 在线预览
[点我在线预览](https://txfaaaa.github.io/Vue-App)

**（PC端建议开启chrome调试模式食用更佳，移动端直接在浏览器开启即可）**

## Build Setup

``` bash                                                 
# clone the repo into your disk.
$ git clone https://github.com/txfaaaa/Vue-App

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

```
