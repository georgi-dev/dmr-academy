# Morph Dropdown
#
# Morph dropdown script inspired by Stripe
#
(($, window, document) ->
  "use strict"

  _defaults =
    duration: 0.5
    animate: "TweenLite"
    selectors:
      link: '.has-morph-dropdown'
      dropdown_target: '.morph-dropdown'
      dropdown_list: '.morph-dropdown-list'
      dropdown_wrapper: '.morph-dropdown-wrapper'
      content: '.morph-content'
    events:
      link_create: 'morph.linkCreate'
    threshold:
      xl: 32
      lg: 32
      md: 32
      sm: 16
      xs: 8
    screen: # Refers to the current screen size
      xs: 0
      sm: 768
      md: 992
      lg: 1200
      xl: 1560


  $.morphDropdown = (element, options) ->
    @settings = $.extend {}, _defaults

    @element = $(element)
    @links = $(@settings.selectors.link, @element)
    @dropdown_targets = $(@settings.selectors.dropdown_target, @element)
    @dropdown_list = $(@settings.selectors.dropdown_list, @element)
    @dropdown_wrapper = $(@settings.selectors.dropdown_wrapper, @element)

    if @dropdown_wrapper.hasClass '-left'
      @from = 'left'
    else
      @from = 'right'

    @initialize = =>
      @link_create_bindings()
      @dropdown_bindings()
      @resize_bindings()
      @touch_bindings()

      @set_responsive_context()
      @set_threshold()

      @init_animator()
      @init_link_bindings()
      return


    @touch_bindings = =>
      @dropdown_wrapper.on 'touchstart', (->)
      @links.on 'touchstart', (->)
      return


    @dropdown_bindings = =>
      @dropdown_wrapper.on 'mouseenter', =>
        @cancel_hide_dropdown()
        return

      @dropdown_wrapper.on 'mouseleave', =>
        @hide_dropdown()
        return
      return


    @link_create_bindings = =>
      @element.on @settings.events.link_create, (e, link) =>
        target = $(link.attr('href'))
        content = $(@settings.selectors.content, target)

        link.on 'mouseenter', (e) =>
          @show_dropdown link, target, content
          return

        .on 'mouseleave', (e) =>
          @link_hovered = false

          @hide_dropdown()
          return

        .on 'click', (e) ->
          e.preventDefault()
          return
        return
      return


    @cancel_hide_dropdown = =>
      @show_dropdown @current_link, @current_target, @current_content
      return

    @hide_dropdown = =>
      @dropdown_targets.removeClass '-active'
      @animate.to @dropdown_list, @settings.duration,
        width: 0
        height: 0
        x: 0
      return


    @show_dropdown = (link, target, content) =>
      @current_link = link
      @current_target = target
      @current_content = content

      @link_hovered = true

      if @window_width < 767
        content.width(@window_width - 50)
      else
        content.attr 'style', ''

      width = content.outerWidth(true)
      height = content.outerHeight(true)


      if width + @threshold > @window_width
        width = @window_width - 2 * @threshold

      if @from == 'right'
        x = (@element.width() - link.width() / 2) -
            (link.offset().left - @element.offset().left) -
            width / 2

        x = @threshold if x < @threshold
        if x + width + @threshold > @window_width
          x = @window_width - width - @threshold
        x = -x

      else
        x = (link.offset().left - @element.offset().left) -
            (width / 2 - link.width() / 2)
        x = @threshold if x < @threshold
        if x + width + @threshold > @window_width
          x = @window_width - width - @threshold

      @dropdown_targets.removeClass '-active'

      if @window_width < 767
        width = @window_width - 20
        x = -8

      clearTimeout @link_timeout
      @link_timeout = setTimeout ->
        target.addClass '-active'
        return
      , @settings.duration

      @animate.to @dropdown_list, @settings.duration,
        width: width
        height: height
        'margin-right': -x
      return


    @set_threshold = =>
      @threshold = @settings.threshold[@current_responsive_size]
      return


    @resize_bindings = =>
      @set_window_size = =>
        @window_width = $(window).width()
        @window_height = $(window).height()
        return

      $(window).on 'resize', =>
        @set_window_size()
        @set_threshold()
        return

      @set_window_size()
      return


    @init_link_bindings = =>
      @links.each (index, link) =>
        @element.triggerHandler @settings.events.link_create, [$(link)]
        return


    @init_animator = =>
      @animate = window[@settings.animate]
      return


    ###
    Set current responsive range parameter as xs, sm, md, lg or xl
    ###
    @set_responsive_context = =>
      if @window_width >= @settings.screen.xl
        @current_responsive_size = 'xl'
      else if @window_width >= @settings.screen.lg
        @current_responsive_size = 'lg'
      else if @window_width >= @settings.screen.md
        @current_responsive_size = 'md'
      else if @window_width >= @settings.screen.sm
        @current_responsive_size = 'sm'
      else
        @current_responsive_size = 'xs'
      return


    @initialize()
    return

  # Lightweight plugin wrapper that prevents multiple instantiations.
  #
  $.fn.morphDropdown = (opts) ->
    @each (index, element) ->
      unless $.data element, "morphDropdown"
        $.data element, "morphDropdown", new $.morphDropdown element, opts

) window.jQuery, window, document
