import React from "react";
const Complaint = () => {
  return (
    <>
      <div class="container mt-3 pt-3">
        <div class="col-12">
          <h1 class="text-center fw-bolder">Form bootstrap 5</h1>
        </div>
        <div class="col-12">
          <div class="bg-secondary opacity-75 bg-gradient p-3 text-center mb-2 text-white fw-bolder fs-3">
            Cadastre-se
          </div>
          <hr />
        </div>
        <form class="row g-3">
          <div class="col-12">
            <label for="inputName" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Informe seu e-mail"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Informe uma senha segura"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              CEP
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Concordo com os termos.
              </label>
            </div>
          </div>
          <div class="col-12 text-end">
            <button
              type="submit"
              class="btn btn-success w-100 bg-gradient p-3 text-center mb-2 text-white fw-bolder fs-3"
            >
              Salvar
            </button>
            <a href="#" class="text-primary shadow-sm">
              Precisa de ajuda? Clique aqui
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
export default Complaint;
