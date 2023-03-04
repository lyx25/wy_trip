<template>
	<div class="tabbar">
		<!-- <template v-for="(item,index) in tabbarData">		
			<div class="tabbar-item" >
				<img :src="getAssetURL(item.image)" alt="">
				<span class="text">{{ item.text }}</span>
			</div>
		</template> -->
		
	
		    <!-- <template v-for="(item, index) in tabbarData">
		      <div 
		        class="tabbar-item" 
		        :class="{ active: currentIndex === index }"
		        @click="itemClick(index, item)"
		      >
		        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
		        <img v-else :src="getAssetURL(item.imageActive)" alt="">
		        <span class="text">{{ item.text }}</span>
		      </div>
		    </template> -->
				
				<van-tabbar v-model="currentIndex" active-color="#ff9854">
				      <template v-for="(item, index) in tabbarData">
				        <van-tabbar-item :to="item.path">
				          <template #default>
				            <span>{{ item.text }}</span>
				          </template>
				          <template #icon>
				            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
				            <img v-else :src="getAssetURL(item.imageActive)" alt="">
				          </template>
				        </van-tabbar-item>
				      </template>
				    </van-tabbar>
		  

		<!-- <div class="tabbar-item">
			<img src="@/assets/img/tabbar/tab_home.png" alt="">
			<span class="text">首页</span>
		</div>
		<div class="tabbar-item">
			<img src="@/assets/img/tabbar/tab_favor.png" alt="">
			<span class="text">收藏</span>
		</div>
		<div class="tabbar-item">
			<img src="@/assets/img/tabbar/tab_order.png" alt="">
			<span class="text">订单</span>
		</div>
		<div class="tabbar-item">
			<img src="@/assets/img/tabbar/tab_message.png" alt="">
			<span class="text">消息</span>
		</div> -->
	</div> 
</template>

<script setup>
	
	// import tabbarData from "@/assets/data/tabbar.js"
	// import { getAssetURL } from "@/utils/load_assets.js"
	// import { ref } from "vue";
	// import { useRouter } from "vue-router";
	
	// const currentIndex = ref(0)
	// const router = useRouter()
	// const itemClick = (index, item) => {
	//   currentIndex.value = index
	//   router.push(item.path)
	// }
	
	import tabbarData from "@/assets/data/tabbar.js"
	import { getAssetURL } from "@/utils/load_assets.js"
	import { ref } from "vue";
	
	const currentIndex = ref(0)
	
</script>

<style lang="less" scoped>
	// .tabbar{
	// 	position: fixed;
	// 	bottom: 0;
	// 	left: 0;
	// 	right: 0;
	// 	height: 50px;
	// 	display: flex;
	// 	border-top: 1px solid #f3f3f3;
	// 	.tabbar-item{
	// 		flex: 1;
	// 		display: flex;
	// 		flex-direction: column;
	// 		justify-content: center;
	// 		align-items: center;
	// 		&.active{
	// 			color: var(--primary-color);
	// 		}
	// 		img{
	// 			width: 36px;
	// 		}
	// 		.text{
	// 			font-size: 12px;
	// 			margin-top: 2px;
	// 		}
	// 	}
	// }
	
	.tab-bar {
	  // 局部定义一个变量: 只针对.tab-bar子元素才生效
	  // --van-tabbar-item-icon-size: 30px !important;
	
	  // 找到类, 对类中的CSS属性重写
	  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
	  :deep(.van-tabbar-item__icon) {
	    font-size: 50px;
	  }
	
	  img {
	    height: 26px;
	  }
	}
</style>