const Synonym = ({ mean }) => {
  return (
      <div className="border-4 border-palette-30 rounded-lg shadow-outer">
          {mean.map((val) =>
              val.meanings.map((means) =>
                  means.definitions.map((def) => {
                      return def.synonyms?.map((syn) => (
                          <li className="bg-palette-10">{syn}</li>
                      ));
                  })
              )
          )}
      </div>
  );
};

export default Synonym;
