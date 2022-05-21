import { sleep } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '180s', target: 238 },
        { duration: '420s', target: 238 },
        { duration: '180s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default () => {
  const res = http.get('https://stg.geowisata.id/virtual-tour/62878a1da898f2001c0a607a');
  sleep(1);
};
