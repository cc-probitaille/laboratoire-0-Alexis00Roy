import supertest from "supertest";
import { Joueur } from "../../src/core/joueur";
//import { JeuDeDes } from "../../src/core/jeuDeDes";
import app from "../../src/app";

const request = supertest(app);

describe("GET /api/v1/jeu/redemarrerJeu", () => {
  let joueur1;
  let joueur2;
  let game;
  beforeAll(async () => {
    joueur1 = new Joueur("Joueur1");
    joueur2 = new Joueur("Joueur2");
    //game= new JeuDeDes();
  });

  it("devrait repondre code 200 apres appel de api", async () => {
    const response = await request.post("/api/v1/jeu/demarrerJeu");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it("devrait ne plus y avoir de joueur", async () => {
    expect(joueur1).toBe(null);
    expect(joueur2).toBe(null);
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
