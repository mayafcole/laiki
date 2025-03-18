const ArtistCard = ({ name, role, quote, image }) => {
    return (
      <div className="text-center p-4">
        <img src={image} alt={name} className="w-40 h-40 mx-auto rounded-lg object-cover mb-4" />
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p>
        <p className="italic text-sm">"{quote}"</p>
      </div>
    );
  };
  
  export default ArtistCard;
  