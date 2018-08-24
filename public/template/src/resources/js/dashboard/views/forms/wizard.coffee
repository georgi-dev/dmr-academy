$(document).ready ->
  'use strict'

  $('.wizard').steps
    headerTag: "h3",
    bodyTag: "div",
    transitionEffect: "slideLeft",
    autoFocus: true
    enableAllSteps: false
    enableFinishButton: true
    enablePagination: true
  return
