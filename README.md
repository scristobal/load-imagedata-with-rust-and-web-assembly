# Load ImageData with Wasm (Rust) 

A quick experiment to get raw pixels of a PNG using Wasm from Rust __no canvas involved__, compared to the more mainstream [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) and [WebGL2 API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) methods.

```
Running on Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0

Benchmarking getImageDataUsingWebAssembly
  decode 104327 bytes took 6.000 ms
  decode 207071 bytes took 7.000 ms
  decode 503111 bytes took 11.000 ms
  decode 1068158 bytes took 16.000 ms
  decode 3124201 bytes took 49.000 ms
  decode 5249494 bytes took 45.000 ms
  decode 10473459 bytes took 117.000 ms
  decode 21141605 bytes took 233.000 ms
  decode 32916531 bytes took 334.000 ms
Total time for getImageDataUsingWebAssembly is 818.000 ms

Benchmarking getImageDataUsingWebgl
  decode 104327 bytes took 91.000 ms
  decode 207071 bytes took 60.000 ms
  decode 503111 bytes took 71.000 ms
  decode 1068158 bytes took 72.000 ms
  decode 3124201 bytes took 112.000 ms
  decode 5249494 bytes took 106.000 ms
  decode 10473459 bytes took 181.000 ms
  decode 21141605 bytes took 329.000 ms
  decode 32916531 bytes took 491.000 ms
Total time for getImageDataUsingWebgl is 1513.000 ms

Benchmarking getImageDataUsingOfflineCanvas
  decode 104327 bytes took 22.000 ms
  decode 207071 bytes took 6.000 ms
  decode 503111 bytes took 11.000 ms
  decode 1068158 bytes took 15.000 ms
  decode 3124201 bytes took 55.000 ms
  decode 5249494 bytes took 84.000 ms
  decode 10473459 bytes took 137.000 ms
  decode 21141605 bytes took 276.000 ms
  decode 32916531 bytes took 520.000 ms
Total time for getImageDataUsingOfflineCanvas is 1126.000 ms
```
