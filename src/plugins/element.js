import Vue from 'vue'
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Menu,
  Submenu,
  MenuItem,
  Upload,
  Table,
  TableColumn,
  Progress,
  Tree,
  Slider,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Input,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Progress)
Vue.use(Tree)
Vue.use(Slider)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message
