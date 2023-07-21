
import './Clients.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
  AOS.init({duration:1000})
  const clientsData = [
    { id: 1, name: "Company 1", imgPath:'assets/Clients/APS.jpg' },
    { id: 2, name: "Company 2", imgPath:'assets/Clients/CMS.jpg' },
    { id: 3, name: "Company 3", imgPath:'assets/Clients/Cosmos.jpg' },
    { id: 4, name: "Company 4", imgPath:'assets/Clients/Dog.png' },
    { id: 5, name: "Company 5", imgPath:'assets/Clients/DOorLo.png' },
    { id: 6, name: "Company 6", imgPath:'assets/Clients/Patliputra_logistics.png' },
    { id: 7, name: "Company 7", imgPath:'assets/Clients/Propmine.png' },
    { id: 8, name: "Company 8", imgPath:'assets/Clients/TaxVITT.jpg' },
  ];

  return (
    <div className="clients-wrapper">
      {/* <h2 className="clients-heading">Our Clients</h2> */}
      <div className="clients-container">
        {clientsData.map((client) => (
          <div data-aos='zoom-in'  className="client-cell" key={client.id}>
            {/* <div className="overlay" style={{ backgroundColor: client.color }} /> */}
            {/* <p className="client-name">{client.name}</p>  */}
            <img  src={client.imgPath} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
