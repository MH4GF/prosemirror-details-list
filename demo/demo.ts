import { exampleSetup } from 'prosemirror-example-setup'
import { Schema, DOMParser } from 'prosemirror-model'
import { nodes, marks } from 'prosemirror-schema-basic'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

const schema = new Schema({
  nodes,
  marks,
})

const dom = document.querySelector('#content')
if (!dom) {
  throw new Error('No #content element found')
}

const doc = DOMParser.fromSchema(schema).parse(dom)
const state = EditorState.create({
  doc,
  plugins: exampleSetup({ schema }),
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.view = new EditorView(document.querySelector('#editor'), { state })