class ClickPdfButton {
  static id = 'ClickPdfDownload';

  static isMatch() {
    // run on every page
    return true;
  }

  static init() {
    return {}
  }

  async* run(ctx) {
    const { getState, sleep, waitUnit } = ctx.Lib;

    const button = document.querySelectorAll('button');
    if (button) { 
      yield getState(ctx, `clicking view white paper button at ${document.URL}`);

      // a simple button.click doesn't seem to work, but there is a custom
      // function in the page for simulating clicks.
      await WebForm_SimulateClick(document.querySelector('button'), {});

      await sleep(waitUnit * 4);
    }
  }
}
