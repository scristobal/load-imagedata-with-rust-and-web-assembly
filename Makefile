target := wasm32-unknown-unknown
lib_dir :=  libs/png-decoder
wasm_file :=  $(lib_dir)/target/$(target)/release/png_decoder.wasm
out_dir := src/pkg

pack: $(wasm_file)
	wasm-bindgen $(wasm_file) --out-dir $(out_dir) --target web

$(wasm_file):   
	cargo build --manifest-path $(lib_dir)/Cargo.toml --target=$(target) --release

clean:
	rm -rf $(out_dir)
	rm -rf $(lib_dir)/target
