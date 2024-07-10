import mockDate from 'mockdate';
beforeAll(async () => {
  mockDate.set(new Date());
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

});

afterAll(async () => {
  mockDate.reset();
});
