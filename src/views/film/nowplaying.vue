<template>
  <div>
     <comxingqing  :list="list1"></comxingqing>
     <!-- :key="'film'+list1.length" :list1="list1"  :type='type' -->
  </div>
      
</template>



<script>
import {nowplayingListData} from '@/api/api'
import comxingqing from "@/components/comxingqing.vue"
export default {
    //组件名字
  name: "nowplaying",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    color:{
        type: String,
        default:'#000'
    }
  },
  //组件注册
  components: {
   comxingqing
    },
  // vue数据集中管理
  data() {
    return {
      value: "1",
      list1:[],
      page:1,
      type:1
    };
  },
  //方法 函数写这里
  methods: {},
 //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
      toUpcase(value) {
          return value ? value.toUpperCase():''
      },
  },
//以下是生命周期 
//组件创建之前  
  beforeCreate() {
    
  },
  //组件创建之后
  created() {

  },
  //页面渲染之前
  beforeMount() {

  },
  //页面渲染之后
  async mounted() {
    console.log('我是nowplaying里面的mounted')
    //以下两部 一个是表面 一个是内在引入过后的 面貌 可以把http 这个方法axios请求揪出来
    let ret = await nowplayingListData(this.page)
   // let ret = await http.get(nowPlayingListUri +page)
    console.log(ret)
    this.list1 = ret.data.data.films

  },
  //页面销毁之前
  beforeDestroy() {

  },
  //页面销毁之后
  destroyed() {

  },
  //页面视图数据更新之前
  beforeUpdate() {

  },
  //页面视图数据更新之后
  updated() {

  },
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next(vm => {});
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
  }
};
</script>





<style lang="scss" scoped>

</style> 
 