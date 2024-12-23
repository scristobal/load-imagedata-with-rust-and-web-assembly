import init, { decode_img_from_url } from '/pkg/png_decoder.js'

const NUM_IMAGES = 9;

const functions = [getImageDataUsingWebAssembly, getImageDataUsingWebgl, getImageDataUsingOfflineCanvas];

run(functions, NUM_IMAGES);


async function bench(fn, url) {

	await init({})

	let start = performance.now();

	await fn(url, start)

	const timeTaken = performance.now() - start;

	const res = await fetch(url);

	console.log(`  decode ${res.headers.get("content-length")} bytes took ${timeTaken.toFixed(3)} ms`)

	return timeTaken
}


async function run(functions, num_images) {

	console.log(`Running on ${navigator.userAgent}\n`)

	for (const _function of functions) {

		console.log(`Benchmarking ${_function.name}`);

		let totalTime = 0;

		for (let i = 1; i <= num_images; i++) {
			const url = `/images/${i}.png`
			totalTime += await bench(_function, url)
		}

		console.log(`Total time for ${_function.name} is ${totalTime.toFixed(3)} ms\n`)
	}
}


async function getImageDataUsingWebAssembly(url) {
	return await decode_img_from_url(url);
}

async function getImageDataUsingOfflineCanvas(url) {

	const response = await fetch(url);

	const blob = await response.blob();

	const bitmap = await createImageBitmap(blob, { colorSpaceConversion: 'none' });
	const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);

	const ctx = canvas.getContext('2d');

	ctx?.drawImage(bitmap, 0, 0);

	// bitmaps do not get GC'd
	bitmap.close();

	const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);

	return imageData.data
}


async function getImageDataUsingWebgl(url) {

	const response = await fetch(url);

	const blob = await response.blob();

	const bitmap = await createImageBitmap(blob, { colorSpaceConversion: 'none' });

	const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);

	const gl = canvas.getContext('webgl2');

	const fb = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fb);

	const texture = gl.createTexture();

	// gl.activeTexture(gl.TEXTURE0);

	gl.bindTexture(gl.TEXTURE_2D, texture);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, bitmap.width, bitmap.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

	const data = new Uint8ClampedArray(bitmap.width * bitmap.height * 4);

	gl.readPixels(0, 0, bitmap.width, bitmap.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

	gl.bindFramebuffer(gl.FRAMEBUFFER, null);

	return data
}




