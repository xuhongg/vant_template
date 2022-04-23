import Vue from 'vue';

import {
    Calendar,
    Toast,
    Picker,
    Cell,
    CellGroup,
    List,
    Button,
    Icon,
    Search,
    Dialog,
    Tab,
    Tabs,
    IndexBar,
    IndexAnchor,
    Divider,
    TreeSelect,
    Image as VanImage,
    Field,
    Popup,
    Collapse,
    Overlay,
    CollapseItem,
    DatetimePicker,
    Swipe,
    SwipeItem,
    Switch
} from 'vant';

Vue.use(Toast)
    .use(Cell)
    .use(Switch)
    .use(Calendar)
    .use(DatetimePicker)
    .use(Overlay)
    .use(Picker)
    .use(Swipe)
    .use(SwipeItem)
    .use(CellGroup)
    .use(List)
    .use(Button)
    .use(Dialog)
    .use(Icon)
    .use(Search)
    .use(Tab)
    .use(Tabs)
    .use(IndexBar)
    .use(IndexAnchor)
    .use(Divider)
    .use(TreeSelect)
    .use(VanImage)
    .use(Field)
    .use(Popup)
    .use(Collapse)
    .use(CollapseItem);
