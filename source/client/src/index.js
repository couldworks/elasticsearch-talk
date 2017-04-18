import storeFactory from "./store";
import { AllNews } from "./actions";

const store = storeFactory();

store.dispatch(AllNews());




