import Vue from "vue"
import { Toast, Card, Tag, Button, Field, RadioGroup, Radio, Uploader, Form, Icon } from "vant"
import 'vant/lib/index.css';

Vue.prototype.$toast = Toast
Vue.use(Field);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Uploader);
Vue.use(Form);
Vue.use(Icon);