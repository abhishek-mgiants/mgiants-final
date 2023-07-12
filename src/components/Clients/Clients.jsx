
import './Clients.css';

const Clients = () => {
  const clientsData = [
    { id: 1, name: "Company 1", color: "#ff0000" },
    { id: 2, name: "Company 2", color: "#00ff00" },
    { id: 3, name: "Company 3", color: "#0000ff" },
    { id: 4, name: "Company 4", color: "#ff00ff" },
    { id: 5, name: "Company 5", color: "#ffff00" },
    { id: 6, name: "Company 6", color: "#00ffff" },
    { id: 7, name: "Company 7", color: "#ff8000" },
    { id: 8, name: "Company 8", color: "#8000ff" },
  ];

  return (
    <div className="clients-wrapper">
      {/* <h2 className="clients-heading">Our Clients</h2> */}
      <div className="clients-container">
        {clientsData.map((client) => (
          <div className="client-cell" key={client.id}>
            <div className="overlay" style={{ backgroundColor: client.color }} />
            <p className="client-name">{client.name}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
