export default function ContactCardComponent({ Contact }) {
  return (
    <div className=" d-flex  border border-2 py-2">
      <div className=" col-3 d-flex justify-content-center align-items-center">
        <img
          src={Contact.url}
          alt={Contact.name}
          className="rounded-circle d-flex object-fit-cover"
          style={{ width: "120px", height: "120px" }}
        />
      </div>
      <div className=" col-9 ">
        <h5 className="card-title align-text-start mb-1 p-0">{Contact.name}</h5>
        <p className="card-text m-0 p-0">{Contact.adress}</p>
        <p className="card-text m-0 p-0">{Contact.phone}</p>
        <p className="card-text m-0 p-0">{Contact.email}</p>
      </div>
    </div>
  );
}
