/**
 * Created by cag on 2017/2/26.
 */
import Vue from 'vue';
import Index from './components/index.vue';

require('./components/common.css');

new Vue({
    el:'#div1',
    data:{
        msg:'hello vue'
    }
});