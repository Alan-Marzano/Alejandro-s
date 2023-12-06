import WSPGallery from './WSPGallery';
import '../../app.css';


function Map() {

  const galleryImages = [
    {
      img: "sushi3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "cocina.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "salmon.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "pollo2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "postre3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "carne4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: 'postre4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      img: "vino1.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "carne2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "carne.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "sushi.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "restaurante2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <div className="container-fluid-6">
    
      <h3 className="titulos">Galeria</h3>
    
      <WSPGallery
        galleryImages={galleryImages}
      />
      
    </div>
  );
}

export default Map;