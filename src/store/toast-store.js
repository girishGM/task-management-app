import { decorate, observable, action } from "mobx";
import { create, persist } from 'mobx-persist';

class ToastStore {
   toastMessage = '';
   toastMessageType = '';
   toastMessageId = '';

    showToastMessage(toastMessage, toastMessageType, toastMessageId){
        this.toastMessage = toastMessage;
        this.toastMessageType = toastMessageType;
        this.toastMessageId = toastMessageId;
    }

    clearData(){
        this.toastMessage = '';
        this.toastMessageType = '';
        this.toastMessageId = '';
    }
}


decorate(ToastStore, {
    toastMessageType: [persist, observable],
    toastMessage: [persist, observable],
    toastMessageId: [persist, observable],
    showToastMessage: action
})

var toastStore = new ToastStore();
export default toastStore;

