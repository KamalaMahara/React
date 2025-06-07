function Delete() {
  let todoName = "complete the project";
  let todoDate = "5/20/2025";
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 fw-medium">{todoName}</div>
        <div className="col-4 fw-medium">{todoDate}</div>
        <div className="col-2 ">
          <button
            type="button"
            class="btn btn-outline-danger kg-button fw-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Delete;
