const Synonym = ({ mean }) => {
  return (
      <div className="coaster">
          {mean.map((val) =>
              val.meanings.map((means) =>
                  means.definitions.map((def) => {
                      return def.synonyms?.map((syn) => (
                          <li className='p-2' >{syn}</li>
                      ));
                  })
              )
          )}
      </div>
  );
};

export default Synonym;
