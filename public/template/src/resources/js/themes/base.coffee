do ->
  'use strict'

  window['hexToRGBA'] = (hex, alpha) ->
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    alpha = 1 unless alpha?
    rgb =
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    "rgba(#{rgb.r}, #{rgb.g}, #{rgb.b}, #{alpha})"

  window['hexShade'] = (color, percent) ->
    f = parseInt(color.slice(1), 16)
    t = if percent < 0 then 0 else 255
    p = if percent < 0 then percent * -1 else percent
    R = f >> 16
    G = f >> 8 & 0x00FF
    B = f & 0x0000FF
    '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + Math.round((t - B) * p) + B).toString(16).slice(1)

  window['rgbShade'] = (color, percent) ->
    f = color.split(',')
    t = if percent < 0 then 0 else 255
    p = if percent < 0 then percent * -1 else percent
    R = parseInt(f[0].slice(4))
    G = parseInt(f[1])
    B = parseInt(f[2])
    'rgb(' + Math.round((t - R) * p) + R + ',' + Math.round((t - G) * p) + G + ',' + Math.round((t - B) * p) + B + ')'

  window['hexBlend'] = (c0, c1, p) ->
    f = parseInt(c0.slice(1), 16)
    t = parseInt(c1.slice(1), 16)
    R1 = f >> 16
    G1 = f >> 8 & 0x00FF
    B1 = f & 0x0000FF
    R2 = t >> 16
    G2 = t >> 8 & 0x00FF
    B2 = t & 0x0000FF
    '#' + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 + (Math.round((G2 - G1) * p) + G1) * 0x100 + Math.round((B2 - B1) * p) + B1).toString(16).slice(1)

  window['colors'] =
    aqua: '#7fdfff'
    blue: '#0074d9'
    navy: '#001f3f'
    teal: '#39cccc'
    green: '#2ecc40'
    olive: '#3d9970'
    lime: '#01ff70'
    yellow: '#ffdc00'
    orange: '#ff851b'
    red: '#ff4136'
    fuchsia: '#f012be'
    purple: '#b10dc9'
    maroon: '#85144b'
    white: '#ffffff'
    silver: '#f2f2f2'
    darksilver: '#d1d1d1'
    gray: '#aaaaaa'
    lightgray: '#cccccc'
    concrete: '#1d1d1e'
    asphalt: '#3b3b3b'
    black: '#111111'
    facebook: '#3b5998'
    twitter: '#1da1f2'
    'google-plus': '#dd4b39'
    dribbble: '#ea4c89'
    behance: '#1769ff'
    flickr: '#ff0084'
    linkedin: '#0077b5'
    youtube: '#cd201f'
    pinterest: '#bd081c'
    github: '#333333'
    tumblr: '#35465c'
    twitch: '#6441a5'
    envato: '#82b541'

  window['colors']['light'] =
    lighter: hexToRGBA(colors['white'], 0.125)
    light: hexToRGBA(colors['white'], 0.25)
    medium: hexToRGBA(colors['white'], 0.5)
    dark: hexToRGBA(colors['white'], 0.75)
    darker: hexToRGBA(colors['white'], 0.825)

  window['colors']['dark'] =
    lighter: hexToRGBA(colors['black'], 0.125)
    light: hexToRGBA(colors['black'], 0.25)
    medium: hexToRGBA(colors['black'], 0.5)
    dark: hexToRGBA(colors['black'], 0.75)
    darker: hexToRGBA(colors['black'], 0.825)

  # Available themes and associated color scheme
  #
  window['themes'] = {
    'volta': ['#C04848', '#480048'],
    'purple-bliss': ['#360033', '#0b8793'],
    'love-couple': ['#89253e', '#3a6186'],
    'deep-space': ['#434343', '#000000'],
    'from-beyond': ['#838181', '#000C40'],
    'curiosity-blue': ['#3d72b4', '#525252'],
    'orca': ['#093637', '#44a08d'],
    'love-tonight': ['#4568dc', '#b06ab3'],
    'love-and-liberty': ['#a83b3b', '#200122'],
    'blue-lagoon': ['#43C6AC', '#191654'],
    'grapefruit-sunset': ['#904e95', '#e96443'],
    'frost': ['#004e92', '#000428'],
    'mauve': ['#734b6d', '#42275a'],
    'under-the-lake': ['#237a57', '#093028'],
    'vice-city': ['#ec6ead', '#3494e6'],
    'mild': ['#4ca2cd', '#67b26f'],
    'nepal': ['#2657eb', '#de6161'],
    'ibiza-sunset': ['#ff6a00', '#ee0979'],
    'sunset': ['#f56217', '#0b486b'],
    'colored-lenses': ['#636fa4', '#e8cbc0'],
    'disco': ['#556270', '#4ecdc4'],
    'dania': ['#7bc6cc', '#be93c5'],
    '50shades': ['#2c3e50', '#bdc3c7'],
    'very-blue': ['#0575e6', '#021b79'],
    'dawn': ['#F3904F', '#3B4371'],
    'dusk': ['#19547b', '#ffd89b'],
    'dusk-2': ['#fd746c', '#2c3e50'],
    'delhi': ['#3fada8', '#808080'],
    'cosmic-fusion': ['#ff00cc', '#333399'],
    'firewatch': ['#ef473a', '#cb2d3e'],
    'lush': ['#56ab2f', '#a8e063'],
    '80s-purple': ['#41295a', '#2F0743'],
    'royal': ['#243b55', '#141e30'],
    'deep-sea-space': ['#4ca1af', '#2c3e50'],
    'solid-vault': ['#3a6073', '#3a7bd5'],
    'politics': ['#f44336', '#2196f3'],
    'transfile': ['#cb3066', '#16bffd'],
    'red-ocean': ['#a43931', '#1d4350'],
    'pink-lime': ['#a80077', '#66ff00'],
    'easy-med': ['#409c43', '#c2c93a'],
    'cocoa-ice': ['#1ce1ce', '#c0c0aa'],
    'candy-ice': ['#db36a4', '#f7ff00'],
    'dark-skies': ['#283e51', '#4b79a1'],
    'forest': ['#2c7744', '#5a3f37'],
    'miami-dolphins': ['#d39d38', '#4da0b0'],
  }

  return

do ->
  # Set current theme based on theme Cookie
  #
  setTheme = ->
    return if not (document.body && window.Cookies)

    clearInterval(documentReady)

    currentTheme = Cookies.get('theme') || document.body.dataset.theme || 'volta'

    window['colors']['primary'] = window['themes'][currentTheme][0]
    window['colors']['secondary'] = window['themes'][currentTheme][1]

    document.body.className += currentTheme
    return

  documentReady = setInterval setTheme, 50
  return
