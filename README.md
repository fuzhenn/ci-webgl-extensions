# WebGL Extensions Test for CI Services

[![Circle CI](https://circleci.com/gh/fuzhenn/webgl-extensions.svg?style=shield)](https://circleci.com/gh/fuzhenn/webgl-extensions) [![Build status](https://ci.appveyor.com/api/projects/status/oe3t4yryw7vdlxee?svg=true)](https://ci.appveyor.com/project/fuzhenn/webgl-extensions) [![Build Status](https://travis-ci.org/fuzhenn/ci-webgl-extensions.svg?branch=master)](https://travis-ci.org/fuzhenn/ci-webgl-extensions)

This is to print out supported webgl extensions on CI services such as circleCI, travisCI and appveyor.

## 2019-01-12

### circleCI

`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_half_float`,`EXT_frag_depth`,`EXT_shader_texture_lod`,`EXT_sRGB`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_s3tc`,`WEBKIT_WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_debug_renderer_info`,`WEBGL_debug_shaders`,`WEBGL_depth_texture`,`WEBKIT_WEBGL_depth_texture`,`WEBGL_draw_buffers`,`WEBGL_lose_context`,`WEBKIT_WEBGL_lose_context`

* count : 24

* missed : `EXT_texture_filter_anisotropic`, `WEBKIT_EXT_texture_filter_anisotropic`

### appveyor

`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_half_float`,`EXT_frag_depth`,`EXT_shader_texture_lod`,`EXT_texture_filter_anisotropic`,`WEBKIT_EXT_texture_filter_anisotropic`,`EXT_sRGB`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_s3tc`,`WEBKIT_WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_debug_renderer_info`,`WEBGL_debug_shaders`,`WEBGL_depth_texture`,`WEBKIT_WEBGL_depth_texture`,`WEBGL_draw_buffers`,`WEBGL_lose_context`,`WEBKIT_WEBGL_lose_context`

* count : 26

* missed : none

### travisCI

`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_frag_depth`,`EXT_shader_texture_lod`,`EXT_sRGB`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_s3tc`,`WEBKIT_WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_debug_renderer_info`,`WEBGL_debug_shaders`,`WEBGL_depth_texture`,`WEBKIT_WEBGL_depth_texture`,`WEBGL_draw_buffers`,`WEBGL_lose_context`,`WEBKIT_WEBGL_lose_context`

* count :  23

* missed ：`EXT_color_buffer_half_float`, `EXT_texture_filter_anisotropic`, `WEBKIT_EXT_texture_filter_anisotropic`
