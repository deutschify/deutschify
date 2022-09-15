const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
        return def.synonyms?.map(syn => (
          <li className="bg-palette-10" >{syn}</li>
        ))
      })))}
    </div>
  );
};

export default Synonym;
