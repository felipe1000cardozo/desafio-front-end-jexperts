import { createStore } from "redux";

import reducer from "./modules/users/reducer";

const store = createStore(reducer);

export default store;
