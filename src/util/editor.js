export default class Editor {
  constructor (element, vm) {
    this.element = element
    this.vm = vm
    this.textValue = element.value
    this.replaceType = ''
    this.replaceContent = ''
    this.replaceText = ''
    this.option = {
      blodsymbol: '**',
      blodtext: '加粗文字',

      italicsymbol: '*',
      italictext: '斜体文字',

      linksymbol: '',
      linktext: '[链接](http://example.com/)',

      imagesymbol: '',
      imagetext: '![链接](http://example.com/)',

      quotesymbol: '>',
      quotetext: '引用文字',

      codesymbol: '```',
      codetext: '请输入代码',

      ulistsymbol: '- ',
      ulisttext: '列表项目',

      headingsymbol: '## ',
      headingtext: '标题文字',

      hrsymbol: '---\n',
      hrtext: '分割线'
    }
  }

  getSelected () {
    return this.element.value.substr(this.element.selectionStart, this.element.selectionEnd - this.element.selectionStart)
  }

  insertTopic () {
    let value = this.element.value
    let index = value.indexOf(this.replaceText)
    if (index === -1) {
      this.textAsTopic(this.element)
    }
    value = this.element.value
    index = value.indexOf(this.replaceText)
    this.element.setSelectionRange(index + this.rangeStart, index + this.rangeEnd)
    this.element.focus()
  }

  textAsTopic () {
    const rangeStart = this.element.selectionStart
    const rangeEnd = this.element.selectionEnd
    const tempStr1 = this.element.value.substring(0, rangeStart)
    const tempStr2 = this.element.value.substring(rangeEnd)
    const val = tempStr1 + this.replaceText + tempStr2
    this.element.value = val
    this.vm.$emit('updateText', val)
  }

  toggleChange (replaceType, linkAddress) {
    const textSelection = this.getSelected()
    this.initOption(replaceType, textSelection)
    this.updateChangeText(replaceType, linkAddress)
    this.insertTopic()
  }

  initOption (replaceType, textSelection) {
    this.replaceSymbol = this.option[replaceType + 'symbol']
    this.replaceContent = textSelection !== '' ? textSelection : this.option[replaceType + 'text']
    this.rangeStart = +this.replaceSymbol.length
    this.rangeEnd = this.rangeStart + this.replaceContent.length
  }

  updateChangeText (replaceType, linkAddress) {
    switch (replaceType) {
      case 'blod':
        this.replaceText = this.replaceSymbol + this.replaceContent + this.replaceSymbol
        break
      case 'italic':
        this.replaceText = this.replaceSymbol + this.replaceContent + this.replaceSymbol
        break
      case 'link':
        if (linkAddress) {
          this.replaceContent = '[链接描述](http://' + linkAddress + ')'
          this.replaceText = '[链接描述](http://' + linkAddress + ')'
          this.rangeStart = 1
          this.rangeEnd = 5
        }
        break
      case 'image':
        if (linkAddress) {
          this.replaceContent = '![链接描述](http://' + linkAddress + ')'
          this.replaceText = '![链接描述](http://' + linkAddress + ')'
          this.rangeStart = 2
          this.rangeEnd = 6
        }
        break
      case 'quote':
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      case 'code':
        this.rangeStart = +this.replaceSymbol.length + 1
        this.rangeEnd = this.rangeStart + this.replaceContent.length
        this.replaceText = this.replaceSymbol + '\n' + this.replaceContent + '\n' + this.replaceSymbol
        break
      case 'olist':
        break
      case 'ulist':
        break
      case 'heading':
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      case 'hr':
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      default:
    }
  }
}
