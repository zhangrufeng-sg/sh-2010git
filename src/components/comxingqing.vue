<template>
  <div>
    <!-- <comloading v-if='flag'></comloading> -->
    <loading v-if="!isflag"></loading>
    
   <div v-if="isflag">
        <div class="item" v-for="(item,index) in list" :key="index">
      <div class="left">
        <img :src="item.poster" alt="">
      </div>
      <div class="middle">
        <div>{{item.name}}</div>
        <div>
          <span>观众评分</span>
          <span class="backcolor">{{item.runtime}}</span>
        </div>
        <div>主演：{{item.director}}</div>
        <div>{{item.nation}} | {{item.runtime}}分钟</div>
      </div>
      <div class="right">
        <span>购票</span>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import loading from "@/components/loading.vue";
export default {
  //组件名字
  name: "filmlist",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: { loading },
  // vue数据集中管理
  data() {
    return {
      value: "1",
      flag: true,
    };
  },
  //方法 函数写这里
  methods: {},
  //计算属性
  computed: {
    isflag() {
        console.log(1)
      return this.list[0];
    },
  },
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
    console.log("我来到了components的comfilmlist mounted 里面");
    console.log("this.list", this.list1);
    if (this.list.length > 0) {
      this.flag = false;
    }
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>

<style lang="scss" scoped>
.backcolor{
    color: red;
}
    .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
        width: 77px;
        height: 100px;
        margin-left: 20px;
        img {
            width: 66px;
            height: 100%;
        }
    }

    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;

        div:nth-of-type(1) {
            color: #191a1b;
            font-size: 16px;
        }

        div:nth-of-type(3) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .right {
        width: 15%;
        display: flex;
        align-items: center;
        margin-right: 20px;

        span {
            border: 1px solid #ff5f16;
            background: white;
            color: #ff5f16;
            border-radius: 2px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            width: 50px;
            text-align: center;
        }
    }
   
}
</style>
