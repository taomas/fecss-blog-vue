export default class Editor {
  constructor (element) {
    this.elementDom = element
    this.replaceType = ''
    this.replaceText = ''
    this.rangeStart = 2
    this.rangeEnd = 6
    this.option = {
      blod: '**',
      blodtext: '加粗文字',
      blodexample: '**加粗文字**',
      blodRangeStart: 2,
      blodRangeEnd: 6,

      italic: '*',
      italictext: '斜体文字',
      italicexample: '*斜体文字*',
      italicRangeStart: 1,
      italicRangeEnd: 5,

      link: '',
      linkexample: '[链接](http://example.com/)',

      quote: '>',
      quoteexample: '>引用文字',

      hr: '---'
    }
  }

  getSelected (element) {
    if (!window.getSelection) {
      // IE浏览器
      return document.selection.createRange().text
    } else {
      return element.value.substr(element.selectionStart, element.selectionEnd - element.selectionStart)
    }
  }

  insertTopic (textObj) {
    let value = textObj.value
    let index = value.indexOf(this.replaceText)
    if (index === -1) {
      // 匹配
      this.textAsTopic(textObj)
    }
    value = textObj.value
    index = value.indexOf(this.replaceText)
    console.log(value, this.replaceText)
    console.log(index, this.rangeStart, this.rangeEnd)
    if (textObj.createTextRange) {
      const range = textObj.createTextRange()
      range.moveEnd('character', -1 * value.length)
      range.moveEnd('character', index + this.rangeEnd)
      range.moveStart('character', index + this.rangeStart)
      range.select()
    } else {
      textObj.setSelectionRange(index + this.rangeStart, index + this.rangeEnd)
      textObj.focus()
    }
  }

  textAsTopic (textObj) {
    textObj.focus()
    if (textObj.createTextRange) {
      const caretPos = document.selection.createRange().duplicate()
      document.selection.empty()
      caretPos.text = this.replaceText
    } else if (textObj.setSelectionRange) {
      const rangeStart = textObj.selectionStart
      const rangeEnd = textObj.selectionEnd
      const tempStr1 = textObj.value.substring(0, rangeStart)
      const tempStr2 = textObj.value.substring(rangeEnd)
      textObj.value = tempStr1 + this.replaceText + tempStr2
      textObj.blur()
    }
  }

  toggleChange (replaceType) {
    const textSelection = this.getSelected(this.elementDom)
    this.updateOption(replaceType, textSelection)
    // this.insertTopic(this.elementDom)
    if (!textSelection || this.replaceText === textSelection) {
        // 没有文字选中，光标处插入
      this.insertTopic(this.elementDom)
    } else {
      this.textAsTopic(this.elementDom, textSelection)
    }
  }

  updateOption (replaceType, textSelection) {
    let selectionExample = this.option[replaceType] + textSelection + this.option[replaceType]
    this.replaceType = replaceType
    this.replaceText = textSelection !== '' ? selectionExample : this.option[replaceType + 'example']
    this.rangeStart = +this.option[replaceType + 'RangeStart'] || ''
    this.rangeEnd = +this.option[replaceType + 'RangeEnd'] || ''
  }

  updateChangeText (replaceType) {
    switch (replaceType) {
      case 'blod':
        this.updateOption('blod')
        break
      case 'italic':
        this.updateOption('italic')
        break
      case 'link':
        this.updateOption('link')
        break
      case 'quote':
        this.updateOption('quote')
        break
      case 'code':
        this.updateOption('code')
        break
      default:
    }
  }
}
