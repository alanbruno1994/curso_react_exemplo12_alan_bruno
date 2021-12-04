import {useSelector, useDispatch} from 'react-redux'
import {State} from '../store/index'
//O useSeletor se usa para pegar o dado do estado atual
//useDispatch se usa para que la no index da pasta store se use a funcao reducer 
//para enfirm atualizar o estado
export default function Name()
{
    const name=useSelector((state:State)=>state.name)//Aqui esta pegando o valor name do estado atual
    const dispatch=useDispatch()
    //Em dispatch precisa passar o type e o payload. O type serve para dizer o que vai atualizar e payload e o conteudo que vai
    //atualizar
    return <div>
        <input type='text' value={name} onChange={event=>dispatch({type:'name',payload:event.target.value})}/>
        <p>{name}</p>
    </div>
}