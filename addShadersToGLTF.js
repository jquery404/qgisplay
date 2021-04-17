function getPNGImage(gltf, name) {
	var returnVal;
	gltf.scene.traverse(function (child) {
		if (child.isMesh && child.name == name) {
			returnVal = child.material.map.image;
		}
	});
	return returnVal;
};

function addShadersToGLTF(vert, fragment, uniforms, gltf, name) {
	gltf.scene.traverse(function (child) {
		if (child.isMesh && child.name == name) {
			child.material = new THREE.ShaderMaterial({
				uniforms: uniforms,
				vertexShader: vert.textContent,
				fragmentShader: fragment.textContent
			});
		}
	});
};