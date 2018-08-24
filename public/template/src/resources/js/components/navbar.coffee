(($, window, document) ->
  "use strict"

  _defaults =
    opaque: true

  # @Navbar
  $.navbar = (element, options) ->
    @settings = $.extend {}, _defaults

    @element = $(element)

    # Scroll navbar with the document up to 25px, after which we remove the
    # transparent class
    #
    $(window).scroll =>
      scroll_top = $(window).scrollTop()

      if @settings.opaque
        if scroll_top > 25
          @element.addClass '-opaque'
        else
          @element.removeClass '-opaque'

      return
    .trigger 'scroll'

    # Hide collapsed navbar on click outside navbar element
    $('body').on 'click', (e) =>
      return unless @element.hasClass 'navbar-collapsed'
      if !$(e.target).is(@element) && !@element.has($(e.target)).length > 0
        @element.removeClass('navbar-collapsed')
      e.stopPropagation()
      return

    return

  # Lightweight plugin wrapper that prevents multiple instantiations.
  #
  $.fn.navbar = (opts) ->
    @each (index, element) ->
      unless $.data element, "navbar"
        $.data element, "navbar", new $.navbar element, opts

) window.jQuery, window, document


# A factory that uses AMD, CommonJS or window globals to
# create the jQuery plugin.
# do (plugin = navbar, window) ->
#   hasDefine  = typeof define is "function" and define.amd?
#   hasExports = typeof module isnt "undefined" and module.exports?
#
#   # AMD.
#   if hasDefine
#     define ["jquery"], plugin
#
#   # NodeJS/CommonJS.
#   else if hasExports
#     module.exports = plugin require "jquery"
#
#   # Window globals.
#   else
#     plugin window.jQuery or window.$
