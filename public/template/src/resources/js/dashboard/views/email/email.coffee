$(document).ready ->
  'use strict'

  mail_items = $('.mail-item')
  check_all = $('#mail-check-all')
  compose = $('#email-body')

  if mail_items.length > 0
    ###
    Handle checking all emails
    ###
    check_all.on 'change', ->
      checked = check_all.is ":checked"
      mail_items.each (index, item) ->
        item = $(item)
        checkbox = $('.mail-item-actions input[type="checkbox"]', item)
        checked_item = checkbox.is ":checked"

        if checked && not checked_item
          checkbox.prop 'checked', true
        else if not checked && checked_item
          checkbox.prop 'checked', false
        return
      return

    ###
    Email item specific actions
    ###
    mail_items.each (index, item) ->
      item = $(item)
      href = item.attr 'data-href'
      star = $('.mail-item-star', item)

      ###
      Set email as starred
      ###
      star.on 'click', ->
        item.toggleClass '-starred'
        return

      ###
      Open Email with chosen id
      ###
      item.on 'click', (e) ->
        target = $(e.target)
        if target.closest('.mail-item-actions').length == 0
          window.location.href = href
        return
      return

  if compose.length > 0
    compose.summernote
      callbacks:
        onInit: ->
          $('.dropdown-menu', compose).addClass '-dark'
          return
  return
