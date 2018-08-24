$(document).ready ->
  'use strict'

  ###
  Notification Colors
  ###
  $('#notification-light').on 'click', ->
    $.gritter.add
      class_name: "-light"
      title: "Light Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-dark').on 'click', ->
    $.gritter.add
      class_name: "-dark"
      title: "Dark Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-primary').on 'click', ->
    $.gritter.add
      class_name: "-primary"
      title: "Primary Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-secondary').on 'click', ->
    $.gritter.add
      class_name: "-secondary"
      title: "Secondary Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-success').on 'click', ->
    $.gritter.add
      class_name: "-success"
      title: "Success Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-info').on 'click', ->
    $.gritter.add
      class_name: "-info"
      title: "Info Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-warning').on 'click', ->
    $.gritter.add
      class_name: "-warning"
      title: "Warning Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-danger').on 'click', ->
    $.gritter.add
      class_name: "-danger"
      title: "Danger Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  ###
  Notification Styles
  ###
  $('#notification-basic').on 'click', ->
    $.gritter.add
      class_name: "-dark"
      title: "Basic Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 6000
    return

  $('#notification-sticky').on 'click', ->
    $.gritter.add
      class_name: "-dark"
      title: "Sticky Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      sticky: true
    return

  $('#notification-image').on 'click', ->
    $.gritter.add
      class_name: "-dark"
      title: "Image Notification"
      text: "Many web page editors now use Lorem Ipsum as their model text."
      image: $('#notification-image').attr('data-image')
    return


  ###
  Notification Positions
  ###
  $('#notification-top-right').on 'click', ->
    $.extend $.gritter.options, position: "top-right"
    $.gritter.add
      class_name: "-dark"
      title: "Top Right Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 3000
    return

  $('#notification-top-left').on 'click', ->
    $.extend $.gritter.options, position: "top-left"
    $.gritter.add
      class_name: "-dark"
      title: "Top Left Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 3000
    $.extend $.gritter.options, position: "top-right"
    return

  $('#notification-bottom-left').on 'click', ->
    $.extend $.gritter.options, position: "bottom-left"
    $.gritter.add
      class_name: "-dark"
      title: "Bottom Left Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 3000
    $.extend $.gritter.options, position: "top-right"
    return

  $('#notification-bottom-right').on 'click', ->
    $.extend $.gritter.options, position: "bottom-right"
    $.gritter.add
      class_name: "-dark"
      title: "Bottom Right Notification"
      text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their model text."
      time: 3000
    $.extend $.gritter.options, position: "top-right"
    return

  ###
  Social Notifications
  ###
  $('#notification-facebook').on 'click', ->
    $.gritter.add
      class_name: "-facebook -social"
      title: "You have 3 new comments!"
      text: "Click here to read your newly received post comments."
      image: $('#notification-facebook').attr('data-image')
    return

  $('#notification-twitter').on 'click', ->
    $.gritter.add
      class_name: "-twitter -social"
      title: "You have 4 new followers!"
      text: "Click here to see who has started following you."
      image: $('#notification-twitter').attr('data-image')
    return

  $('#notification-google-plus').on 'click', ->
    $.gritter.add
      class_name: "-google-plus -social"
      title: "You have a new +1!"
      text: "Click here to see who was interested in what you posted."
      image: $('#notification-google-plus').attr('data-image')
    return

  $('#notification-dribbble').on 'click', ->
    $.gritter.add
      class_name: "-dribbble -social"
      title: "You have 2 new comments!"
      text: "Click here to read your newly received artwork comments."
      image: $('#notification-dribbble').attr('data-image')
    return

  $('#notification-behance').on 'click', ->
    $.gritter.add
      class_name: "-behance -social"
      title: "You have 3 new likes!"
      text: "Click here to see who liked the new artwork you've uploaded."
      image: $('#notification-behance').attr('data-image')
    return

  $('#notification-flickr').on 'click', ->
    $.gritter.add
      class_name: "-flickr -social"
      title: "You have 5 new likes!"
      text: "Click here to see who liked the new photo you've uploaded."
      image: $('#notification-flickr').attr('data-image')
    return

  $('#notification-linkedin').on 'click', ->
    $.gritter.add
      class_name: "-linkedin -social"
      title: "You have 5 new profile visits!"
      text: "Click here to see who was interested in your profile."
      image: $('#notification-linkedin').attr('data-image')
    return

  $('#notification-youtube').on 'click', ->
    $.gritter.add
      class_name: "-youtube -social"
      title: "You have 4 new subscribers!"
      text: "Click here to see who your new subscribers are."
      image: $('#notification-youtube').attr('data-image')
    return

  $('#notification-pinterest').on 'click', ->
    $.gritter.add
      class_name: "-pinterest -social"
      title: "You have 3 new likes!"
      text: "Click here to see who liked the new photo you've uploaded."
      image: $('#notification-pinterest').attr('data-image')
    return

  $('#notification-github').on 'click', ->
    $.gritter.add
      class_name: "-github -social"
      title: "You have a new pull request!"
      text: "Click here to review the code of the new pull request."
      image: $('#notification-github').attr('data-image')
    return

  $('#notification-tumblr').on 'click', ->
    $.gritter.add
      class_name: "-tumblr -social"
      title: "You have 35 new likes!"
      text: "Click here to see who liked the new photo you've uploaded."
      image: $('#notification-tumblr').attr('data-image')
    return

  $('#notification-twitch').on 'click', ->
    $.gritter.add
      class_name: "-twitch -social"
      title: "You have 35 new subscribers!"
      text: "Click here to see who your new subscribers are."
      image: $('#notification-twitch').attr('data-image')
    return

  $('#notification-envato').on 'click', ->
    $.gritter.add
      class_name: "-envato -social"
      title: "You have 5 new sales!"
      text: "Click here to review your account balance."
      image: $('#notification-envato').attr('data-image')
    return

  return
