export class Common {
  public static async wait(ms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve(true);
      }, ms);
    });
  }
}