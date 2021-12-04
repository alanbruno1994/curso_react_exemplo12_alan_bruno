import {createStore} from 'redux'

type Action={
    type:string
    payload:any
}

export type State={
    name:string
    counter:number
}

const initialState:State={
    name:'',
    counter:0
}

//Deve-se tem a funcao reducer para fazer a atualizacao de estado
//A funcao sempre retorna um novo estado
//Precisa do initialState para que ele seja pego pela primera vez
const reducer=(state:State=initialState,action:Action)=>
{
    switch(action.type){
        case 'increment':
            //nao e corretor fazer isso:
            //return state.counter++
           return {...state,counter:state.counter+1}
        case 'decrement':
            return {...state,counter:state.counter-1}   
        case 'initialCounter':
            return {...state,counter:action.payload}    
        case 'name':
            return {...state,name:action.payload}  
        default:
            return state      
    }
}
//Aqui tem que criar esse store
const store=createStore(reducer)
export default store