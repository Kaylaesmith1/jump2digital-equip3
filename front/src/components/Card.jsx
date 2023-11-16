const Card = ({ name, type, description, x, y }) => {
  const typeColor = (type) => {
    let value = "";
    switch (type) {
      case "Centres d'exposicions":
        value =
          "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300";
        break;

      case "Centres patrimonials":
        value =
          "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300";
        break;

      default:
        value =
          "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300";
        break;
    }
    return value;
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <span className={typeColor(type)}>{type}</span>
      </div>
      <p className="my-2">{description}</p>
      <a
        href={`https://www.google.es/maps/@${x},${y},14z?entry=ttu`}
        rel="noreferrer"
        target="_blank"
        className="text-center"
      >
        Go to this citysight
      </a>
    </div>
  );
};

export default Card;
