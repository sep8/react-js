import React from 'react';
import styled from "@emotion/styled";
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import { useForkRef } from '../utils'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import UpdateIcon from '@mui/icons-material/Update';

const defaultProps = {
  tag: 'div',
  mode: 'code',
  allowedModes: ['tree', 'code'],
  history: false,
  search: true,
  navigationBar: false,
  statusBar: false,
  sortObjectKeys: false,
}

const Root = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  > div {
    height: 100%;
    width: 100%;
  }
  > button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

export const JsonEditor = React.forwardRef((props, ref) => {
  const { defaultValue, onChange, onUpdate } = props
  const [active, setActive] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const editorRef = React.useRef(null)
  const handleRef = useForkRef(ref, editorRef)

  const handleChange = () => {
    const config = editorRef.current.jsonEditor.get()
    onChange?.(config)
    setActive(false)
  }

  return (<Root spacing={2} direction="column" className="json-editor">
    <Editor ref={handleRef} value={defaultValue} onChange={() => setActive(true)} onError={() => setDisabled(true)} {...defaultProps} />
    <IconButton color={active ? 'primary' : 'default'} disabled={disabled} title="Update" size="large" onClick={handleChange}>
      <UpdateIcon />
    </IconButton>
  </Root>)
})