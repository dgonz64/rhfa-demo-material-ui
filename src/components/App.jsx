import React, { useEffect, useRef, useReducer } from 'react'
import AceEditor from 'react-ace'
import { NotificationContainer } from 'react-notifications'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/theme-github'

import { editing } from '../ducks'

import { DemoForm } from './DemoForm'
import { DemoConfig } from './DemoConfig'
import { formCode } from './formCode'
import { Panel } from './Panel'
import { Button } from './Button'

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import 'react-notifications/lib/notifications.css'
import '../globals.css'

const width = 230

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      minWidth: width,
      width
    },
    '& .MuiSlider-root': {
      minWidth: width,
      width
    },
    '& .MuiCard-root': {
      maxWidth: '90%'
    }
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const handleChange = (changeCode, code) => {
  changeCode(code)
}

export const App = () => {
  const sampleEl = useRef(null)
  const classes = useStyles()

  const [ { code, edit, config }, dispatch ] = useReducer(
    editing.reducer,
    editing.initial
  )
  const actions = editing.mapActions(dispatch)

  useEffect(() => {
    const { editor } = sampleEl.current

    editor.setOptions({
      readOnly: true,
      highlightActiveLine: false,
      highlightGutterLine: false
    })

    editor.renderer.$cursorLayer.element.style.display = 'none'
  })

  const updateRender = () => {
  }

  const handleSubmit = (config) => {
    actions.fix(config)
  }

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <h3>
          <a href="https://github.com/dgonz64/rhfa-material-ui">
            react-hook-form-auto demo with Material-UI
          </a>
        </h3>
      </Grid>
      <Grid item xs={6}>
        <Panel
          header="Schema (edit and see the results in real time)"
          noMargin
        >
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={handleChange.bind(null, actions.changeCode)}
            value={edit}
            width="100%"
            name="editor"
          />
          <p><small>
            Editor thanks to{' '}
            <a href="https://github.com/securingsincity/react-ace">
              React-Ace
            </a>
          </small></p>
        </Panel>
      </Grid>
      <Grid item xs={6}>
        <Panel header="Form parameters">
          <DemoConfig
            onSubmit={handleSubmit}
            config={config}
          >
            <div>
              <Button type="submit">
                Update
              </Button>
            </div>
          </DemoConfig>
        </Panel>
        <Panel header="Form element" noMargin>
          <AceEditor
            mode="jsx"
            theme="github"
            value={formCode(config)}
            name="sample"
            maxLines={5}
            readOnly
            ref={sampleEl} 
          />
        </Panel>
        <Panel header="Generated form" borderType="primary">
          <DemoForm code={code} config={config} />
        </Panel>
      </Grid>
      <NotificationContainer />
    </Grid>
  )
}
