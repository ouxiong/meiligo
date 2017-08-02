<template>
 <div>
      <classify-list-item :itemData="itemData"></classify-list-item>
       
 </div>
</template>

<script>
import ClassifyListItem from './ClassifyListItem'
import jsonp from "jsonp"
export default {
  data(){
      return{
            pid:null,
            itemData:[]
            
      }
  },
  components:{
        ClassifyListItem
  },
  mounted(){
      //   console.log(this.$route.params.pid)
      this.pid=this.$route.params.pid;
      this.getData();
  },
  methods:{
      getData(){
            var that = this;
          jsonp('https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&pid='+ this.pid,{callback:'jsonp1',},function(err, data){
              if(data){
                  console.log(data)
                  // console.log(data.value.category_1.list)
                  // console.log(data.value.category_2.list)
                  that.itemData.push((data.value.category_1)?(data.value.category_1):'');
                  that.itemData.push((data.value.category_2)?(data.value.category_2):(data.value.category_1));
                   console.log(that.itemData)
                  
                 
                  

              }
          })
      }
  }
}

</script>

<style lang="scss">
	
	
</style>