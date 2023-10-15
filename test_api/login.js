const request = require('supertest');
const { expect } = require('chai');

async function login(payload) {
  const response = await request('https://kasir-api.belajarqa.com')
    .post('/authentications')
    .send(payload);
  return response;
}
// async function addUser(payload2) {
//   const response2 = await request('https://kasir-api.belajarqa.com')
//     .post('/users')
//     .send(payload2);
//   return response2;
// }

describe('login feature', () => {
  it('succesfully login', async () => {
    const payload = { email: 'sample@ex.com', password: '123adsfadf@' };

    const response = await login(payload);

    // assert
    expect((await response).status).to.equal(201);
  });

  it('Failed login', async () => {
    const payload = { email: 'sample@gmail.com' };
    const response = await login(payload);

    // assert
    expect((await response).status).to.equal(400);
  });
});

describe('POST user', () => {
  it('succes add user', async () => {
    const responseDua = await request('https://kasir-api.belajarqa.com')
      .post('/users')
      .send({
        name: 'kasir-serbaguna',
        email: 'user@example.com',
        password: 'jiasda2321@',
      });

    expect(responseDua.body.name).to.eql('kasir-serbaguna');
    expect(responseDua.body.email).to.eql('user@example.com');
    expect(responseDua.body.password).to.eql('jiasda2321@');
  });
});
