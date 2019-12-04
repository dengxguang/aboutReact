import React from 'react';
import ShowArea from './ShowArea.jsx'
import Buttons from './Button.jsx'
import {Color} from './color.js'

function Index() {
  return (
    <div>
      <Color>
        <Buttons />
        <ShowArea />
      </Color>
    </div>
  )
}

export default Index;