const redux = require('redux')
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE'

function buyCake(){ // action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


const initialState ={
    numOfCakes: 10
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,   
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial state',store.getState());

const unsubcribe = store.subscribe(()=> console.log('Update state',store.getState())) 
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubcribe();
console.log('new');store.subscribe(()=> console.log('Update state',store.getState())) 
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubcribe();