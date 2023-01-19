<template>
   <div>
    
    <nav>
      <ul style="padding: 10px !important;" class="teste">
        <li>
          <button 
            type="button" 
            aria-haspopup="true" 
            aria-expanded="true" 
            aria-controls="dropdown1"  
          >
          <div style="display: flex; align-items: center;">
            <input type="image" :src="`${avatar.avatar}`" alt="" width="50">
            <span style="margin: 15px;" class="arrow"></span>   
          </div>
          </button>
          <ul class="dropdown " id="dropdown1">
            <div class="dropdown22">
              <li><a href="#" style="color: white;">USER 1</a></li> 
              <li><a href="#" style="color: white;">USER 2</a></li>
              <li><a href="#" style="color: white;">USER 3</a></li>
              <li><a href="#" style="color: white;">GERENCIAR PERFIS</a></li>
              <li><a href="#" style="color: white;">Transferir perfil</a></li>
              <li><a href="#" style="color: white;">Contra</a></li>
              <li><a href="#" style="color: white;">Centrel de ajuda</a></li>
            </div>
            <div>
              <hr color="white">
            </div>
            <div>
              <ul>
                <li><a href="#" style="color: white;">Sai da netflix</a></li>
              </ul>
            </div>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script >
export default{
    data(){
        return{
          avatar: null
        }
    },
    mounted(){
        if (typeof sessionStorage.session_user_select !== "undefined") {
            let obj = JSON.parse(sessionStorage.session_user_select);
            this.avatar = obj
        }
    }
}
</script>
<style >
/* .Avatar{
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 10vw;
    max-height: 10px;
    max-width: 10px;
    min-height: 40px;
    min-width: 40px;
    position: relative;
    text-decoration: none;
    width: 10vw;
} */


ul li {
   list-style: none;
   font-size: 18px;
}

ul li button {
    font-size: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
}

ul li a {
   display: block;
   color: inherit;
   text-decoration: none;
}

/* toggle main dropdown */

.dropdown {
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
}
.dropdown22 {
padding: 15px !important;
}
.arrow {
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  vertical-align: middle;
  border-left: 0.15em solid currentColor;
  border-bottom: 0.15em solid currentColor;
  transform: rotate(-45deg);
  transition: transform 100ms ease-in-out;
}

li:focus-within > button > .arrow {
  transform: rotate(-225deg);
  margin-top: 4px;
}

/* MEDIA QUERIES  */
@media (min-width: 640px) {
  
  .header-content {
    display: flex;
  }
  
  label, input[type="checkbox"] {
    display: none;
  }
  
  ul li {
    position: relative;
    font-size: 14px;
  }
  
  ul li a:hover,
  ul li button:hover {
    background-color: #03030300;
  }
  
  .dropdown {
    position: absolute;
    right: 0;
    left: auto;
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
    z-index: 99;
    min-width: 10rem;
    padding: 0;
    background-color: rgb(0, 0, 0);
    border-radius: 0 0 0.5rem 0.5rem; 
  }
  
  ul li:hover .dropdown {
    height: 135px;
  }
  
  ul li:hover > button > .arrow {
    transform: rotate(-225deg);
    margin-top: 4px;
  }
}
</style>