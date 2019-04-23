import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export default ({ obj, toggle, drop }) => {
    const style = {textDecoration: obj.completed ? 'line-through' : 'none'};

    const StyledTd = styled.td`
        cursor: pointer;
    `
    const cursorStyle = {
        cursor: 'pointer'
    }

    return <tr style={style} >
            <StyledTd scope="row" onClick={() => toggle(obj.id)}>
            <input type="checkbox"  aria-label="Checkbox for following text input" checked={obj.completed} onChange={() => console.log('checked')} />
            </StyledTd>
            <StyledTd onClick={() => toggle(obj.id)}>{obj.todo}</StyledTd>
            <td onClick={() => drop(obj.id)}><FontAwesomeIcon icon="trash" style={cursorStyle}/> </td>
        </tr>
}