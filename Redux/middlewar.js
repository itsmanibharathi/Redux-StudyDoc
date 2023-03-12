const redux = require('redux')
const redixLogger = require('redux-logger')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = redixLogger.createLogger();
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

function buyCake(){ // action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIce(){ // action
    return {
        type: BUY_ICE,
        info: 'First redux action'
    }
}


const initialCakeState ={
    numOfCakes: 10
}
const initialIceState ={
    numOfIce: 20
}


const cakeReducer = (state = initialCakeState, action ) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,   
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}
const iecReducer = (state = initialIceState, action ) => {
    switch(action.type){
        case BUY_ICE: return {
            ...state,   
            numOfIce: state.numOfIce -1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iecReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial state',store.getState());

const unsubcribe = store.subscribe(()=> console.log('Update state',store.getState())) 
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyCake())
store.dispatch(buyIce())
unsubcribe();

console.log("data",iecReducer);
