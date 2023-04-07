function DessertsList({data}) {
    console.log(data)
  
  let filter = data.filter((elem) => elem.calories < 500);
  
  for (let i = 0; i < filter.length - 1; i++) {
    if (filter[i].calories > filter[i + 1].calories) {
      let aux = filter[i];
      filter[i] = filter[i + 1];
      filter[i + 1] = aux;
    }
    };
  
    return (
      <ul>
        {
          filter && filter.map((elem, index) => {
            return (
              <li key={elem.name} id={index}>{`${elem.name} - ${elem.calories} cal`}</li>
            )
          })
        }
      </ul>
    )
  }
  
  export default DessertsList;
  