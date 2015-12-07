import React from 'react'
import { DropTarget } from 'react-dnd'

import ItemTypes from './item-types'

const { bool, func } = React.PropTypes

const styles = {
  root: {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left'
  }
}

const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
  }
}

function Dustbin(props) {
  const { canDrop, isOver, connectDropTarget } = props
  const isActive = canDrop && isOver

  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return connectDropTarget(
    <div style={{ ...styles.root, backgroundColor }}>
      {isActive ?
        'Release to drop' :
        'Drag a box here'
      }
    </div>
  )
}

Dustbin.propTypes = {
  connectDropTarget: func.isRequired,
  isOver: bool.isRequired,
  canDrop: bool.isRequired
}

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Dustbin)
