$(document).ready ->
  'use strict'

  # Collapsible panel handling
  #
  collapsible_panels = $('.panel.-collapsible')

  if collapsible_panels.length > 0
    collapsible_panels.each (index, panel) ->
      panel = $(panel)
      body = $('.panel-body', panel)
      collapse = $('[data-action="collapse"]', panel)

      collapse.on 'click', (e) ->
        e.preventDefault()
        $('i', collapse).toggleClass 'fa-chevron-right fa-chevron-down'
        body.stop().slideToggle()
        return
      return

  # Dismissible panel handling
  #
  dismissible_panels = $('.panel.-dismissible')

  if dismissible_panels.length > 0
    dismissible_panels.each (index, panel) ->
      panel = $(panel)
      body = $('.panel-body', panel)
      dismiss = $('[data-action="dismiss"]', panel)

      dismiss.on 'click', (e) ->
        e.preventDefault()
        panel.slideToggle ->
          panel.remove()
          return
        return
      return
