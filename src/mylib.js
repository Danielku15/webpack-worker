// Startup Routine
function isRunningInAudioWorklet() {
    return 'AudioWorkletGlobalScope' in globalThis;
}
function isRunningInWorker() {
    return 'WorkerGlobalScope' in globalThis;
}
function platformInit() {
    if (isRunningInAudioWorklet()) {
        console.log('Hello Audio Worklet!');
        // here I do Audio Worklet specific logic like registerProcessor
    } else if (isRunningInWorker()) {
        console.log('Hello Web Worker!');
        // here I do Web Worker specific logic like globalThis.addEventListener('message')
    } else {
        console.log('Hello Main Browser UI Thread!');
        // here I do some UI specific logic
    }
}
platformInit();

class MyLib {
    static start() {
        if (!isRunningInAudioWorklet() && !isRunningInWorker()) {
            const libraryScriptFile = MyLib.getMyLibScriptFile();

            if (libraryScriptFile) {
                // create inline script to load lib
                // this should ensure that the startup logic is called
                const script = `import * as myLib from '${libraryScriptFile}'`;
                const blob = new Blob([script], { type: 'text/javascript' });

                // start worker
                const worker = new Worker(URL.createObjectURL(blob), { type: 'module' });
                worker.postMessage({
                    cmd: 'initialize',
                });
            }
            else {
                console.error('Failed to spawn worker, URL to library could not be resolved');
            }
        }
    }

    static getMyLibScriptFile() {
        // First stage detection: try ESM import
        try {
            const importUrl = import.meta.url;
            if (importUrl) {
                // avoid using file:// urls in case of
                // bundlers like webpack
                if (importUrl.indexOf('file://') >= 0) {
                    console.warn('Detected unusable import.meta.url pointing to local file')
                } else {
                    return importUrl;
                }
            }
        }
        catch (e) {
            // ignore potential errors
        }

        console.error('Failed to detect current script file');
        return null;
    }
}

export { MyLib };
