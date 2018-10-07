<template>
  <div id="app">
    <div class="toggle" id="toggle" to="/skin" @click="flag=!flag">
      <img src="./assets/img/button.png" alt="">
    </div>

    <transition>
      <div class="nav" id="nav" v-show="flag">
        <div class="container">
          <ul class="nav-list" id="nav-list">
            <li class="item" v-for="item in imgList" :key="item.id" @click="iscur=item.id,click(item.key)" @mouseover="mouseOver(item.key)" @mouseout="mouseOut(countTab)">
              <div :class="{tips: iscur == item.id}"></div>
              <img :src="item.src" alt="">
            </li>
          </ul>
        </div>
        <div class="arr">
          <a href="javascript:;" id="arrLeft" @click="arrLeft"><i></i></a>
          <a href="javascript:;" id="arrRight" @click="arrRight"><i></i></a>
        </div>
      </div>
    </transition>

    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Skin1 from "./components/Skin1";
import Skin2 from "./components/Skin2";
import Skin3 from "./components/Skin3";
import Skin4 from "./components/Skin4";
import Skin5 from "./components/Skin5";
import Skin6 from "./components/Skin6";
import Skin7 from "./components/Skin7";
import Skin8 from "./components/Skin8";
import Skin9 from "./components/Skin9";
import Skin10 from "./components/Skin10";

export default {
  name: "App",
  data: () => ({
    flag: false,
    currentTab: "Skin1",
    iscur: 1,
    countTab: "Skin1",
    current: 0,
    // 静态图片放在static目录下，v-for 动态加载图片路径就不会遇到问题
    imgList: {
      skin1: { id: 1, src: "../static/img/1.jpg", key: "Skin1" },
      skin2: { id: 2, src: "../static/img/2.jpg", key: "Skin2" },
      skin3: { id: 3, src: "../static/img/3.jpg", key: "Skin3" },
      skin4: { id: 4, src: "../static/img/4.jpg", key: "Skin4" },
      skin5: { id: 5, src: "../static/img/5.jpg", key: "Skin5" },
      skin6: { id: 6, src: "../static/img/6.jpg", key: "Skin6" },
      skin7: { id: 7, src: "../static/img/7.jpg", key: "Skin7" },
      skin8: { id: 8, src: "../static/img/8.jpg", key: "Skin8" },
      skin9: { id: 9, src: "../static/img/9.jpg", key: "Skin9" },
      skin10: { id: 10, src: "../static/img/10.jpg", key: "Skin10" }
    }
  }),
  created() {},
  methods: {
    show(tab) {
      this.currentTab = tab;
    },
    click(tab) {
      this.countTab = tab;
      this.show(tab);
    },
    mouseOver(tab) {
      this.show(tab);
    },
    mouseOut(tab) {
      this.show(tab);
    },
    arrLeft() {
      var container = document.getElementsByClassName("container")[0];
      var ulBox = container.children[0];
      var liBox = ulBox.children[0];
      var imgWidth = liBox.offsetWidth + 20;
      if (this.current == 0) {
        ulBox.style.left = 0;
      } else {
        this.current -= imgWidth;
        ulBox.style.left = -this.current + "px";
      }
    },
    arrRight() {
      var container = document.getElementsByClassName("container")[0];
      var ulBox = container.children[0];
      var liBox = ulBox.children[0];
      var imgWidth = liBox.offsetWidth + 20;
      if (this.current < 720) {
        // 720 = 2000 - 1060 -180 -20*2
        this.current += imgWidth;
        ulBox.style.left = -this.current + "px";
        console.log(this.current);
      }
    }
  },
  components: {
    Skin1,
    Skin2,
    Skin3,
    Skin4,
    Skin5,
    Skin6,
    Skin7,
    Skin8,
    Skin9,
    Skin10
  }
};
</script>

<style>
body {
  overflow: hidden;
}
.bg {
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  font-size: 12px;
  font-weight: 600;
}
.toggle {
  position: absolute;
  top: 0;
  left: 36px;
  z-index: 10;
  cursor: pointer;
}

.nav {
  width: 100%;
  height: 140px;
  position: absolute;
  top: 0;
  z-index: 9;
  background: rgba(255, 255, 255, 0.8);
}

#arrLeft,
#arrRight {
  position: absolute;
  width: 40px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 26px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 2px;
  z-index: 999;
}
#arrLeft:hover,
#arrRight:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
#arrLeft i,
#arrRight i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23px;
  height: 37px;
  z-index: 2;
  background: url(../static/img/tips.png) no-repeat;
}
#arrLeft {
  left: 150px;
}
#arrLeft i {
  background-position: 0 0;
}
#arrRight {
  right: 150px;
}
#arrRight i {
  background-position: -26px 0;
}
.nav .container {
  width: 1060px;
  height: 140px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
}
.nav .nav-list {
  width: 2000px;
  position: absolute;
}
.nav .nav-list .item {
  width: 160px;
  height: 100px;
  background: #f7f7f7;
  border-radius: 10px;
  float: left;
  margin: 20px 20px 0 0;
  cursor: pointer;
  position: relative;
}
.nav .nav-list .item img {
  width: 160px;
  height: 100px;
}
.nav .nav-list .item:last-of-type {
  margin-right: 0;
}
.nav .nav-list .item:hover:after {
  content: "";
  width: 160px;
  height: 100px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.nav .nav-list .item .tips {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 30px;
  height: 30px;
  background: url(../static/img/tips.png) no-repeat -92px -2px;
  text-align: center;
}

.v-enter,
.v-leave-to {
  top: -140px;
}
.v-enter-active,
.v-leave-active {
  transition: top 1s ease;
}
</style>
