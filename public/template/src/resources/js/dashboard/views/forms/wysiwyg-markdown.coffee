$(document).ready ->
  'use strict'

  $("#markdown").markdown
    parser: (content) -> new showdown.Converter().makeHtml(content)
  return
