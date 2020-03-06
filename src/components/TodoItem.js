import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
      return {
          background: '#f6f6f6',
          padding: '10px',
          borderBottom: '1px #ccc solid',
          //si completed = true -> line-through else none
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
  }


    render() {
        const { id, title }  = this.props.todo;
        return (
            // ajouté un espace {' '}
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff5555',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
