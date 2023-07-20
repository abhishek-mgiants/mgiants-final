
import './Clients.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
  AOS.init({duration:1000})
  const clientsData = [
    { id: 1, name: "Company 1", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/APS.jpg?raw=true' },
    { id: 2, name: "Company 2", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/CMS.jpg?raw=true' },
    { id: 3, name: "Company 3", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/Cosmos.jpg?raw=true' },
    { id: 4, name: "Company 4", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/DOorLo.png?raw=true' },
    { id: 5, name: "Company 5", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/Dog.png?raw=true' },
    { id: 6, name: "Company 6", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/Patliputra_logistics.png?raw=true' },
    { id: 7, name: "Company 7", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/Propmine.png?raw=true' },
    { id: 8, name: "Company 8", imgPath:'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Clients/TaxVITT.jpg?raw=true' },
  ];

  return (
    <div className="clients-wrapper">
      {/* <h2 className="clients-heading">Our Clients</h2> */}
      <div className="clients-container">
        {clientsData.map((client) => (
          <div  className="client-cell" key={client.id}>
            {/* <div className="overlay" style={{ backgroundColor: client.color }} /> */}
            {/* <p className="client-name">{client.name}</p>  */}
            <img data-aos="zoom-in" src={client.imgPath} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
