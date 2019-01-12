describe('main', () => {
    it('extensions', () => {
        const canvas = document.createElement('canvas');
        const gl = getGLContext(canvas);
        const extensions = gl.getSupportedExtensions();
        console.log('count : ', extensions.length);
        console.log(JSON.stringify(extensions));
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
