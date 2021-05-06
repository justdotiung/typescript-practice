// Index Signatuers
(function () {
  class Students {
    [index: string]: "male" | "female";

    john: "male" = "male";
  }

  const a = new Students();
  a.Mark = "male";
  a.jade = "male";
})();
