<template>
	<div>
		<router-view></router-view>
		<div>
			<TabBar>
				<TabBarItem path="/user/list" activeColor="#409EFF">
					<template #itemImg>
						<span class="iconfont icon-square1"></span>
					</template>
					<template #itemImg_active>
						<span class="iconfont icon-square1 active"></span>
					</template>
					<template #itemFont>
						<span>事件列表</span>
					</template>
				</TabBarItem>
				<TabBarItem path="/user/up" activeColor="#409EFF">
					<template #itemImg>
						<span class="iconfont icon-fabu"></span>
					</template>
					<template #itemImg_active>
						<span class="iconfont icon-fabu active"></span>
					</template>
					<template #itemFont>
						<span>事件上报</span>
					</template>
				</TabBarItem>
				<TabBarItem path="/user/profile" activeColor="#409EFF">
					<template #itemImg>
						<span class="iconfont icon-profile"></span>
					</template>
					<template #itemImg_active>
						<span class="iconfont icon-profile active"></span>
					</template>
					<template #itemFont>
						<span>个人中心</span>
					</template>
				</TabBarItem>
			</TabBar>
		</div>
	</div>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBar-item";
export default {
	name: "User",
	components: {
		TabBar,
		TabBarItem,
	},
};
</script>

<style lang="less" scoped>
.active {
	color: #409eff;
}
</style>
