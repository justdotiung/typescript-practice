// Singleton
(function () {
  class Mark {
    private static instance: Mark | null = null;

    private constructor() {}

    static getInstence() {
      if (Mark.instance === null) {
        Mark.instance = new Mark();
      }
      return Mark.instance;
    }
  }

  const a = Mark.getInstence();
  const b = Mark.getInstence();
})();
