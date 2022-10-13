const Example = ({ mean }) => {
  return (
      <div className="coaster">
          {mean.map((val) =>
              val.meanings.map((means) =>
                  means.definitions.map((def) => (
                      <div key={def.example}>
                          {def.example ? (
                              <li className=""> {def.example}</li>
                          ) : (
                              ""
                          )}
                      </div>
                  ))
              )
          )}
      </div>
  );
};

export default Example;
