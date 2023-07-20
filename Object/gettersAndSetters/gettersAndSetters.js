const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log.at(-1);
  },
  languages: [],
  set language(l) {
    this.languages.push(l);
  },
};

module.exports = obj;
