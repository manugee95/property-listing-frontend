function Card({item}) {
  return (
    <div className="border border-gray-600 md:w-[40%] lg:w-[25%]">
      <img src={item.imageUrl} alt="" className="h-[200px] w-full object-cover" />
      <div className="p-[10px]">
        <h3 className="text-center font-bold text-xl">{item.name}</h3>
        <p>Adress - {item.address}</p>
        <p>Price - {item.price}</p>
        <p>Type - {item.propertyType}</p>
      </div>
    </div>
  );
}

export default Card;
