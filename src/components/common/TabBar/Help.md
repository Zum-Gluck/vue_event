#### 代码演示:

首先注册这两个组件

```js
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBar-item";
```

基本用法：

 `TabBarItem`内部接收三个插槽

第一个插槽  -- 非活跃状态下的图片 `  soltName #itemImg`

```vue
<template #itemImg>
  <img src="./assets/img/TabBar/home.png" />
</template>
```

第二个插槽 --  活跃状态下的图片 `  soltName #itemImg_active`

```vue
<template #itemImg_active>
  <img src="./assets/img/TabBar/home_active.png" />
</template>
```

第三个插槽 --  图片下的文字 `  soltName #itemFont`

```vue
<template #itemFont>
  <span>首页</span>
</template>
```



```vue
<TabBar>
  <TabBarItem path="/home">
    <template #itemImg>
      <img src="./assets/img/TabBar/home.png" />
    </template>
    <template #itemImg_active>
      <img src="./assets/img/TabBar/home_active.png" />
    </template>
    <template #itemFont>
      <span>首页</span>
    </template>
  </TabBarItem>
  <TabBarItem path="/category">
    <template #itemImg>
      <img src="./assets/img/TabBar/category.png" />
    </template>
    <template #itemImg_active>
      <img src="./assets/img/TabBar/category_active.png" />
    </template>
    <template #itemFont>
      <span>分类</span>
    </template>
  </TabBarItem>
  <TabBarItem path="/cart">
    <template #itemImg>
      <img src="./assets/img/TabBar/cart.png" />
    </template>
    <template #itemImg_active>
      <img src="./assets/img/TabBar/cart_active.png" />
    </template>
    <template #itemFont>
      <span>购物车</span>
    </template>
  </TabBarItem>
  <TabBarItem path="/user">
    <template #itemImg>
      <img src="./assets/img/TabBar/user.png" />
    </template>
    <template #itemImg_active>
      <img src="./assets/img/TabBar/user_active.png" />
    </template>
    <template #itemFont>
      <span>我的</span>
    </template>
  </TabBarItem>
</TabBar>
```

| prop        | 备注                   | 类型     |
| ----------- | ---------------------- | -------- |
| path        | 必填，跳转的路由地址   | String   |
| activeColor | 可选，活跃状态时的颜色 | 默认红色 |

