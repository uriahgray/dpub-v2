<template>
      <div class="toggle w-full">
       <div  class="mt-1 mb-1 border-t-2 py-2 border-black flex flex-wrap items-start">      
        <img v-if="thumbnail" class="w-full md:w-1/3 block pr-2 mb-2 md:mb-0 br"
          :src="thumbnail.url">   
        <span class="title whitespace-pre">{{title}}</span>       
        <div @click="active = !active" :class="{ activeBtn: active }" class="staticBtn ml-auto ff-s fs-1 cursor-pointer text-black">Read</div>
       </div>
       <div v-html="content.html" :class="{ activeDesc: active }" class="border-t-2 border-gray py-2 p-rules img-rules whitespace-pre-line hidden"></div> 
      </div>
</template>

<script>
export default {
  name: 'ResourcesBlock',
  props: {
    title: String,
    content: Object,
    thumbnail: Object
  },
data() {
    return {
        active: false
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.staticBtn:before{
  content:'▼ '
}
.activeBtn:before{
  content:'▲ '
}
.activeBtn {

}
.activeDesc {
  display:block !important;
}

img.br {
  /* border-radius: 1.5rem; */
}
</style>
