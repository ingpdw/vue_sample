export default {
  data() {
    return {
      tick: 0,
      interval: 0,
      callback: null,
    };
  },
  methods: {
    start(callback) {
      this.callback = callback;
      this.tick = 0;
      this.timer();
    },
    reStart() {
      this.timer();
    },
    stop() {
      clearInterval(this.interval);
    },
    timer() {
      this.interval = setInterval(() => {
        this.tick = this.tick + 1;
        if (this.callback) {
          this.callback(this.tick);
        }
      }, 1000);
    },
  },
};
