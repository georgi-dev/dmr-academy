$('document').ready ->
  'use strict'

  responsive =
    xs: 0
    sm: 544
    md: 768
    lg: 992
    xl: 1200

  # Change footer background on icon hover
  $('.social-icons a').each (index, icon) ->
    color_class = 'social-colored social-' + $(icon).attr('data-color')

    $(icon).on 'mouseenter', ->
      $('#social-section').addClass color_class
      return

    $(icon).on 'mouseleave', ->
      $('#social-section').removeClass color_class
      return
    return

  $('.folder-tree-view .folder').each (index, folder) ->
    folder = $(folder)
    label = $('> span', folder)
    icon = $('> i', label)

    return if folder.hasClass 'disabled'

    label.on 'click', (e) ->
      folder.toggleClass('open')
      icon.toggleClass('fa-folder fa-folder-open')
      return
    return

  return
