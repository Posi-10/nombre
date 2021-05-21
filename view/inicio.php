<div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-sm-6">
      <form>
        <div class="form-group">
          <label for="selector_db">Selecciona tu DB</label>
          <select class="form-control" id="selector_db" name="selector_db">
            <option value="0">Selecciona DB</option>
            <option value="1">DB 1</option>
            <option value="2">DB 2</option>
            <option value="3">DB 3</option>
          </select>
        </div>
        <div class="form-group">
          <label for="nombre">Ingrsa tu nombre</label>
          <input type="text" class="form-control" id="nombre" name="nombre">
        </div>
        <span type="submit" class="btn btn-success" id="btn_guardar">Guardar</span>
      </form>
    </div>
  </div>
</div>
<script src="manager/manager_inicio.js"></script>