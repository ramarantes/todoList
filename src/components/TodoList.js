import React from 'react'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'
import {toggleTodo, dropTodo}  from '../actions/'

class TodoList extends React.Component {
    render(){
        return <table className="table table-sm table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="descrição">descrição</th>
                <th scope="descrição">Action</th>
            </tr>
        </thead>
        <tbody>
            {this.props.todos.map(p => <TodoListItem key={p.id} obj={p} toggle={this.props.vaiteia} drop={this.props.drop}/>)}
        </tbody>
        </table>
    }
}

const mapStateToProps = ({todos}) => ({
    todos
})
const mapDispatchToProps = dispatch => ({
    vaiteia: e => dispatch(toggleTodo(e)),
    drop: e => dispatch(dropTodo(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)