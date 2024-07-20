<template>
  <div id="app" class="bg-white">
    <router-view/>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import gql from "graphql-tag";

export default defineComponent({
  name: 'App',
  components: {
    
  },
  data() {

  },
  watch:{
    '$route'() {
      // Close the menu whenever the route changes
      
    },

  },   
  mounted() {

  },
  computed: {
          
  },    
  apollo: {
    studio: {
      query() {
        return gql`
          query GetSiteOption {
            siteOption(where: {id: "clotg8w8sse6x0b2ooiw1g2sh"}) {
              studio {
                id
                summary
                title
                credits {
                  html
                }
                singleBroadcast {
                  url
                }
                articles {
                  slug
                  thumbnail {
                    url(transformation: {image: {resize: {width: 150}}})
                  }
                }              
                broadcasts {
                  title
                  length
                  slug
                  people {
                    firstName
                    lastName
                  }
                  thumbnail {
                    url(transformation: {image: {resize: {width: 200}}})
                  }                
                }             
              }
            }
          }
        `;
      },
      update: data => data.siteOption?.studio,
      error(error) {
        console.error('Error fetching studio data:', error);
      },
    }
  },
});
</script>

<style>

* {
	box-sizing:border-box;
}

html {
    font-size: 4.5vw;
    line-height: 1.2;
    font-family: sans-serif;
    font-weight: bold;
    letter-spacing: -0.01em;
}

@media (min-width: 1024px) {
  html {
      font-size: 2vw;
      line-height: 1.1;
  }
}


a:hover {
  font-family: 'fungal';
}

#app {

}

::selection {
  @apply bg-yellow;
}

#nav {
  
}

#nav a:hover {
  
}

#nav a.router-link-exact-active {
  
}

.ff-e {
  
}

@font-face {
  
}

.close {
  width: 32px;
  height: 32px;
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 3px;
  background-color: #000;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.fs-1 {

}

.fs-2 {
	
}

.bff {
	backdrop-filter: blur(5px);
  }

.p-rules p {
	
}

.p-rules a {
  color:gray;
	border-bottom: 2px solid gray;
}

.p-rules a em {
  color:gray;
	border-bottom: 2px solid gray;
  font-weight: normal;
}

.p-rules em {
  font-weight: normal;
}

.p-rules h6 {
	font-size: 0.7em;
}

.p-rules ul {
	
}

.p-rules li {
	
}

.img-rules img {
  max-height: 100vh;
  width: auto;
	margin-left: auto;
  margin-right: auto;
  @apply my-8
}

.yt iframe {
	height:475px;
}

.img-rules iframe {
	@apply bg-gray my-4 mx-auto rounded max-h-screen w-3/4 max-w-full md:max-w-screen-md items-center flex;
}
blockquote {
	@apply pl-32 mb-4
}

p + h1 {
  @apply mt-4
}

h1 {
  color:gray;
}

h2 {

}

h3 {

}

h4 {

}

h6 {

}



code {

}

</style>


