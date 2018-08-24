$(document).ready ->
  'use strict'

  style = [
    {
      'featureType': 'all'
      'elementType': 'labels.text.fill'
      'stylers': [
        { 'color': colors['white'] }
      ]
    }
    {
      'featureType': 'all'
      'elementType': 'labels.text.stroke'
      'stylers': [
        { 'visibility': 'on' }
        { 'color': colors['black'] }
        { 'lightness': 0 }
      ]
    }
    {
      'featureType': 'all'
      'elementType': 'labels.icon'
      'stylers': [ { 'visibility': 'off' } ]
    }
    {
      'featureType': 'administrative'
      'elementType': 'geometry.fill'
      'stylers': [
        { 'color': colors['concrete'] }
        { 'lightness': 20 }
      ]
    }
    {
      'featureType': 'administrative'
      'elementType': 'geometry.stroke'
      'stylers': [
        { 'color': hexBlend(colors['primary'], colors['secondary'], 0.5) }
        { 'weight': 1.2 }
      ]
    }
    {
      'featureType': 'landscape'
      'elementType': 'geometry'
      'stylers': [
        { 'color': colors['concrete'] }
      ]
    }
    {
      'featureType': 'poi'
      'elementType': 'geometry'
      'stylers': [
        { 'color': colors['black'] }
      ]
    }
    {
      'featureType': 'road'
      'elementType': 'geometry.fill'
      'stylers': [
        { 'color': hexBlend(colors['primary'], colors['secondary'], 0.5) }
      ]
    }
    {
      'featureType': 'road.highway'
      'elementType': 'geometry.stroke'
      'stylers': [
        { 'color': hexBlend(colors['primary'], colors['secondary'], 0.5) }
        { 'lightness': '20' }
      ]
    }
    {
      'featureType': 'transit'
      'elementType': 'geometry'
      'stylers': [
        { 'color': hexBlend(colors['primary'], colors['secondary'], 0.5) }
        { 'lightness': 19 }
      ]
    }
    {
      'featureType': 'water'
      'elementType': 'geometry'
      'stylers': [
        { 'color': colors['asphalt'] }
      ]
    }
  ]




  ###################################

  default_map = new GMaps
    el: '#gmaps-default'
    lat: -33.8688
    lng: 151.2093
    zoom: 13

  ###################################

  styled_map = new GMaps
    el: '#gmaps-styled'
    lat: -33.8688
    lng: 151.2093
    zoom: 13
  styled_map.addStyle
    styledMapName:"Volta",
    styles: style,
    mapTypeId: "volta"
  styled_map.setStyle "volta"

  ###################################

  return
