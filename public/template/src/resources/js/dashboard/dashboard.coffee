$(document).ready ->
  'use strict'

  # Navbar
  #
  $('.navbar').navbar()

  # Morph dropdown
  $('.navbar').morphDropdown()

  # Sidebar
  #
  $('.sidebar').sidebar()

  # Activate tooltips
  #
  $('[data-toggle="tooltip"]').tooltip()

  # Activate popovers
  #
  $('[data-toggle="popover"]').popover
    trigger: 'hover'

  # Content
  #
  resize_content_timeout = undefined
  resize_content = ->
    $('.content').css 'min-height': $(window).height() - $('.navbar').height()
    return
  $(window).resize ->
    resize_content_timeout = clearTimeout(resize_content_timeout)
    setTimeout(resize_content, 100)
    return
  resize_content()


  # Wizards scroll
  #
  if $('.wizard .content').length > 0
    $('.wizard .content').perfectScrollbar()

  # Morph gallery scroll
  #
  if $('.morph-gallery').length > 0
    $('.morph-gallery').perfectScrollbar()

  return

$(window).on 'load', ->
  loader = $('.loader-wrapper')
  TweenLite.to loader, 0.5,
    opacity: 0
    onComplete: ->
      loader.remove()
      return
  return
