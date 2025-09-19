import supertest from "supertest";

import app from "../../src/app";

const request = supertest(app);

describe("GET /api/v1/jeu/redemarrerJeu", () => {
  let game;
  beforeAll(async () => {
    await request.post("/api/v1/jeu/demarrerJeu").send({ nom: "j1" });
    await request.post("/api/v1/jeu/demarrerJeu").send({ nom: "j2" });
  });

  it("devrait repondre code 200 apres appel de api", async () => {
    const response = await request.get("/api/v1/jeu/redemarrerJeu");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("devrait ne plus y avoir de joueur", async () => {
    const response = await request.get("/api/v1/jeu/getjoueurs");
    expect(response.status).toBe(200);
    const j = response.body.result;
    expect(j.length).toBe(0);
  });
});

// Vous devez insérer les nouveaux tests ici

// import { assert } from "console";
// import "jest-extended";

// describe("redemarrerJeu.test.ts", () => {
//   it("devrait implémenter test", async () => {
//     throw new Error("Ce test n'a pas été défini");
//   });
// });
