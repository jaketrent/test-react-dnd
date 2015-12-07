import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Box from './box'
import Dustbin from './dustbin'

const styles = {
  bin: {
    overflow: 'hidden',
    clear: 'both'
  }
}

function Container(props) {
  return (
    <div>
      <div style={styles.bin}>
        <Dustbin />
      </div>
      <div style={styles.bin}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(Container)
