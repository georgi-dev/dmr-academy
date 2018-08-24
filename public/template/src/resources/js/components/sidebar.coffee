(($, window, document) ->
  "use strict"

  _defaults =
    offset: 75
    collapse: 992
    duration: 0.3
    touch: true
    visibilityThreshold: 0.5
    slideable: false
    overlay: false
    affectContent: true
    slideContent: false
    debug: false

  # @Sidebar
  $.sidebar = (element, options) ->
    @settings = $.extend {}, _defaults

    @sidebar = $(element)
    @sidebar_id = @sidebar.attr 'id'
    @sidebar_menu = $('.sidebar-menu', @sidebar)
    @sidebar_toggle = $('.sidebar-toggle[data-target="#' + @sidebar_id + '"]')
    @sidebar_tabs = $('.sidebar-tab', @sidebar)
    @sidebar_tab_contents = $('.sidebar-tab-content', @sidebar)

    @animate = TweenLite

    @body = $('body')
    @content = $('.content')
    @window = $(window)

    @is_visible = true

    # On resize event
    #
    @on_resize = =>
      if @is_collapsible &&
         (@window.width() < @collapse_threshold || @collapse_threshold is 0)
        @is_collapsed = true
        @sidebar.addClass '-collapsed -responsive'
        @slide_toggle(false) if @is_slideable
        @log('Resize toggle')

        if @affects_content
          if @is_slideable
            @content.removeClass '-with-' + @position + '-sidebar'
      else
        @is_collapsed = false
        @sidebar.removeClass '-collapsed -responsive'

        if @affects_content
          @content.addClass '-with-' + @position + '-sidebar'

      @width = @sidebar.width()
      return

    # Bind resize event
    #
    @bind_resize = =>
      @window.on 'resize', @on_resize
      return

    # Initialize scroller
    #
    @initialize_scrollbar = =>
      $('.nano-content', @sidebar).perfectScrollbar()
      return

    # Initialize collapsible menu
    #
    @initialize_menu = =>
      @sidebar_menu.metisMenu()
      return

    # Initialzie sidebar collapsible and slideable parameters
    #
    @initialize_attributes = =>
      @collapse_threshold = if @sidebar.attr('data-collapse')
        parseInt @sidebar.attr('data-collapse'), 10
      else @settings.collapse

      @offset = if @sidebar.attr('data-offset')
        parseInt @sidebar.attr('data-offset'), 10
      else @settings.offset

      @is_collapsible = !isNaN(@collapse_threshold)

      @is_slideable = @sidebar.hasClass('-slideable') || @settings.slideable
      @is_overlay = @sidebar.attr('data-overlay') || @settings.overlay

      @affects_content = @sidebar.attr('data-affect-content') || @settings.affectContent
      @slides_content = @sidebar.attr('data-slide-content') || @settings.slideContent
      @slides_content = false if @slides_content == 'false'

      if @slides_content then @sidebar.addClass '-slides-content'

      if @sidebar.hasClass '-right'
        @position = 'right'
        @sign = -1
      else
        @position = 'left'
        @sign = 1
      return

    # Collapsible menu bindings
    #
    @bind_menu = =>
      # Collapsible menu opened state
      #
      showing = false

      @sidebar_menu.on 'show.metisMenu', =>
        @sidebar.addClass '-open'
        showing = true
        return

      @sidebar_menu.on 'hidden.metisMenu', =>
        @sidebar.removeClass '-open' unless showing
        showing = false
        return
      return

    # Show slideable sidebar
    #
    @slide_toggle = (visible, duration) =>
      visible = !@is_visible unless visible?
      duration = @settings.duration unless duration?

      @is_sliding = true
      slidingComplete = =>
        setTimeout =>
          @is_sliding = false
          @is_toggling = false

          $.sidebar.active = null unless visible
          return
        , 250
        return

      if visible
        $.sidebar.active =  @sidebar

        @animate.to @sidebar, duration,
          onComplete: slidingComplete
          x: @width * @sign

        if @slides_content then @animate.to @content, duration, x: @width * @sign
      else
        @animate.to @sidebar, duration,
          onComplete: slidingComplete
          x: 0
        if @slides_content then @animate.to @content, duration, x: 0

      @is_visible = visible
      return


    # Bindings for sidebar outside clicks
    #
    @bind_body_click = =>
      @body.on 'mouseup', (e) =>
        if @is_collapsed &&
           @sidebar.hasClass('-open') &&
           $($(e.target).closest('.sidebar-menu'), @sidebar).length == 0
          $('.active a', @sidebar).trigger 'click'
          @log('Sidebar toggle button click')

        if @is_slideable &&
           @is_visible &&
           !@is_sliding &&
           $(e.target) != @sidebar_toggle &&
           $(e.target).closest(@sidebar_toggle).length == 0 &&
           $(e.target).closest('.-slideable').length == 0
          @slide_toggle(false)
          @log('Body click')
        return
      return


    # Handle touch pan actions
    #
    @bind_slideable = =>
      bodyTouch = new Hammer @body[0]
      bodyTouch.get('pan').set direction: Hammer.DIRECTION_HORIZONTAL
      bodyTouch.on 'panstart panleft panright panend', (e) =>
        if e.type == 'panstart'
          @first_touch = e

        is_active_sidebar = $.sidebar.active == null || @sidebar == $.sidebar.active
        is_inside_boundaries = true

        return unless @is_collapsed &&
                      is_active_sidebar


        distance = Math.abs(e.deltaX) - @offset
        can_slide = 0 < distance < @width


        # Check whether the current visibility of the sidebar allows sliding
        # and calculate the sliding distance
        if @is_visible
          x = @width - distance
          direction_valid = e.deltaX < 0
        else
          x = distance
          direction_valid = e.deltaX > 0
          is_inside_boundaries = @first_touch.center.x < @window.width() / 3

        if @position == 'right'
          x = -x
          direction_valid = !direction_valid
          unless @is_visible then is_inside_boundaries = @first_touch.center.x > @window.width() * 2 / 3


        # Determine whether the direction is valid and we're within the valid
        # sliding value range
        return unless @is_slideable && can_slide && direction_valid && is_inside_boundaries

        @is_sliding = true

        # Determine whether the panend in triggered by a left or right panning
        # and toggle sidebar visibility based on how much of the sidebar is
        # visible on panend
        if (e.type == 'panend' && (@previous_event == 'panleft' || @previous_event == 'panright'))
          duration = @settings.duration * e.distance / @width

          if e.distance > @width * 0.5
            if @is_visible
              @slide_toggle(false, duration)
              @log('Slide out')
            else
              @slide_toggle(true, duration)
              @log('Slide in')
          else
            @log('Slide back')
            @slide_toggle(@is_visible, duration)
          return

        # Set the sidebar animation to the current x value
        @animate.set @sidebar, x: x
        if @slides_content then @animate.set @content, x: x

        @previous_event = e.type
        return

    # Change sidebar tabs
    #
    @initialize_tabs = =>
      @sidebar_tabs.each (index, tab) =>
        tab = $(tab)
        target = $(tab.attr('data-target'))

        tab.on 'click', (e) =>
          @sidebar_tabs.removeClass '-active'
          @sidebar_tab_contents.removeClass '-active'

          tab.addClass '-active'

          target.addClass '-active'
          target.triggerHandler 'tab.show', [target]
          return
        return
      return


    # Chat view
    #
    @initialize_chat = =>
      chat_view_tab = $('.chat-view-tab', @sidebar)
      chat_wrapper = $('.chat', chat_view_tab)
      chat_items = $('.chat-items', chat_view_tab)
      chat_form = $('.chat-form', chat_view_tab)
      chat_user = $('.chat-user', chat_view_tab)
      chat_form_message = $('input[name="message"]', chat_view_tab)

      if chat_view_tab.length > 0
        chat_form.on 'submit', (e) ->
          message = chat_form_message.val()
          chat_form_message.val ''
          chat_items.append $('<div>', class: 'chat-item -to', text: message)
          e.preventDefault()
          return false
      return


    # Toggle event bindings
    #
    @initialize_toggle = =>
      @sidebar_toggle.on 'click', =>
        @slide_toggle()
        return
      return


    # Debug logging system
    #
    @log = =>
      if @settings.debug then console.log @sidebar_id, arguments
      return


    # Initialize components and bindings
    #
    @initialize = =>
      @initialize_attributes()
      @initialize_scrollbar()
      @initialize_menu()
      @initialize_toggle()
      @initialize_tabs()
      @initialize_chat()

      @bind_menu()
      @bind_resize()
      @bind_body_click()
      @bind_slideable() if @settings.touch

      @on_resize()
      return

    @initialize()

    return


  # Keep currently active sidebar and act on it if it's open
  #
  $.sidebar.active = null


  # Lightweight plugin wrapper that prevents multiple instantiations.
  #
  $.fn.sidebar = (opts) ->
    @each (index, element) ->
      unless $.data element, "sidebar"
        $.data element, "sidebar", new $.sidebar element, opts

) window.jQuery, window, document


# A factory that uses AMD, CommonJS or window globals to
# create the jQuery plugin.
# do (plugin = sidebar, window) ->
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
