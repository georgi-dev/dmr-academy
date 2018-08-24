$(document).ready ->
  'use strict'

  dropzone_id = 'my-dropzone'

  Dropzone.options[dropzone_id] =
    paramName: "file"
    maxFilesize: 2
  return
