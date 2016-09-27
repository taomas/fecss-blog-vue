export default class Editor {
  constructor (element) {
    this.topic = '插入话题'
    this.elementDom = element
    this.insertType = 'blod'
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
    let topic = this.getTopic(this.topic)
    let value = textObj.value
    let index = value.indexOf(topic)
    if (index === -1) {
      // 匹配
      this.textAsTopic(textObj, topic)
    }
    value = textObj.value
    index = value.indexOf(topic)
    if (textObj.createTextRange) {
      const range = textObj.createTextRange()
      range.moveEnd('character', -1 * value.length)
      range.moveEnd('character', index + 5)
      range.moveStart('character', index + 1)
      range.select()
    } else {
      this.setSelectRange(textObj)
      // textObj.setSelectionRange(index + 1, index + 5)
      // textObj.focus()
    }
  }

  textAsTopic (textObj, textFeildValue) {
    textObj.focus()
    if (textObj.createTextRange) {
      const caretPos = document.selection.createRange().duplicate()
      document.selection.empty()
      caretPos.text = textFeildValue
    } else if (textObj.setSelectionRange) {
      const rangeStart = textObj.selectionStart
      const rangeEnd = textObj.selectionEnd
      const tempStr1 = textObj.value.substring(0, rangeStart)
      const tempStr2 = textObj.value.substring(rangeEnd)
      textObj.value = tempStr1 + textFeildValue + tempStr2
      textObj.blur()
    }
  }

  setSelectRange (textObj) {
    let topic = this.getTopic(this.topic)
    let value = textObj.value
    let index = value.indexOf(topic)
    let start = 1
    let end = 5
    switch (this.insertType) {
      case 'blod':
        start = 2
        end = 6
        break
      case 'italic':
        start = 1
        end = 5
        break
      case 'link':
        start = 1
        end = 5
        break
      case 'quote':
        start = 1
        end = 5
        break
      case 'code':
        start = 3
        end = 8
        break
      default:
    }

    textObj.setSelectionRange(index + start, index + end)
    textObj.focus()
  }

  toggleChange (insertType) {
    this.insertType = insertType
    const textSelection = this.getSelected(this.elementDom)
    if (!textSelection || textSelection === this.topic) {
      // 没有文字选中，光标处插入
      this.insertTopic(this.elementDom)
    } else {
      this.textAsTopic(this.elementDom, this.getTopic(textSelection))
    }
  }

  getTopic (textSelection) {
    let changeText = ''
    switch (this.insertType) {
      case 'blod':
        changeText = '**' + textSelection + '**'
        break
      case 'italic':
        changeText = '*' + textSelection + '*'
        break
      case 'link':
        changeText = '##' + textSelection + '##'
        break
      case 'quote':
        changeText = '>' + textSelection
        break
      case 'code':
        changeText = '```' + textSelection + '```'
        break
      default:
    }
    return changeText
  }
}
