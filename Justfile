


build *args: 
	cd libs/png-decoder && cargo build --target=wasm32-unknown-unknown --release {{ args }}

pack *args:
	cd libs/png-decoder &&  wasm-bindgen ./target/wasm32-unknown-unknown/release/png_decoder.wasm --out-dir ../../src/pkg --target web {{ args }}

