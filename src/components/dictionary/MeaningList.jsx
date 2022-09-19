
const MeanigList = ({ mean }) => {
  return (

      <div className=" border-4 border-palette-30 rounded-lg shadow-outer ">
          {mean.map((val) =>
              val.meanings.map((means) =>
                  means.definitions.map((def) => (
                      <div className=" bg-palette-20" key={def.definition}>
                          <li className=" bg-palette-20">{def.definition}</li>
                      
                      </div>
                  ))
              )
          )}
      </div>
  );
};

export default MeanigList;
