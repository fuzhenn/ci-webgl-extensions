describe('main', () => {
    it('extensions', () => {
        const canvas = document.createElement('canvas');
        const gl = getGLContext(canvas);
        console.log(JSON.stringify(gl.getSupportedExtensions()));
    });
});

function getGLContext(canvas) {
    const names = ['webgl', 'experimental-webgl'];
    let context = null;
    for (let i = 0; i < names.length; ++i) {
        try {
            context = canvas.getContext(names[i]);
        } catch (e) {}
        if (context) {
            break;
        }
    }
    return context;
}
