import { sleep, check } from "k6";
import { Options } from "k6/options";
import http from "k6/http";

export let options: Options = {
  stages: [
    { target: 30, duration: "1m" },
    { target: 30, duration: "2m" },
    { target: 60, duration: "1m" },
    { target: 60, duration: "2m" },
    { target: 90, duration: "1m" },
    { target: 90, duration: "2m" },
    { target: 120, duration: "1m" },
    { target: 120, duration: "2m" },
    { target: 150, duration: "1m" },
    { target: 150, duration: "2m" },
    { target: 180, duration: "1m" },
    { target: 180, duration: "2m" },
    { target: 210, duration: "1m" },
    { target: 210, duration: "2m" },
    { target: 240, duration: "1m" },
    { target: 240, duration: "2m" },
    { target: 270, duration: "1m" },
    { target: 270, duration: "2m" },
    { target: 300, duration: "1m" },
    { target: 300, duration: "2m" },
    // Can go on and on and on, but seems sufficient till 300
    { target: 0, duration: "5m" },
  ],
  thresholds: {
    http_req_duration: [
      {
        threshold: "p(99) < 1500",
        abortOnFail: true,
      },
    ],
    checks: [
      {
        threshold: "rate > 0.4",
        abortOnFail: true,
      },
    ],
  },
};

export default (): void => {
  // TODO : Update it to the right behaviour
  const res = http.get(
    "https://stg.geowisata.id/virtual-tour/62878a1da898f2001c0a607a"
  );

  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1);
};
