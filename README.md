# Load ImageData with Wasm (Rust) 

A quick experiment to get raw pixels of a PNG using Wasm from Rust __no canvas involved__, compared to the more mainstream [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) and [WebGL2 API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) methods.

```
Benchmarking getImageDataUsingWebAssembly
  decode 104327 bytes took 5.500 ms
  decode 207071 bytes took 6.000 ms
  decode 503111 bytes took 30.500 ms
  decode 1068158 bytes took 28.100 ms
  decode 3124201 bytes took 76.000 ms
  decode 5249494 bytes took 81.100 ms
  decode 10473459 bytes took 182.000 ms
  decode 21141605 bytes took 367.200 ms
  decode 32916531 bytes took 601.400 ms
Total time for getImageDataUsingWebAssembly is 1377.800 ms

Benchmarking getImageDataUsingWebgl
  decode 104327 bytes took 10.100 ms
  decode 207071 bytes took 14.300 ms
  decode 503111 bytes took 18.900 ms
  decode 1068158 bytes took 23.700 ms
  decode 3124201 bytes took 65.100 ms
  decode 5249494 bytes took 80.300 ms
  decode 10473459 bytes took 144.300 ms
  decode 21141605 bytes took 316.800 ms
  decode 32916531 bytes took 470.200 ms
Total time for getImageDataUsingWebgl is 1143.700 ms

Benchmarking getImageDataUsingOfflineCanvas
  decode 104327 bytes took 7.200 ms
  decode 207071 bytes took 6.900 ms
  decode 503111 bytes took 12.200 ms
  decode 1068158 bytes took 17.300 ms
  decode 3124201 bytes took 63.300 ms
  decode 5249494 bytes took 75.300 ms
  decode 10473459 bytes took 131.400 ms
  decode 21141605 bytes took 301.700 ms
  decode 32916531 bytes took 474.300 ms
Total time for getImageDataUsingOfflineCanvas is 1089.600 ms
```
