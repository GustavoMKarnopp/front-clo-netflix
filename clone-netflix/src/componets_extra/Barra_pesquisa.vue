<template>
    <div>
      <div class="search-box">
        <i class="fa fa-search search-box__icon"></i>
        <input class="search-box__input" placeholder="Título, personas, generos"/>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },  

    mounted(){
      var searchIcon = document.getElementsByClassName("search-box__icon")[0];
      var searchBox = document.getElementsByClassName("search-box")[0];

      searchIcon.addEventListener("click", activateSearch);

      function activateSearch() {  
        searchBox.classList.toggle("active");
      }
    }
}
</script>
<style scoped>
body {
  background: rgb(245, 245, 245);
}

.search-box {
  position: relative;
  width: 250px;
}
.search-box .search-box__input {
  outline: none;
  background: rgba(228, 8, 8, 0.85);
  border: solid 1px rgba(255, 255, 255, 0.85);
  box-sizing: border-box;
  padding: 7px 14px 7px 40px;
  width: 0%;
  font-size: 13px;
  color: #fff;
  opacity: 0;
  transition: ease width 1s, ease opacity 1s;
  float: right;
}
.search-box .search-box__icon {
  position: absolute;
  top: 7px;
  color: white;
  z-index: 10;
  cursor: pointer;
  right: 12px;
  transition: ease transform 1s;
  transition-delay: 50ms;
}
.search-box.active .search-box__icon {
  transform: translateX(-214px);
}
.search-box.active .search-box__input {
  opacity: 1;
  width: 100%;
}

</style>