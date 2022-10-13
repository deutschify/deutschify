
const MeanigList = ({ mean }) => {
  return (

      <div className=" coaster">
          {mean.map((val) =>
              val.meanings.map((means) =>
                  means.definitions.map((def) => (
                      <div key={def.definition}>
                          <li className=" bg-palette-20">{def.definition}</li>
                      
                      </div>
                  ))
              )
          )}
      </div>
  );
};

export default MeanigList;
