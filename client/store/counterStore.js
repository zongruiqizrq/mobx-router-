import {observable, action, useStrict} from 'mobx';
import { Provider, observer } from 'mobx-react'
useStrict(true);

class counterStore {
@observable num = 1;

@action add(){
    this.num ++;
}

@action minus(){
    this.num --;
}
}

export default observer(new counterStore());
