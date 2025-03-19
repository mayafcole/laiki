const ArtistCard = ({ name, role, quote, image }) => {
    return (
      <div className="text-left p-4">
        <img src={image} alt={name} className="w-60 h-60 mx-auto object-cover mb-4" />
        <h3 className="font-body font-semibold text-xl">{name}</h3>
        <p className="font-body font-semibold text-black mb-2">{role}</p>
        <p className="font-body italic text-sm">"{quote}"</p>
      </div>
    );
  };
  
  export default ArtistCard;
  