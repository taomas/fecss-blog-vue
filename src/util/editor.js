export default class Editor {
  constructor (element) {
    this.element = element
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

  textAsTopic (element) {
    const rangeStart = element.selectionStart
    const rangeEnd = element.selectionEnd
    const tempStr1 = element.value.substring(0, rangeStart)
    const tempStr2 = element.value.substring(rangeEnd)
    element.value = tempStr1 + this.replaceText + tempStr2
  }

  toggleChange (replaceType) {
    const textSelection = this.getSelected()
    this.updateChangeText(replaceType, textSelection)
    this.insertTopic()
  }

  toggleImage (linkAddress) {
    this.replaceContent = '![链接描述](http://' + linkAddress + ')'
    this.replaceText = '![链接描述](http://' + linkAddress + ')'
    this.rangeStart = 2
    this.rangeEnd = 6
    this.insertTopic()
  }

  toggleLink (linkAddress) {
    this.replaceContent = '[链接描述](http://' + linkAddress + ')'
    this.replaceText = '[链接描述](http://' + linkAddress + ')'
    this.rangeStart = 1
    this.rangeEnd = 5
    this.insertTopic()
  }

  updateOption (replaceType, textSelection) {
    this.replaceSymbol = this.option[replaceType + 'symbol']
    this.replaceContent = textSelection !== '' ? textSelection : this.option[replaceType + 'text']
    this.rangeStart = +this.replaceSymbol.length
    this.rangeEnd = this.rangeStart + this.replaceContent.length
  }

  updateChangeText (replaceType, textSelection) {
    switch (replaceType) {
      case 'blod':
        this.updateOption(replaceType, textSelection)
        this.replaceText = this.replaceSymbol + this.replaceContent + this.replaceSymbol
        break
      case 'italic':
        this.updateOption(replaceType, textSelection)
        this.replaceText = this.replaceSymbol + this.replaceContent + this.replaceSymbol
        break
      case 'link':
        if (!textSelection) {
          this.replaceContent = '[链接描述](http://example.com/)'
          this.replaceText = '[链接描述](http://example.com/)'
          this.rangeStart = 1
          this.rangeEnd = 5
        }
        break
      case 'quote':
        this.updateOption(replaceType, textSelection)
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      case 'code':
        this.updateOption(replaceType, textSelection)
        this.rangeStart = +this.replaceSymbol.length + 1
        this.rangeEnd = this.rangeStart + this.replaceContent.length
        this.replaceText = this.replaceSymbol + '\n' + this.replaceContent + '\n' + this.replaceSymbol
        break
      case 'olist':
        this.updateOption(replaceType, textSelection)
        break
      case 'ulist':
        this.updateOption(replaceType, textSelection)
        break
      case 'heading':
        this.updateOption(replaceType, textSelection)
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      case 'hr':
        this.updateOption(replaceType, textSelection)
        this.replaceText = this.replaceSymbol + this.replaceContent
        break
      default:
    }
  }
}
