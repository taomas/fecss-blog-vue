let editor = {}
let options = {
  textSelection: '',
  defaultText: '',
  replaceText: '',
  replaceType: '',
  changeText: '',
  rangeStart: 1,
  rangeEnd: 5,
  element: ''
}

let defaultString = {
  blod: '**',
  boldexample: '**加粗文字**',

  italic: '*',
  italicexample: '*斜体文字*',

  link: '',
  linkexample: '[链接](http://example.com/)',

  quote: '>',
  quoteexample: '>引用文字',

  hr: '---'
}

let doc = document;

editor.getSelected = (element) => {
  return element.value.substr(element.selectionStart, element.selectionEnd - element.selectionStart)
}

editor.setRange = (element) => {
  let value = element.value
  let index = value.indexOf(option.replaceText)
  element.setSelectionRange(index + this.rangeStart, index + this.rangeEnd)
  element.focus()
}

editor.textAsTopic = (element) => {
  element.focus()
  const rangeStart = element.selectionStart
  const rangeEnd = element.selectionEnd
  const tempStr1 = element.value.substring(0, rangeStart)
  const tempStr2 = element.value.substring(rangeEnd)
  element.value = tempStr1 + option.replaceText + tempStr2
  element.blur()
}

editor.updateChangeText = (replaceType) => {
  switch (replaceType) {
    case 'b':
      this.o.topic = defaultString.blod
      this.o.replaceText = defaultString.boldexample
      break;
    case 'i'
      this.o.topic = defaultString.italic
      this.o.replaceText = defaultString.italicexample
    default:
  }
}

editor.init = () => {
  this.o = options
}

editor.toggleChange = (replaceType) => {
  this.o.textSelection = this.getSelected()
  if (this.o.textSelection) {
    this.o.replaceText = this.o.textSelection
    this.textAsTopic(this.o.element)
  } else {
    this.updateChangeText()
  }
}

this.init()
