# Load ImageData with Wasm (Rust) 

A quick experiment to get raw pixels of a PNG using Wasm from Rust __no canvas involved__, compared to the more mainstream [`OffscreenCanvas`](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) and [WebGL2 API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) methods.

```
Running on Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0

Benchmarking getImageDataUsingWebAssembly
  decode 104327 bytes took 3.000 ms
  decode 207071 bytes took 4.000 ms
  decode 503111 bytes took 9.000 ms
  decode 1068158 bytes took 12.000 ms
  decode 3124201 bytes took 49.000 ms
  decode 5249494 bytes took 48.000 ms
  decode 10473459 bytes took 127.000 ms
  decode 21141605 bytes took 264.000 ms
  decode 32916531 bytes took 410.000 ms
Total time for getImageDataUsingWebAssembly is 926.000 ms

Benchmarking getImageDataUsingWebgl
  decode 104327 bytes took 19.000 ms
  decode 207071 bytes took 19.000 ms
  decode 503111 bytes took 22.000 ms
  decode 1068158 bytes took 28.000 ms
  decode 3124201 bytes took 67.000 ms
  decode 5249494 bytes took 78.000 ms
  decode 10473459 bytes took 159.000 ms
  decode 21141605 bytes took 314.000 ms
  decode 32916531 bytes took 468.000 ms
Total time for getImageDataUsingWebgl is 1174.000 ms

Benchmarking getImageDataUsingOfflineCanvas
  decode 104327 bytes took 7.000 ms
  decode 207071 bytes took 8.000 ms
  decode 503111 bytes took 10.000 ms
  decode 1068158 bytes took 15.000 ms
  decode 3124201 bytes took 53.000 ms
  decode 5249494 bytes took 58.000 ms
  decode 10473459 bytes took 132.000 ms
  decode 21141605 bytes took 274.000 ms
  decode 32916531 bytes took 420.000 ms
Total time for getImageDataUsingOfflineCanvas is 977.000 ms
```
