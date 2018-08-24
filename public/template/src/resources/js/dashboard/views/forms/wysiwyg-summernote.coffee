$(document).ready ->
  'use strict'

  $('#summernote').summernote
    callbacks:
      onInit: ->
        $('#summernote .dropdown-menu').addClass '-dark'
        return
  return
