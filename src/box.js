import React from 'react'
import { DragSource } from 'react-dnd'

import ItemTypes from './item-types'

const { string, func, bool } = React.PropTypes

const styles = {
  root: {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left'
  }
}

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`
      )
    }
  }
}

function Box(props) {
  const { isDragging, connectDragSource } = props
  const { name } = props
  const opacity = isDragging ? 0.4 : 1

  return connectDragSource(
    <div style={{ ...styles.root, opacity }}>
      {name}
    </div>
  )
}

Box.propTypes = {
  connectDragSource: func.isRequired,
  isDragging: bool.isRequired,
  name: string.isRequired
}

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Box)
