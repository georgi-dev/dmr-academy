(($, window, document) ->
  "use strict"

  # @Navbar
  $.form = (element, options) ->
    @form = $(element)
    @groups = $('.form-group', @form)
    @inputs = $('input, textarea, select', @form)
    @check = {}

    @action = @form.attr 'action'
    @method = @form.attr 'method'
    @method = 'POST' unless @method?

    # Focus Animation
    @groups.each (index, group) ->
      group = $(group)
      input = $('input, textarea, select', group)
      label = $('label', group)

      group.on 'click', ->
        input.focus()
        return

      if input.val() != ""
        label.addClass 'active'

      input.on 'focusin', ->
        group.removeClass 'has-error'
        label.addClass 'active'
        return

      input.on 'focusout', ->
        if input.val() == ""
          label.removeClass 'active'
        return
      return
    return

  # Lightweight plugin wrapper that prevents multiple instantiations.
  #
  $.fn.form = (opts) ->
    @each (index, element) ->
      unless $.data element, "form"
        $.data element, "form", new $.form element, opts

) window.jQuery, window, document
