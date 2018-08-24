$(document).ready ->
  'use strict'

  backgroundColor = hexShade(hexBlend(colors['primary'], colors['secondary'], 0.5), -0.2)
  color = hexShade(backgroundColor, -0.75)
  hoverColor = hexShade(backgroundColor, -0.9)
  selectedColor = hexShade(backgroundColor, -0.5)
  # selectedColor = colors['primary']

  ###
  World
  ###
  $('#vector-world').vectorMap
    map: 'world_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  North America
  ###
  $('#vector-north-america').vectorMap
    map: 'north-america_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  South America
  ###
  $('#vector-south-america').vectorMap
    map: 'south-america_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  Europe
  ###
  $('#vector-europe').vectorMap
    map: 'europe_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  Asia
  ###
  $('#vector-australia').vectorMap
    map: 'australia_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  Asia
  ###
  $('#vector-asia').vectorMap
    map: 'asia_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  ###
  Africa
  ###
  $('#vector-africa').vectorMap
    map: 'africa_en'
    backgroundColor: backgroundColor
    color: color
    hoverColor: hoverColor
    selectedColor: selectedColor
    borderWidth: 0

  return
