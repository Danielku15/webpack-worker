function isRunningInWorker() {
  return "WorkerGlobalScope" in globalThis;
}
class MyLib {
  static start(workerEntry) {
    if (isRunningInWorker()) {
      console.log("Hello Web Worker!");
    } else {
      console.log("Hello Main Browser UI Thread, will launch worker now!");
      
      // problem here: I only load the entry point
      // any dependencies the entry point needs, are missing!
      const script = `importScripts('${workerEntry}');`;

      const blob = new Blob([script], { type: "text/javascript" });
      const worker = new Worker(URL.createObjectURL(blob));
      worker.postMessage({
        cmd: "initialize",
      });
    }
  }
}

export { MyLib };
